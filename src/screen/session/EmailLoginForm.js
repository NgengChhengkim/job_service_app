import React from "react";
import {reduxForm, Field} from "redux-form";
import {ScrollView} from "react-native";
import I18n from "./../../i18n/i18n";
import {TextField, ButtonAction, InputSelect} from "./../../component";
import {required, emailFormat} from "../../validator";

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
        name={"location"}
        component={InputSelect}
        items={items}

        component={(props) =>
          <InputSelect
            items={items}
            selectedItems={props.input.value}
            onSelectedItemsChange={(selectedItems) => props.input.onChange({selectedItems})}
          />
        }

      />

      <ButtonAction
        text={I18n.t("sign_in.login")}
        onPress={props.handleSubmit}
      />
    </ScrollView>
  );
}

const items = [{
    id: '92iijs7yta',
    name: 'Ondo',
  }, {
    id: 'a0s0a8ssbsd',
    name: 'Ogun',
  }, {
    id: '16hbajsabsd',
    name: 'Calabar',
  }, {
    id: 'nahs75a5sg',
    name: 'Lagos',
  }, {
    id: '667atsas',
    name: 'Maiduguri',
  }, {
    id: 'hsyasajs',
    name: 'Anambra',
  }, {
    id: 'djsjudksjd',
    name: 'Benue',
  }, {
    id: 'sdhyaysdj',
    name: 'Kaduna',
  }, {
    id: 'suudydjsjd',
    name: 'Abuja',
  }];


export default reduxForm({
  form: "Login"
})(EmailLoginForm);

