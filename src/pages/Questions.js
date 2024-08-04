import { Box, Button, CircularProgress, Typography } from "@mui/material"
import React, { useEffect, useState } from 'react'
import useAxios from "../hooks/useAxios"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import {handleScoreChange} from "../redux/actions";
import { decode } from "html-entities";

const getrandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
}
function Questions() {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const {
    question_category,
    question_difficulty,
    question_type,
    amount_of_question,
    score

  } = useSelector(state => state)
  let apiUrl = `/api.php?amount=${amount_of_question}`;
  if (question_category) {
    apiUrl += `&category=${question_category}`;
  }
  if (question_difficulty) {
    apiUrl += `&difficulty=${question_difficulty}`;
  }
  if (question_type) {
    apiUrl += `&type=${question_type}`;
  }

  const [questionIndex, setQuestionIndex] = useState(0);
  const { response, loading } = useAxios({ url: apiUrl });
  const [options, setOptions] = useState([]);
  useEffect(() => {
    if (response?.results.length) {
      const question = response.results[questionIndex];
      let answers = [...question.incorrect_answers]
      answers.splice(
        getrandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setOptions(answers);
    }
  }, [response, questionIndex])


  const handleClickAnswer = (e) => {
    const question = response.results[questionIndex];
    if (e.target.textContent === question.correct_answer) {
      dispatch(handleScoreChange(score + 1));
    }

    if (questionIndex + 1 < response.results.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      navigate("/screen");
    }
  };


  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress></CircularProgress>
      </Box>
    );
  }


  return (
    <Box>
      <Typography variant="h4">Question {questionIndex + 1}</Typography>
      <Typography variant="h4" mt={5}>{response.results[questionIndex].question}</Typography>
      {options.map((data, id) => (
        <Box mt={2} key={id}>
          <Button onClick={handleClickAnswer} variant="contained">
            {decode(data)}
          </Button>
        </Box>
      ))}
      <Box mt={5}>
        Score 2.5
      </Box>
    </Box>
  )
}

export default Questions