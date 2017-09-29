const INIT_STATE = {
  loading: false,
};

export default ResetPasswordReducers = (state = INIT_STATE, action) => {
  switch(action.type) {
    case "START_RESET_PASSWORD":
      return {...state, loading: true};
    case "RESET_PASSWORD_FAIL":
      return {...state, loading: false};
    case "RESET_PASSWORD_SUCCESS":
      return {...state, loading: false};
    default:
      return state;
  }
}
