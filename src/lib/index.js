import {Alert} from "react-native";
import {stopSubmit} from "redux-form";
import I18n from "./../i18n/i18n";
import {handleResetScreen} from "./HandleScreen";

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

const serverValidate = (error, formName = "", dispatch = null, navigator = null) => {
  if(error.status == 400) {
    errorResponse = JSON.parse(error._bodyText).errors;
    errorMessage = normalizeErrorResponse(errorResponse);
    if(errorMessage._error) {
      if(errorResponse[0].code == 2002) {
        handleResetScreen(navigator, "session.index", true)
      } else {
        setTimeout(() => Alert.alert(errorMessage._error), 100);
      }
    } else {
      dispatch(stopSubmit(formName, errorMessage));
    }
  } else if(error.status == 500) {
    setTimeout(() => Alert.alert(I18n.t("errors.error500")), 100);
  } else if (error.status == 100) {
    setTimeout(() => Alert.alert(I18n.t("errors.something_went_wrong")), 100);
  } else {
    setTimeout(() => Alert.alert(I18n.t("errors.connection_error")), 100);
  }
}

export {normalizeErrorResponse, serverValidate}
