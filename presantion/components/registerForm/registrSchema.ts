import * as yub from "yup";

const registerSchema = yub.object().shape({
  email: yub
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  password: yub
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
  confirmPassword: yub.string().when("password", {
    is: (val) => (val && val.length > 0 ? true : false),
    then: yub
      .string()
      .oneOf([yub.ref("password")], "Both password need to be the same"),
  }),
});

export default registerSchema;
