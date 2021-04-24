import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import Validation from "./Validation";

const Modals = (props) => {
  const [value, setValue] = useState({
    gatewayName: "",
    number: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const data = { ...value };
    data[e.target.name] = e.target.value;
    setValue(data);
    setErrors("")
  };
  // const formClear = () => {
  //   setValue({
  //     gatewayName: "",
  //     number: "",
  //   });
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    // formClear();
    setErrors(Validation(value));
    if (value.number.length < 11) {
      return;
    }
    fetch(`http://localhost:5000/user/createMethod`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(value),
    }).then((result) => {
      console.log(result);
    });
  };

  return (
    <>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
      >
        <form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title className="text-center">ADD METHOD</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              {
                errors.success && <p className="alert alert-success">{errors.success}</p>
              }
              <Row>
                <Col>
                  <label htmlFor="gatewayName">Payment Gateway Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="gatewayName"
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="Payment Gateway Name"
                  />
                  {errors.gatewayName && (
                    <p className="text-danger">{errors.gatewayName}</p>
                  )}
                </Col>
              </Row>
              <Row>
                <Col>
                  <label htmlFor="number">Number</label>
                  <input
                    type="number"
                    className="form-control"
                    name="number"
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="Number"
                  />
                  {errors.number && (
                    <p className="text-danger">{errors.number}</p>
                  )}
                </Col>
              </Row>
              <Row>
                <Col>
                  <input
                    type="submit"
                    variant="contained"
                    style={{
                      backgroundColor: "rgb(18 110 81)",
                      color: "white",
                      marginTop: "10px",
                      width: "100%",
                      padding: "4px",
                      border: "none",
                    }}
                    value="Save"
                  />
                </Col>
              </Row>
            </div>
          </Modal.Body>
        </form>
      </Modal>
    </>
  );
};

export default Modals;
