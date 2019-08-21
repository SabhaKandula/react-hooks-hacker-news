import React from "react";

function useFormValidation(initialstate, validateLogin, authenticate) {
  const [values, setValues] = React.useState(initialstate);
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setSubmitting] = React.useState(false);

  React.useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        authenticate();
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
  }
  return {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
    isSubmitting
  };
}

export default useFormValidation;
