import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@mui/material/Box";
import { Typography } from "@material-ui/core";

const QuestionDetails = () => {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const formdetails = useSelector((state) => state.questions);
  console.log(formdetails);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!question || !answer) {
      return toast.error(" Fill in all the fields!");
    }

    const data = {
      id: formdetails.length > 0 ? formdetails[formdetails.length - 1].id + 1 : 1,
      question,
      answer,
    };

    dispatch({ type: "ADD_DETAILS", payload: data });
    toast.success("details added successfully");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            "& > :not(style)": { m: 1 },
            display: "flex",
            flexDirection: "column",
            width: "50%",
            }}
        >
          <h4>Create a new question</h4>
          <TextField
           id="question-field"
            label="Question"
            variant="outlined"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <TextField
            id="answer-field"
            label="Answer"
            variant="outlined"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
          <Typography>
            <Button variant="contained" color="primary" type="submit">
              Create Question
            </Button>
          </Typography>
        </Box>
      </form>
    </div>
  );
};
export default QuestionDetails;

