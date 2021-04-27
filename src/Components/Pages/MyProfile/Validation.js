export const Validation = (values, balance) => {
  // const re = /\S+@\S+\.\S+/;
  let errors = {};
  if (!values.method) {
    errors.method = "Method is Required";
  } else if (!values.type) {
    errors.type = "Type is Required";
  } else if (!values.amount) {
    errors.amount = "Amount is Required";
  } else if (values.amount < 50) {
    errors.amount = "Amount more than 50 BDT";
  } else if (values.amount > balance) {
    errors.amount = "Insufficient Balance";
  } else if (!values.to) {
    errors.to = "Phone Number is Required";
  } else if (values.to.length < 11) {
    errors.to = "Phone Number would be 11 Digits";
  } else {
    errors.success = "Withdraw Request Sumitted !";
  }
  return errors;
};

export const DepoValidation = (value) =>{
  let errors = {};
  if (!value.method) {
    errors.method = "Method is Required";
  }else if (!value.amount) {
    errors.amount = "Amount is Required";
  } else if (value.amount < 200) {
    errors.amount = "Minimum deposit 200 BDT";
  } else if (!value.from) {
    errors.from = "Phone Number is Required";
  } else if (value.from.length < 11) {
    errors.from = "Phone Number would be 11 Digits";
  } else {
    errors.success = "Deposit Request Sumitted !";
  }
  return errors;
}
