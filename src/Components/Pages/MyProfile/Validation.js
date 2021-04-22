const Validation = (values) => {
  // const re = /\S+@\S+\.\S+/;
  let errors = {};
  if (!values.method) {
    errors.method = "Method is Required";
  } else if (!values.type) {
    errors.type = "Type is Required";
  } else if (!values.amount) {
    errors.amount = "Amount is Required";
  } else if (values.amount.Math.min(values.amount)) {
    errors.password = "Amount more than 50 BDT";
  } else if (!values.to) {
    errors.to = "Phone Number is Required";
  } else if (values.to.length < 11) {
    errors.to = "Phone Number would be 11 Digits";
  } else {
    errors.success = "Your Login Successfully !";
  }
  return errors;
};

export default Validation;
