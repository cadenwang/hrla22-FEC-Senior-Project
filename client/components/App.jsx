import React from 'react';
import Search from './Search.jsx';
import QuestionsAnswersVotesContainer from './QuestionsAnswersVotesContainer.jsx';
import styled from 'styled-components';


const questions = [
  { 
    id: 1,
    text: 'question 1',
    votes: 10
  },
  { 
    id: 2,
    text: 'question 2',
    votes: 20
  },
  { 
    id: 3,
    text: 'question 3',
    votes: 30
  }
]

const answers = [
  { 
    id: 1,
    text: 'answer 1-2'
  }, 
  {
    id: 1,
    text: 'answer 1-2'
  },
  { 
    id: 2,
    text: 'answer 2'
  }, 
  { 
    id: 3,
    text: 'answer 3'
  }
]

const H2 = styled.h2`
  padding-left: 10px;
  font-family: verdana,arial,helvetica,sans-serif;
  font-size: 20px;
`

export default class App extends React.Component {
  constructor() {
    super()
    
    this.state = {
      questions: questions,
      answers: answers,
    }
  }

  render() {
    return (
      <div>
        <H2>Customer questions & answers</H2>
        <Search />
        {this.state.questions.map((question, index)=> <QuestionsAnswersVotesContainer votes={question.votes} question={question} answers={this.state.answers} key={index} />)}
        
      </div>
    )
  }
}