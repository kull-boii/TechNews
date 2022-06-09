const reducer = (state, action) => {
  switch (action.type) {
    case "GET_STORIES":
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
  }

  return state;
};

export default reducer;
