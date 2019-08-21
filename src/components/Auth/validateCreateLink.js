export default function validateCreateLink(values) {
  let errors = {};
  //description Errors
  if (!values.description) {
    errors.description = "Description required";
  } else if (values.descriptio.length < 10) {
    errors.description = "Description must be atleast 10 characterss";
  }

  //URL Errors
  if (!values.url) {
    errors.url = "Password required";
  } else if (!/^(ftp | http | https): \/\/[^ "]+$/.test(values.url)) {
    errors.url = "URL must be valid";
  }
  return errors;
}
