const initialState = [
  {
    question: "1.What is redux?",
    answer:
      "Redux is an open-source JavaScript library for managing and centralizing application state.",
  },
];

const formReducer = (state = initialState, action) => {
  switch (action.type) {

    case "ADD_DETAILS":
      state = [...state, action.payload];
      return state;

    case "DELETE_DETAILS":
      const filterDetails = state.filter(
        (details) => details.question !== action.payload.question && details);
      state = filterDetails;
      return state;

  default:
    return state;
      }
};
export default formReducer;
