import React from "react";

function useFormValidation(initialstate) {
  const [values, setValues] = React.useState(initialstate);

  function handleChange(event) {
    event.persist();
    setValues(previousValues => ({
      ...previousValues,
      [event.target.name]: event.target.value
    }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log({ values });
  }
  return { handleChange, handleSubmit, values };
}

export default useFormValidation;
