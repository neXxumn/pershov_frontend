import * as Yup from 'yup';

const MAXIMUM_LENGTH = 15;
const MINIMUM_PASSWORD_LENGTH = 6;

const MESSAGE_EMAIL_IS_INVALID = 'Email is invalid';
const MESSAGE_EMAIL_REQUIRED = 'Email is required';
const MESSAGE_PASSWORD_ERROR = 'Password must be at least 6 characters';
const MESSAGE_PASSWORD_REQUIRE = 'Password is required';
const MESSAGE_MAX_CHARACTERS = 'Must be 15 characters or less';
// const MESSAGE_REQUIRED = 'Required';
const YUP_REFERENCE = 'password';
const MESSAGE_CONFIRM_PASSWORD_ERROR = 'Password must match';
// const MESSAGE_CONFIRM_PASSWORD_REQUIRE = 'Confirm password is require';

const authorizationFormValidate = {
  email: Yup
    .string()
    .email(MESSAGE_EMAIL_IS_INVALID)
    .required(MESSAGE_EMAIL_REQUIRED),
  password: Yup
    .string()
    .min(MINIMUM_PASSWORD_LENGTH, MESSAGE_PASSWORD_ERROR)
    .required(MESSAGE_PASSWORD_REQUIRE),
};

const registrationFormValidate = {
  name: Yup
    .string()
    .max(MAXIMUM_LENGTH, MESSAGE_MAX_CHARACTERS), // .required(MESSAGE_REQUIRED),
  email: Yup
    .string()
    .email(MESSAGE_EMAIL_IS_INVALID)
    .required(MESSAGE_EMAIL_REQUIRED),
  password: Yup
    .string()
    .min(MINIMUM_PASSWORD_LENGTH, MESSAGE_PASSWORD_ERROR)
    .required(MESSAGE_PASSWORD_REQUIRE),
  confirmPassword: Yup
    .string()
    .oneOf([Yup.ref(YUP_REFERENCE), null], MESSAGE_CONFIRM_PASSWORD_ERROR),
// .required(MESSAGE_CONFIRM_PASSWORD_REQUIRE),
};

export const userAuthValidate = () => Yup.object(authorizationFormValidate);
export const userRegistrationValidate = () => Yup.object(registrationFormValidate);
