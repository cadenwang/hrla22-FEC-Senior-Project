import React from 'react';
import QuestionAnswersPair from './QuestionAnswersPair.jsx';
import Votes from './Votes.jsx';
import styled from 'styled-components';

const Div = styled.div`
  overflow: hidden;
  width: 100%;
`


export default class QuestionsAnswersVotesContainer extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      question: {}
    }
  }

  render() {
    return (
      <Div>
        <Votes votes={this.props.votes} />
        <QuestionAnswersPair question={this.props.question} answers={this.props.answers} />
      </Div>
    )
  }
}