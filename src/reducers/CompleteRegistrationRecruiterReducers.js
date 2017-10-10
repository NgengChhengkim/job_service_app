const INIT_STATE = {
  loading: false,
};

export default CompleteRegistrationRecruiterReducers = (state = INIT_STATE, action) => {
  switch(action.type) {
    case "START_COMPLETE_RECRUITER_REGISTRATION":
      return {...state, loading: true};
    case "COMPLETE_RECRUITER_REGISTRATION_SUCCESS":
      return {...state, loading: false};
    case "COMPLETE_RECRUITER_REGISTRATION_FAIL":
      return {...state, loading: false};
    default:
      return state;
  }
}
