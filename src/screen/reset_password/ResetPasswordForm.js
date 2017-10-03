import React from "react";
import {reduxForm, Field} from "redux-form";
import {View, TouchableOpacity} from "react-native";
import I18n from "./../../i18n/i18n";

import {
  ButtonAction,
  TextField,
} from "./../../component";

import {required, emailFormat} from "../../validator";

const ResetPasswordForm = (props) => {
  return(
    <View>
      <Field
        name={"email"}
        component={TextField}
        placeholder={I18n.t("reset_password.placeholder.email")}
        validate={[required, emailFormat]}
      />

      <ButtonAction
        text={I18n.t("reset_password.send_mail")}
        onPress={props.handleSubmit}
      />
    </View>
  );
}

export default reduxForm({
  form: "ResetPasswordForm",
})(ResetPasswordForm);
