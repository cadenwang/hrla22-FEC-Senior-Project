import React from 'react';
import Question from './Question.jsx';
import AnswersList from './AnswersList.jsx';

export default class QuestionAnswersPair extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Question question={this.props.question}/>
        <AnswersList answers={this.props.answers.filter(answer => answer.id === this.props.question.id)} />
      </div>
    )
  }
}