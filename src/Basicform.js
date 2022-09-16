import * as React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
const formValidationSchema = yup.object({
  email: yup
    .string()
    .email("Please Specify a Valid Email")
    .required("Why Not Fill email??😊"),
  password: yup
    .string()
    .min(8, "Need Longer Password")
    .max(12, "Too Much Password - Should be 12 Characs")
    .required("Why Not Fill Password??😊"),
});

export function Basicform() {
  const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: { email: "", password: "" },
      validationSchema: formValidationSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });
  return (
    <form onSubmit={handleSubmit}>
      <h1> Welcome to basic Form</h1>
      <input
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        type="text"
        placeholder="Enter Email"
      />
      {touched.email && errors.email ? errors.email : null}
      <input
        name="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        type="password"
        placeholder="Password"
      />
      {touched.password && errors.password ? errors.password : null}
      <button type="submit">Submit</button>
    </form>
  );
}
