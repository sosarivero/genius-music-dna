const User = require('../models/user.model');

async function getOneUser(req, res) {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(200).send('No user found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function createUser(req, res) {
  try {
    const user = await User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
    });
    return res.status(200).json({ message: 'User created', user: user });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getProfile(req, res) {
  try {
    const user = await User.findOne({
      where: { email: res.locals.user.email },
    });

    res.status(200).send(res.locals.user);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {
  getOneUser,
  createUser,
  getProfile,
};
