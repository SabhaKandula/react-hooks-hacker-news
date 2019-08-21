import React from "react";
import useFormValidation from "../Auth/useFormValidation";
import validateCreateLink from "../Auth/validateCreateLink";

const INITITAL_STATE = {
  description: "",
  url: ""
};
function CreateLink(props) {
  const { handleSubmit, handleChange, values, errors } = useFormValidation(
    INITITAL_STATE,
    validateCreateLink,
    handleCreateLink
  );

  function handleCreateLink() {}
  return (
    <form onSubmit={handleSubmit} className="flex flex-column mt3">
      <input
        onChange={handleChange}
        value={values.description}
        type="text"
        autoComplete="off"
        placeholder="A description for your link"
        name="description"
        className={errors.description && "error-input"}
      />
      {errors.description && <p className="error-text">{errors.description}</p>}
      <input
        onChange={handleChange}
        value={values.url}
        type="text"
        autoComplete="off"
        placeholder="URL for your link"
        name="url"
      />
      {errors.url && <p className="error-text">{errors.url}</p>}
      <button className="button" type="submit">
        submit
      </button>
    </form>
  );
}

export default CreateLink;
