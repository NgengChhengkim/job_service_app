import I18n from "./../i18n/i18n";

const required = value => (value ? undefined : I18n.t("validator.required"));

const maxLength = max => value =>
  value && value.length > max ? `${I18n.t("validator.max_length", {max: max})}` : undefined;

const minLength = min => value =>
  value && value.length < min ? `${I18n.t("validator.min_length", {min: min})}` : undefined;

const emailFormat = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? I18n.t("validator.invalid_email")
    : undefined;

const minSelectItem = min => values => (values && Object.keys(values).length >= min ? undefined : I18n.t("validator.min_select", {min: min}));

export {required, emailFormat, minLength, maxLength, minSelectItem};
