const { Pool } = require('pg');
const myURI ='postgres://lftjnnju:qyzZQuSoQ7gMqBxSCHxkLSqbyyWwrefc@queenie.db.elephantsql.com/lftjnnju';
const pool = new Pool({
  connectionString: myURI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
}


