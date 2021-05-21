const Validation = (values) => {
  // const re = /\S+@\S+\.\S+/;
  let errors = {};
  if (!values.gatewayName) {
    errors.gatewayName = "GateWayName is Required";
  } else if (!values.number) {
    errors.number = "Number is Required";
  } else if (values.number.length < 11) {
    errors.number = "Number Would be 11 Digits";
  }else{
      errors.success = "Method Added !"
  }
  return errors;
};

export default Validation;
