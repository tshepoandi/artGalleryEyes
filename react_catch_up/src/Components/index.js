import React from 'react'
import { useState,useEffect } from 'react'
import { GameQuestions, QuestionDiv, QuestionTitle } from './style'

const Question = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=10')
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data.results);
        console.log(data.results);
      });
  }, []);
  
  return (
   <QuestionDiv>
      <QuestionTitle className='Question'>HI</QuestionTitle>
      <GameQuestions className='QuestionFromAPI'>
        {questions.map((question, index) => (
          <div key={index}>
            <h3>Question {index + 1}</h3>
            <p>{question.question}</p>
          </div>
        ))}
      </GameQuestions>
    </QuestionDiv>
  )
}

export default Question


// https://opentdb.com/api.php?amount=10