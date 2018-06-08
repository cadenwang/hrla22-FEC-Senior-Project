import React from 'react';
import Answer from './Answer.jsx';

const AnswersList = (props) => {
  

  return (
    <div>
      {props.answers.map(answer => <Answer answer={answer} /> )}
    </div>
  )
}

export default AnswersList;