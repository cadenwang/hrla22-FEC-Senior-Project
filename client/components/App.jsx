import React from 'react';
import Search from './Search.jsx';
import QuestionsAnswersVotesContainer from './QuestionsAnswersVotesContainer.jsx';
import styled from 'styled-components';
import axios from 'axios';

const ContainerDiv = styled.div`
  border-bottom: 1px solid #e0e0e0;
  border-top: 1px solid #e0e0e0;
  padding: 10px 20px 38px 100px;
`
const H2 = styled.h2`
  padding-left: 10px;
  font-family: verdana,arial,helvetica,sans-serif;
  font-size: 20px;
`

const Div = styled.div`
  padding-left: 10px;
  font-family: verdana,arial,helvetica,sans-serif;
  font-size: 12px;
  padding-bottom: 10px;
`

export default class App extends React.Component {
  constructor() {
    super()
    
    this.state = {
      questions: [],
      answers: [],
    }
    this.getQuestionData();
  }

  getQuestionData() {
    this.getAnswerData();
    axios.get('/questions').then(data => {
      data.data.sort((a, b) => {
        return a.id - b.id
      })
      this.setState({
        questions: data.data,
        answers: this.state.answers
      })
    })
    .catch(err => {
      console.log('failed to get question data in client', err)
    })
  }

  getAnswerData() {
    axios.get('/answers').then(data => {
      this.setState({
        questions: this.state.questions,
        answers: data.data
      })
    })
    .catch(err => {
      console.log('failed to get answer data in client', err)
    })
  }

  renderSearch(query) {
    console.log(query.target[0].value)
    query.preventDefault();
    const array = [];
    this.state.questions.forEach(question => {
      console.log(question)
      if (question.text && question.text.includes(query.target[0].value)) {
        array.push(question);
      }
    })
      this.state.questions = array;
      this.setState({
        questions: [...this.state.questions],
        answers: [...this.state.answers]
      })
      console.log(this.state.questions)
  }

  onFormClear(query) {
    console.log('got em')
    if (!query.target.value) {
      this.getQuestionData();
    }
  }

  render() {
    if (this.state.questions.length > 0) {
      return (
        <ContainerDiv>
          <H2>Customer questions & answers</H2>
          <Search renderSearch={this.renderSearch.bind(this)} onFormClear={this.onFormClear.bind(this)} />
          {this.state.questions.map((question, index)=> <QuestionsAnswersVotesContainer votes={question.votes} question={question} getQuestionData={this.getQuestionData.bind(this)} answers={this.state.answers} key={index} />)}
        </ContainerDiv>
      )
    } else {
      return (
        <ContainerDiv>
          <H2>Have a question?</H2>
          <Div>Find answers in product info, Q&As, reviews</Div>
          <Search noQuestions={true} />
        </ContainerDiv>
      )
    }
  }
}

//upvoting throws the upvoted item into a random spot in array

//created a page for no questions/answers, but when one item was null the whole list would show an error
//when searching, it would give me errors for null
