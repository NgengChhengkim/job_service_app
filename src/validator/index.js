import I18n from "./../i18n/i18n";

const required = value => (value ? undefined : I18n.t("validator.required"));

const maxLength = max => value =>
  value && value.length > max ? `${I18n.t("validator.must_be")} ${max} ${I18n.t("validator.max_length")}` : undefined;

const minLength = min => value =>
  value && value.length < min ? `${I18n.t("validator.must_be")} ${min} ${I18n.t("validator.min_length")}` : undefined;

const emailFormat = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? I18n.t("validator.invalid_email")
    : undefined;

export {required, emailFormat, minLength, maxLength};
