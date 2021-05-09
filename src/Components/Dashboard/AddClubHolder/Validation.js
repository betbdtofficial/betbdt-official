const Validation = (values, numberCheck, usernameCheck, club, sponsor) => {
  // const re = /\S+@\S+\.\S+/;
  let errors = {};
  if (!values.name) {
    errors.name = "Name is Required";
  } else if (values.name.length < 3) {
    errors.name = "Name more than 3 charectars";
  } else if (!values.country) {
    errors.country = "Country is required";
  } else if (!values.club) {
    errors.club = "Club is Required";
  } else if (values.club.length < 2) {
    errors.club = "Club name more than 2 charectars";
  } else if (club) {
    errors.club = "Club Already Exist";
  } else if (!values.number) {
    errors.number = "Phone Number is Required";
  } else if (values.number.length < 11) {
    errors.number = "Phone Number would be 11 Digits";
  } else if (numberCheck) {
    // this validation only for message
    errors.number = "Number Already Exist";
  } else if (!values.sponsor) {
    errors.sponsor = "Sponsor is Required";
  } else if (values.sponsor.length < 3) {
    errors.sponsor = "Sponsor Name more than 3 charectars";
  } else if (sponsor) {
    errors.sponsor = "Sponsor Already Exist";
  } else if (!values.username) {
    errors.username = "Username is Required";
  } else if (values.username.length < 3) {
    errors.username = "Username more than 3 charectars";
  } else if (usernameCheck) {
    errors.username = "Username Already Exist";
  } else if (!values.password) {
    errors.password = "Password is Required";
  } else if (values.password.length < 6) {
    errors.password = "Password More than 6 charectar";
  } else if (!values.password2) {
    errors.password2 = "Confirm Password is Required";
  } else if (values.password2.length < 6) {
    errors.password2 = "Confirm Password More than 6 charectar";
  } else if (values.password !== values.password2) {
    // this validation only for message
    errors.password2 = "Password Doesn't Match";
  } else if (!values.profit) {
    errors.profit = "Profit is Required";
  } else {
    errors.success = "Your Registration Has Been Successfully !";
  }
  return errors;
};

export default Validation;
