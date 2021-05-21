const Validation = (values, usernameCheck, passCheck) => {
  // const re = /\S+@\S+\.\S+/;
  let errors = {};
  if (!values.username) {
    errors.username = "Username is Required";
  } else if (values.username.length < 3) {
    errors.username = "Username more than 3 charectars";
  } else if (!values.password) {
    errors.password = "Password is Required";
  } else if (values.password.length < 6) {
    errors.password = "Password More than 6 charectar";
  } else if (
    values.username !== usernameCheck?.username &&
    values.password !== passCheck?.password
  ) {
    errors.wrong = "Username and password incorrect";
  } else if (values.username !== usernameCheck?.username) {
    errors.wrong = "Username incorrect";
  } else if (values.password !== passCheck?.password) {
    errors.wrong = "Password incorrect";
  } else if (
    values.username === usernameCheck?.username &&
    values.password === passCheck?.password
  ) {
    errors.success = "Your Login Successfully !";
  }
  return errors;
};

export default Validation;
