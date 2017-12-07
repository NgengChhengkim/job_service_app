import {Url} from "./../config/Url";
import {serverValidate} from "./../lib";
import {switchToTabScreen} from "./../lib/HandleScreen";
import {ServerRequestWithToken} from "./../lib/ApiRequest";
import {AsyncStorage} from "react-native";

export const handleCompleteRegistrationRecruiter = (values, navigator) => {
  return (dispatch) => {
    dispatch({type: "START_COMPLETE_RECRUITER_REGISTRATION"});
    ServerRequestWithToken("/api/v1/complete_registration/user", "PUT", formValue(values))
    .then((response) => {
      try {
        AsyncStorage.setItem("user", JSON.stringify(response.data));
        dispatch({
          type: "COMPLETE_RECRUITER_REGISTRATION_SUCCESS"
        });
        setTimeout(() => switchToTabScreen(), 100);
      } catch (error) {
        throw {status: 100};
      }
    })
    .catch((error) => {
      dispatch({
        type: "COMPLETE_RECRUITER_REGISTRATION_FAIL"
      });
      serverValidate(error, "CompleteRegistrationRecruiterForm", dispatch, navigator);
    });
  }
}

function formValue(values) {
  values["job_type_ids"] = values["job_types"].map(value => value.id)
  values["location_id"] = values["location"]["id"]

  return {...values, gender: "male"}
}
