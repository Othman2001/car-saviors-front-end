import * as Yup from "yup";

const OfferSchema = Yup.object().shape({
  phoneNumber: Yup.number().required("Required"),
  model: Yup.string().required("Required"),
  color: Yup.string().required("Required"),
  licenseNumber: Yup.string().required("Required"),
  pricePerDay: Yup.number().required("Required"),
  carType: Yup.string()
    .required("Required")
    .equals(["sedan", "coupe", "sport", "suv"]),
  motorType: Yup.string()
    .required("Required")
    .lowercase()
    .equals(["manual", "automatic"]),
  carBrand: Yup.string().required("Required"),
  carModelYear: Yup.number().required("Required"),
  location: Yup.string().required("Required"),
});

export default OfferSchema;
