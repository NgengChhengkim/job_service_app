import React from "react";
import {View} from "react-native";
import {reduxForm, Field} from "redux-form";
import I18n from "./../../i18n/i18n";
import Settings from "./../../config"

import {
  InputSelect,
  ButtonAction,
  TextField,
  PickerInput
} from "./../../component";

import {required, minSelectItem} from "../../validator";

const minSelect = minSelectItem(1);

const CompleteRegistrationRecruiterField = (props) => {
  return (
    <View>
      <Field
        name={"job_types"}
        component={PickerInput}
        placeholder={I18n.t("complete_registration.placeholder.job_type")}
        navigator={props.navigator}
        data={props.jobTypeData}
        validate={minSelect}
      />

      <Field
        name={"location"}
        component={PickerInput}
        placeholder={I18n.t("complete_registration.placeholder.location")}
        navigator={props.navigator}
        data={props.jobTypeData}
        validate={minSelect}
        singleSelect={true}
      />

      <Field
        name={"address"}
        component={TextField}
        placeholder={I18n.t("complete_registration.placeholder.address")}
        validate={[required]}
      />

      <ButtonAction
        text={I18n.t("complete_registration.finish")}
        onPress={props.handleSubmit}
      />
    </View>
  )
}

const CompleteRegistrationJobSeekerField = (props) => {
  return (
    <View>
      <Field
        name={"job_types"}
        component={PickerInput}
        placeholder={I18n.t("complete_registration.placeholder.job_type")}
        navigator={props.navigator}
        data={props.jobTypeData}
        validate={minSelect}
      />
      <Field
        name={"location"}
        component={PickerInput}
        placeholder={I18n.t("complete_registration.placeholder.location")}
        navigator={props.navigator}
        data={props.jobTypeData}
        validate={minSelect}
        singleSelect={true}
      />
      <Field
        name={"gender"}
        component={PickerInput}
        placeholder={I18n.t("complete_registration.placeholder.gender")}
        navigator={props.navigator}
        data={Settings.gender}
        validate={minSelect}
        singleSelect={true}
      />

      <ButtonAction
        text={I18n.t("complete_registration.finish")}
        onPress={props.handleSubmit}
      />
    </View>
  )
}

const CompleteRegistrationForm = (props) => {
  if(props.user_type == "Recruiter") {
    return(
      CompleteRegistrationRecruiterField(props)
    );
  } else {
    return(
      CompleteRegistrationJobSeekerField(props)
    );
  }
}

export default reduxForm({
  form: "CompleteRegistrationForm",
})(CompleteRegistrationForm);
