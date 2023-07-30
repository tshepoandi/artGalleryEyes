import React from 'react'
import { useState,useEffect } from 'react'
import { GameQuestions, QuestionDiv, QuestionTitle } from './style'

const Question = () => {
  const [word,setWord] = useState();


  useEffect(()=>{
    fetch('https://opentdb.com/api.php?amount=10')
    .then((response)=>{
      response.json()
    }).then((data)=> {
      setWord(data)
      console.log(data)
    })
  }, [])
  return (
    <QuestionDiv>
      <QuestionTitle className='Question'>HI </QuestionTitle>
      <GameQuestions ClassName='QuestionFromAPI'>
        {word}
      </GameQuestions>
    </QuestionDiv>
  )
}

export default Question


// https://opentdb.com/api.php?amount=10