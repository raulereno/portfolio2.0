export const validate = (input) => {
  let errors = {};

  if (!input.user_name) {
  } else if (!/^[A-Z]+$/i.test(input.user_name)) {
    errors.user_name = "Su nombre no puede contener numeros";
  }
  if (!input.user_email) {
  } else if (
    // eslint-disable-next-line no-useless-escape
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.user_email)
  ) {
    errors.user_email = "Porfavor ingrese un mail valido";
  }

  return errors;
};

export const validateForm = (form) => {
  let errors = {};

  if (!form.user_name) {
    errors.user_name = "Ingrese su nombre porfavor";
  }
  if (!form.user_email) {
    errors.user_email = "Ingresa un mail porfavor";
  }
  if (!form.message) {
    errors.message = "Porfavor dejame un mensaje";
  }

  return errors;
};
