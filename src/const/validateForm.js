import lenguages from "./lenguage";

export const validate = (input, lenguage) => {
  let errors = {};

  if (!input.user_name) {
  } else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$/i.test(input.user_name)) {
    errors.user_name =
      lenguages[lenguage].contact.validationText.write.field_username;
  }
  if (!input.user_email) {
  } else if (
    // eslint-disable-next-line no-useless-escape
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.user_email)
  ) {
    errors.user_email =
      lenguages[lenguage].contact.validationText.write.field_email;
  }

  return errors;
};

export const validateForm = (form, lenguage) => {
  let errors = {};
  if (!form.user_name) {
    errors.user_name =
      lenguages[lenguage].contact.validationText.send.field_username;
  }
  if (!form.user_email) {
    errors.user_email =
      lenguages[lenguage].contact.validationText.send.field_email;
  }
  if (!form.message) {
    errors.message =
      lenguages[lenguage].contact.validationText.send.field_message;
  }

  return errors;
};
