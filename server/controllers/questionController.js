const {Question} = require('../../database/models/index.js');

const questionController = {
  get: (req, res) => {
    Question.findAll()
      .then(data => {
        res.status(200).send(data);
        console.log('successfully fetched data from /questions');
      })
      .catch(err => {
        res.status(400);
        console.log('failed to fetch data from /questions', err);
      });
  },
  post: (req, res) => {

  }
}

module.exports = questionController;