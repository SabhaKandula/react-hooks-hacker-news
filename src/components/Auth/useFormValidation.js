import React from "react";
import validateLogin from "./validateLogin";

function useFormValidation(initialstate) {
  const [values, setValues] = React.useState(initialstate);
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setSubmitting] = React.useState(false);

  React.useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        console.log("authenicated", values);
        setSubmitting(false);
      } else {
        setSubmitting(false); 
      }
    }
  }, [errors]);
  function handleChange(event) {
    event.persist();
    setValues(previousValues => ({
      ...previousValues,
      [event.target.name]: event.target.value
    }));
  }
  function handleBlur(event) {
    const validationErrors = validateLogin(values);
    setErrors(validationErrors);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validateLogin(values);
    setErrors(validationErrors);
    setSubmitting(true);
    console.log({ values });
  }
  return { handleChange, handleSubmit, handleBlur, values,errors, isSubmitting };
}

export default useFormValidation;
