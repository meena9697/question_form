const initialState = {
  questions: [
    {
      id: 1,
      question: "What is redux?",
      answer:
        "Redux is an open-source JavaScript library for managing and centralizing application state.",
    },
  ],
  editQuestion: null,
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DETAILS":
      state = {
        ...state,
        questions: [...state.questions, action.payload],
      };
      return state;

    case "DELETE_DETAILS":
      const filterDetails = state.questions.filter(
        (question) => question.id !== action.payload.id
      );

      state = {
        ...state,
        questions: filterDetails,
      };

      return state;

    case "EDIT_DETAILS":
      const indextoEdit = state.questions.findIndex(
        (question) => question.id === action.payload.id
      );

      state.questions[indextoEdit] = action.payload;
      state.editQuestion = null;
      return state;

    case "SET_EDIT_QUESTION":
      state = {
        ...state,
        editQuestion: action.payload,
      };
      return state;

    case "DELETE_ALL":
      state = {
        ...state,
        questions: [],
      };
      return state;
    default:
      return state;
  }
};
export default formReducer;
