const jwt = require('jsonwebtoken');
const User = require('../../models/user.model');

function checkAuth(req, res, next) {
  try {
    console.log(req.headers);
    if (!req.headers.authorization) {
      return res.status(401).send('Token not found');
    }
    jwt.verify(req.headers.authorization, process.env.SECRET, async (err, payload) => {
      if (err) return res.status(401).send('Token not valid');
      console.log(payload);
      const user = await User.findOne({
        where: { email: payload.email },
      });
      if (!user) return res.status(401).send('User not found');

      res.locals.user = user;
      next();
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = { checkAuth };
