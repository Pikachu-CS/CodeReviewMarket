const bcrypt = require('bcryptjs');
const db = require('../models/poolModel')

const bcryptController = {};

bcryptController.signUp = async (req, res, next) => {
  console.log("hit")
  const { user, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  console.log("user", user)
  console.log("hash", hash)
  try {
    await db.query('INSERT INTO users(user, password) VALUES ("Sunit", "Password")');
    return next();
  } 
  catch {
    return next({
    log: 'bycryptController.signUp ERROR',
    status: 500,
    message: { err: 'Could not post credentials'}
    })
  }
};

bcryptController.checkCreds = async (req, res, next) => {
  const { user, password } = req.body;
  try {
      if(!user || !password) {
          return next("error")
      }
      const userInDb = await db.query('SELECT * FROM Users WHERE user = $1', [user]);
      console.log('userInDb: ', userInDb);
      const isMatch = await bcrypt.compare(password, userInDb.rows[0].password)
      if(isMatch) {
      res.locals.userInfo = userInDb.rows[0].user;
      return next()
      } else {
        throw new Error('Password does not match for user: ', user);
      }      
  } catch(err) {
     return next({
      log: 'bycryptController.checkCreds ERROR',
      status: 500,
      message: { err: 'Could not post credentials'}
      })
  }
}


module.exports = bcryptController;