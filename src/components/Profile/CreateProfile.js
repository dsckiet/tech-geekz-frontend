import React from "react";
import { Formik, Form, Field, useFormik } from "formik";
import { Textfeild } from "../../utils/helpers";

const CreateProfile = () => {
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
      >
        {(formik) => (
          <div>
            <h1>SignUp</h1>
            {console.log(formik.values)}
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
