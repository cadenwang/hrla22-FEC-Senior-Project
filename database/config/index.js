const Sequelize = require('sequelize');
var sequelize = new Sequelize('postgreFEC', 'cadenwang', 'cadenwang', {
  host: 'postgresqlfec.crd4xhhbsgrd.us-west-1.rds.amazonaws.com',
  port: 5432,
  maxConcurrentQueries: 100,
  dialect: 'postgres',
  dialectOptions: {
      ssl:'Amazon RDS'
  }
})

sequelize.authenticate()
         .then(() => {
           console.log('Connected to DB');
         })
         .catch(err => {
           console.log('Failed to connect to DB');
         });

module.exports = sequelize;