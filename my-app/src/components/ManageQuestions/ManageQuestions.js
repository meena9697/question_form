import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import "./ManageQuestions.scss";
import useToggle from "../../customhooks/useToggle";
import EditModel from "../model/EditModel";

import { IconButton } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import Popover from "@mui/material/Popover";
import Button from "@material-ui/core/Button";
import Box from "@mui/material/Box";
import { Typography } from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import HideSourceIcon from "@mui/icons-material/HideSource";

const QuestionRow = ({ question, setModelOpen }) => {
  const [showAnswer, toggleShowAnswer] = useToggle();

  const dispatch = useDispatch();

  const deleteDetails = (payload) => {
    dispatch({ type: "DELETE_DETAILS", payload });
    toast.success("Deleted Successfully!");
  };

  return (
    <Box
      sx={{ boxSizing: "content-box", width: "50%", border: " solid 1px grey" }}
    >
      <tr key={question.id}>
        {question.id}
        {"."}
        {question.question}
        <Button onClick={toggleShowAnswer} type="link">
          {showAnswer ? <HideSourceIcon /> : <VisibilityIcon />}
        </Button>
        {showAnswer && <tr><b>{"Answer: "}</b>{question.answer}</tr>}
        <td className="questiontable__td">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={() => {
              dispatch({ type: "SET_EDIT_QUESTION", payload: question });
              setModelOpen(true);
            }}
          >
            <EditIcon />
          </Button>
        </td>
        <td>
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            onClick={() => deleteDetails(question)}
          >
            <DeleteIcon />
          </Button>
        </td>
      </tr>
    </Box>
  );
};

export default function ManageQuestions() {
  const formdetails = useSelector((state) => state.questions ?? []);

  const DeleletAllButton = useSelector((state) => state.questions ?? []);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const [modelOpen, setModelOpen] = useState(false);

  const open = Boolean(anchorEl);
  const dispatch = useDispatch();

  const deleteAll = (payload) => {
    dispatch({ type: "DELETE_ALL", payload });
    toast.success("Deleted Successfully!");
  };

  const sortquestion = () => {
    toast.warning("Not yet implemented");
  };

  return (
    <div>
      <h1>The awesome Q and A tool </h1>
      <h4 className="subheading">
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
      <Box sx={{ m: 1, display: "flex", flexDirection: "column" }}>
        <table className="questiontable">
          <tbody>
            {formdetails.map((question) => (
              <QuestionRow
                key={question.id}
                question={question}
                setModelOpen={setModelOpen}
              />
            ))}
          </tbody>
        </table>
      </Box>
      <div className="bottom-buttons">
        {DeleletAllButton.length > 0 && (
          <Button
            className="bottom-buttons__button1"
            variant="contained"
            color="primary"
            type="submit"
            onClick={sortquestion}
          >
            Sort question
          </Button>
        )}
        {DeleletAllButton.length > 0 && (
          <Button
            className="bottom-buttons__button2"
            variant="contained"
            color="secondary"
            type="submit"
            onClick={deleteAll}
          >
            Remove all questions
          </Button>
        )}
      </div>
      <EditModel modelOpen={modelOpen} setModelOpen={setModelOpen} />
    </div>
  );
}
