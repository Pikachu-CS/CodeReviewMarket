const bcrypt = require('bcryptjs');
const db = require('../models/poolModel')

const bcryptController = {};

bcryptController.signUp = async (req, res, next) => {
  console.log("hit")
  const {users, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  console.log("user", users)
  console.log("password", password)
  console.log("hash", typeof hash)
  console.log("typeof hash", typeof hash)
  try {
  await db.query('INSERT INTO usertable(id, users, password) VALUES (DEFAULT, $1, $2) RETURNING *',
  [users, hash]);
  return next();
  } catch(err) {
    return next({
      log: 'bycryptController.checkCreds ERROR',
      status: 500,
      message: { err: 'Could not post credentials'}
      })
  }
};

bcryptController.checkCreds = async (req, res, next) => {
  const { users, password } = req.body;
  try {
      if(!users || !password) {
          return next("error")
      }
      const userInDb = await db.query('SELECT * FROM usertable WHERE users = $1', [users]);
      const isMatch = await bcrypt.compare(password, userInDb.rows[0].password)
      if(isMatch) {
      res.locals.userInfo = userInDb.rows[0].users;
      return next()
      } else {
        res.locals.userInfo ="NOMATCHFOUND"
        return next()
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
