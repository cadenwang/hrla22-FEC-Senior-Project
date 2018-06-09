import React from 'react';
import styled from 'styled-components';
import ExpandedAnswer from './ExpandedAnswer.jsx';

const Div = styled.div`
  padding-left: 100px;
  font-size: 14px;
`

const AuthorDiv = styled.div`
  color: gray;
  font-size: 14px;
`
const Button = styled.button`
  font-size: 14px;
  border: none;
  color: #277cd8;
`
const CollapseButton = styled.button`
  margin-top: 10px;
  padding: 7px 10px;
  display: block;
  font-size: 14px;
  background: white;
  border-radius: 4px;
`
const I = styled.i`
  font-size: 10px;
  color: black;
  margin: 10px 8px 0 -10px;
`

export default class AnswerContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      answers: this.props.answers,
      answer: this.props.answers[0],
      viewCount: 2,
      isExpanded: false
    }
  }

  expandAnswers() {
    const array = this.state.answers.slice(0, this.state.viewCount);
    return (
      array.map(answer => <ExpandedAnswer answer={answer}/>)
    )
  }

  preventNegatives() {
    if (this.state.answers.length - this.state.viewCount <= 0) {
      return;
    } else {
      return (
        <Button>
        <I className="fas fa-angle-down"></I>
          See more answers ({this.state.answers.length - this.state.viewCount})
        </Button>
      )
    }
  }

  render() {
    if (this.state.answers.length === 0) {
      return (
        <div>
        </div>
      )
    }
    if (this.state.answers.length === 1) {
      return (
        <Div>
          {this.expandAnswers()}
        </Div>
      )
    } else if (this.state.isExpanded === false) {
      return (
        <Div>
          {this.expandAnswers()}
          {this.preventNegatives()}
        </Div>
      )
    } else {
      return (
        <Div>
          {this.expandAnswers()}
          {this.preventNegatives()}
          <CollapseButton>
            Collapse all answers
          </CollapseButton>
        </Div>
      )
    }
  }
}