const INIT_STATE = {
  loading: true,
  loadingMore: false,
  page: 1,
  listData: []
};

export default JobFeedListReducers = (state = INIT_STATE, action) => {
  switch(action.type) {
    case "START_FETCH_DATA":
      return {...state, loading: true};
    case "START_LOAD_MORE":
      return {...state, loadingMore: true};
    case "FETCH_DATA_SUCCESS":
      if(action.refreshing) {
        data = action.payload.data;
      } else if(action.payload.data.length > 0) {
        data = [...state.listData, ...action.payload.data];
      } else {
        data = state.listData;
      }
      return {...state, loading: false, loadingMore: false, listData: data, page: action.page};
    case "FETCH_DATA_FAIL":
      return {...state, loading: false};
    default:
      return state;
  }
}
