import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@mui/material/Box";
import { Typography } from "@material-ui/core";
import { IconButton } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import Popover from "@mui/material/Popover";

const QuestionDetails = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const formdetails = useSelector((state) => state);
  console.log(formdetails);

  const dispatch = useDispatch();

  const deleteDetails = (payload) => {
    dispatch({ type: "DELETE_DETAILS", payload });
    toast.success("Deleted Successfully!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!question || !answer) {
      return toast.error(" Fill in all the fields!");
    }

    const data = {
      question,
      answer,
    };

    console.log(data, "This is data");
    dispatch({ type: "ADD_DETAILS", payload: data });
    toast.success("details added successfully");
  };

  return (
    <div>
      <h1>The awesome Q and A tool </h1>
      <h4>
        Created questions
        <IconButton
          aria-owns={open ? "mouse-over-popover" : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >
          <HelpIcon />
        </IconButton>
        <Popover
          id="mouse-over-popover"
          sx={{
            pointerEvents: "none",
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <Typography sx={{ p: 1 }}>
            You can view all the Q and A here
          </Typography>
        </Popover>
      </h4>
        <Box
          sx={{
            "& > :not(style)": { m: 1 },
            display: "flex",
            flexDirection: "column",
          }}
        >
          <table>
            <tbody>
              {formdetails.map((details, question) => (
                <tr key={question}>
                  <tr>{details.question}</tr>
                  <tr>{details.answer}</tr>
                  <td>
                    <Button variant="contained" color="primary" type="submit">
                      EDIT
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      type="submit"
                      onClick={() => deleteDetails(details, question)}
                    >
                      DELETE
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>
      <Typography>
        <Button variant="contained" color="primary" type="submit">
          Sort question
        </Button>
        <Button variant="contained" color="secondary" type="submit">
          Remove all questions
        </Button>
      </Typography>
      
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            "& > :not(style)": { m: 1 },
            display: "flex",
            flexDirection: "column",
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
