import * as yup from "yup";
import { luhnCheck } from "./luhnCheck"; // Import the luhnCheck function

const validationSchema = yup.object().shape({
  name: yup.string().required("Namn är obligatoriskt"),
  email: yup
    .string()
    .email("Ogiltig e-postadress")
    .required("E-post är obligatoriskt"),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Ogiltigt telefonnummer, ange 10 siffror")
    .required("Telefonnummer är obligatoriskt"),
  movingDay: yup.date().required("Flyttdatum är obligatoriskt"),

  personalNumber: yup
    .string()
    .matches(/^\d{6}-\d{4}$/, "Ogiltigt personnummer (ÅÅMMDD-XXXX)")
    .test(
      "luhn-check",
      "Ogiltigt personnummer",
      (value) => !!value && luhnCheck(value.replace("-", "")) === true
    ) // Add Luhn check
    .required("Personnummer är obligatoriskt"),
  address: yup.string().required("Nuvarande adress är obligatorisk"),
  newAddress: yup.string().required("Ny adress är obligatorisk"),
  message: yup.string().max(500, "Meddelandet får inte överstiga 500 tecken"),
});

export default validationSchema;
