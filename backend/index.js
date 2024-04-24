require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const { checkConnection, syncModels } = require('./api/database/index');
const { addRelationsToModels } = require('./api/database/models');

async function checkAndSyncSQL() {
  await checkConnection();
  addRelationsToModels();
  await syncModels();
}

const initializeAndListenExpress = () => {
  try {
    app
      .use(
        cors({
          credentials: true,
        }),
      )
      .use(express.json())
      .use('/api', require('./api/routes/index'))
      .listen(3000, () => {
        console.log('Server started');
      });
  } catch (error) {
    console.log(error);
  }
};

const startApi = async () => {
  try {
    await checkAndSyncSQL();
    initializeAndListenExpress();
  } catch (error) {
    console.log(error);
  }
};

startApi();
