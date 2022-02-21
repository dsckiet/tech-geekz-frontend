import React from "react";
import { Formik, Form, Field, useFormik } from "formik";
import { Textfeild } from "../../utils/helpers";
import * as Yup from "yup";

const CreateProfile = () => {
  const validate = Yup.object({
    name: Yup.string()
      .max(10, "Must be 10 characters or less")
      .required("required"),
    email: Yup.string().email("email is invalid").required("email is required"),
    password: Yup.string()
      .min(6, "Password must be at least of 6 characters")
      .required("password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "passwords must match")
      .required("confirm password please"),
  });

  const form = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  return (
    <>
      <h1>hello</h1>
      <Formik
        initialValues={{
          name: form.values.name,
          email: form.values.email,
          password: form.values.password,
          confirmPassword: form.values.confirmPassword,
        }}
        validationSchema={validate}
        onSubmit={(values) => console.log(values)}
      >
        {(formik) => (
          <div>
            <h1>SignUp</h1>
            {/* {console.log(formik.values)} */}
            <Form>
              <Textfeild label="name" name="name" type="text" />
              <Textfeild label="email" name="email" type="email" />
              <Textfeild label="password" name="password" type="password" />
              <Textfeild
                label="confirmPassword"
                name="confirmPassword"
                type="Password"
              />
              <button type="submit">Sumbit</button>
              <button type="reset">Reset</button>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};

export default CreateProfile;
