import {Alert} from "react-native";
import {stopSubmit} from "redux-form";
import I18n from "./../i18n/i18n";

const normalizeErrorResponse = (errorResponse) => {
  let errorObj = {};
  for(let obj of errorResponse) {
    if(obj.field) {
      errorObj[obj.field.toLowerCase()] = `${obj.field} ${obj.message}`;
    } else {
      errorObj["_error"] = obj.message;
    }
  }
  return errorObj;
}

const serverValidate = (error, formName, dispatch) => {
  if(error.status == 400) {
    errorResponse = JSON.parse(error._bodyText).errors;
    errorMessage = normalizeErrorResponse(errorResponse);
    if(errorMessage._error) {
      Alert.alert(errorMessage.error);
    } else {
      dispatch(stopSubmit(formName, errorMessage));
    }
  } else if(error.status == 500) {
    Alert.alert(I18n.t("server_error.error500"));
  } else {
    Alert.alert(I18n.t("server_error.connection_error"));
  }
}

export {normalizeErrorResponse, serverValidate}
