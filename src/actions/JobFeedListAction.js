import {serverValidate} from "./../lib";
import {ServerRequestWithToken} from "./../lib/ApiRequest";

export const handleFetchData = (page = 1, refreshing = false, loadingMore = false) => {
  return (dispatch) => {

    if(loadingMore) {
      dispatch({
        type: "START_LOAD_MORE"
      });
    } else if(!refreshing) {
      dispatch({
        type: "START_FETCH_DATA"
      });
    }

    ServerRequestWithToken(`/api/v1/job_feed/jobs?page=${page}`, "GET")
    .then((response) => {
      dispatch({
        type: "FETCH_DATA_SUCCESS",
        payload: response,
        page: page,
        refreshing: refreshing
      });
    })
    .catch((error) => {
      dispatch({
        type: "FETCH_DATA_FAIL"
      });
      serverValidate(error);
    });
  }
}
