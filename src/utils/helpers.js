import React from "react";
import { ErrorMessage, useField } from "formik";

export const Textfeild = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col m-4">
      <label htmlFor={field.name}>{label}</label>
      <input {...field} {...props} autoComplete="off" />
      <ErrorMessage name={field.name} />
    </div>
  );
};
