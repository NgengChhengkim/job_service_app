const USER_TYPE = ["JobSeeker", "Recruiter"];

const INIT_STATE = {
  loading: false,
};

export default SignUpReducers = (state = INIT_STATE, action) => {
  switch(action.type) {
    case "START_REGISTRATION":
      return {...state, loading: true};
    case "REGISTRATION_SUCCESS":
      return {...state, loading: false};
    case "REGISTRATION_FAIL":
      return {...state, loading: false};
    default:
      return state;
  }
}
