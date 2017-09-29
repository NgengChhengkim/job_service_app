const INIT_STATE = {
  loading: false,
};

export default LoginReducers = (state = INIT_STATE, action) => {
  switch(action.type) {
    case "START_LOGIN":
      debugger
      return {...state, loading: true};
    case "LOGIN_SUCCESS":
      return {...state, loading: false};
    case "LOGIN_FAIL":
      return {...state, loading: false};
    default:
      return state;
  }
}
