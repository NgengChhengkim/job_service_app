import React from "react";
import {reduxForm, Field} from "redux-form";
import {ScrollView, TouchableOpacity} from "react-native";
import I18n from "./../../i18n/i18n";

import {
  ButtonAction,
  FacebookButton,
  TextField,
  SegmentControl
} from "./../../component";

import {required, emailFormat, minLength, maxLength} from "../../validator";

const minLength8 = minLength(8);
const maxLength128 = maxLength(128);

const RegistrationForm = (props) => {
  return(
    <ScrollView keyboardShouldPersistTaps={"handled"}>
      <Field
        name={"name"}
        component={TextField}
        placeholder={I18n.t("registration.placeholder.name")}
        validate={[required]}
      />

      <Field
        name={"email"}
        component={TextField}
        placeholder={I18n.t("registration.placeholder.email")}
        validate={[required, emailFormat]}
      />

      <Field
        name={"password"}
        component={TextField}
        secureTextEntry={true}
        placeholder={I18n.t("registration.placeholder.password")}
        validate={[required, minLength8, maxLength128]}
      />

      <Field
        name={"confirm_password"}
        component={TextField}
        secureTextEntry={true}
        placeholder={I18n.t("registration.placeholder.confirm_password")}
        validate={[required]}
      />

      <Field
        name="user_type"
        component={(props) =>
          <SegmentControl
            values={[I18n.t("registration.tabs.job_seeker"), I18n.t("registration.tabs.recruiter")]}
            selectedIndex={props.input.value}
            onTabPress={(index) => props.input.onChange(index)}
          />
        }
      />

      <ButtonAction
        text={I18n.t("registration.create")}
        onPress={props.handleSubmit}
      />
      <FacebookButton text={I18n.t("registration.sign_up_facebook")}></FacebookButton>
    </ScrollView>
  );
}

export default reduxForm({
  form: "Registrations",
  initialValues: {
    user_type: 0
  },
  validate: (values) => {
    const errors = {};
    if(values.password !== values.confirm_password) {
      errors.confirm_password = I18n.t("validator.password_not_match")
    }
    return errors;
  }
})(RegistrationForm);
