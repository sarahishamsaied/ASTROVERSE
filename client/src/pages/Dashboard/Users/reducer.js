function reducer(state, action) {
  switch (action.type) {
    case "UPDATE":
      return {
        ...state,
        [action.key]: action.value,
      };
    case "LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
export default reducer;
