import React from "react";
import {View} from "react-native";
import {reduxForm, Field} from "redux-form";
import I18n from "./../../i18n/i18n";

import {
  InputSelect,
  ButtonAction,
  TextField,
  PickerInput
} from "./../../component";

import {required, minSelectItem} from "../../validator";

const CompleteRegistrationRecruiterForm = (props) => {
  return(
    <View>
      <Field
        name={"job_types"}
        component={PickerInput}
        navigator={props.navigator}
        data={props.jobTypeData}
        validate={minSelectItem}
      />

      <Field
        name={"location"}
        component={PickerInput}
        navigator={props.navigator}
        data={props.jobTypeData}
        validate={minSelectItem}
        singleSelect={true}
      />

      <Field
        name={"address"}
        component={TextField}
        placeholder={I18n.t("complete_registration.recruiter.placeholder.address")}
        validate={[required]}
      />

      <ButtonAction
        text={I18n.t("complete_registration.recruiter.finish")}
        onPress={props.handleSubmit}
      />
    </View>
  );
}

export default reduxForm({
  form: "CompleteRegistrationRecruiterForm",
})(CompleteRegistrationRecruiterForm);
