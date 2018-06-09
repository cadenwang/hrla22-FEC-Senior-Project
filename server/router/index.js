const router = require('express').Router();
const answerController = require('../controllers/answerController');
const questionController = require('../controllers/questionController');

router.route('/questions')
  .get(questionController.get)
  .post(questionController.post);

router.route('/answers')
  .get(answerController.get)
  .post(answerController.post);

router.route('/questions/:id')

module.exports = router;