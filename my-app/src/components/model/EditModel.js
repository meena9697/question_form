import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { MdOutlineClose } from "react-icons/md";
import { Button } from "@mui/material";

import "./EditModel.scss";

export default function EditModel({ modelOpen, setModelOpen }) {
  const [editedQuestion, setQuestion] = useState("");
  const [editedAnswer, setAnswer] = useState("");
  const dispatch = useDispatch();

  const currentQuestion = useSelector((state) => state.editQuestion);

  const update = (e) => {
    e.preventDefault();
    const editedQuestionObj = {
      question: editedQuestion,
      answer: editedAnswer,
      id: currentQuestion.id,
    };
    dispatch({ type: "EDIT_DETAILS", payload: editedQuestionObj });
    setModelOpen(false);
  };
  useEffect(() => {
    if (currentQuestion) {
      setQuestion(currentQuestion.question);
      setAnswer(currentQuestion.answer);
    }
  }, [currentQuestion]);

  return (
    <div>
      {modelOpen && (
        <div className="wrapper">
          <div className="container">
            <div>
              <MdOutlineClose
                className="closeButton"
                onClick={() => setModelOpen(false)}
                onKeyDown={() => setModelOpen(false)}
                tabIndex={0}
                role="button"
              />
            </div>
            <form className="form">
              <h1 className="formTitle">EDIT DETAILS</h1>
              <label htmlFor="question">
                Question
                <input
                  type="text"
                  id="question"
                  value={editedQuestion}
                  onChange={(e) => setQuestion(e.target.value)}
                />
              </label>
              <label htmlFor="answer">
                Answer
                <input
                  type="text"
                  id="answer"
                  value={editedAnswer}
                  onChange={(e) => setAnswer(e.target.value)}
                />
              </label>
              <div className="buttonContainer">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={update}
                >
                  {" "}
                  ADD
                </Button>
                <Button type="submit" variant="contained" color="secondary">
                  {" "}
                  CANCEL
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}{" "}
    </div>
  );
}
