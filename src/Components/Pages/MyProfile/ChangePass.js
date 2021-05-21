import dotenv from "dotenv";
import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
dotenv.config();
const ChangePass = () => {
  const storage = sessionStorage.getItem("userInfo");
  const getUser = JSON.parse(storage);
  const [value, setValue] = useState({
    changePass: "",
    success: ""
  });
  const handleChange = (e) => {
    const values = { ...value };
    values[e.target.name] = e.target.value;
    setValue(values);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = getUser?.id;
    fetch(`https://betbdt.herokuapp.com/user/passChange/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(value)
    }).then(()=>{
      const values = {...value};
      values.success = "Password Change Successfully !"
      setValue(values)
    })
  };
  return (
    <>
      <div className="changePassword">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="heading text-center">Change Password</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {
                value.success && <p className="alert alert-success">{value.success}</p>
              }
              <Form onSubmit={handleSubmit}>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>New Password</Form.Label>
                    <Form.Control
                      name="changePass"
                      onChange={handleChange}
                      type="password"
                      placeholder="New Password"
                    />
                  </Form.Group>
                </Form.Row>
                <br />
                <Button
                  className="form-control signupBtn"
                  variant="primary"
                  type="submit"
                >
                  Update
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePass;
