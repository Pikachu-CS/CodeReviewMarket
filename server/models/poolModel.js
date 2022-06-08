const { Pool } = require('pg');
const myURI ='postgres://jrcomaxf:CJhklxVoPlMt7qrlRjWUK0uFWeDVvKcW@heffalump.db.elephantsql.com/jrcomaxf';
const pool = new Pool({
  connectionString: myURI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
}


