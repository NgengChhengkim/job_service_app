import React from "react";
import {reduxForm, Field} from "redux-form";
import {ScrollView, Button, TouchableOpacity, View, Text} from "react-native";
import I18n from "./../../i18n/i18n";
import {TextField, ButtonAction, PickerInput} from "./../../component";
import {required, emailFormat, minSelectItem} from "../../validator";

const EmailLoginForm = (props) => {
  return (
    <ScrollView keyboardShouldPersistTaps={"handled"}>
      <Field
        name={"email"}
        component={TextField}
        placeholder={I18n.t("sign_in.placeholder.email")}
        validate={[required, emailFormat]}
      />

      <Field
        name={"password"}
        component={TextField}
        secureTextEntry={true}
        placeholder={I18n.t("sign_in.placeholder.password")}
        validate={[required]}
      />

      <Field
        name="locations"
        component={PickerInput}
        navigator={props.navigator}
        data={props.data}
        validate={minSelectItem}
      />

      <ButtonAction
        text={I18n.t("sign_in.login")}
        onPress={props.handleSubmit}
      />
    </ScrollView>
  );
}

export default reduxForm({
  form: "Login"
})(EmailLoginForm);

