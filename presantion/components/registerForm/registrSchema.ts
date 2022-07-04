import * as yub from "yup";

const registerSchema = yub.object().shape({
  firstName: yub.string().required("please enter your first  name"),
  lastName: yub.string().required("Please Enter Your Last Name"),
  email: yub
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  phoneNumber: yub
    .string()
    .required("Phone Number is Required")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    ),
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
