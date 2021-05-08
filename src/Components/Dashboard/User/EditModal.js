import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";

const EditModal = (props) => {
  const [value, setValue] = useState({
    name: "",
    country: "",
    club: "",
    number: "",
    sponsor: "",
    username: "",
    password: "",
    password2: "",
    balance: "",
    success: "",
  });
  const handleValue = () => {
    setValue({
      name: props.user.name,
      country: props.user.country,
      club: props.user.club,
      number: props.user.number,
      sponsor: props.user.sponsor,
      username: props.user.username,
      password: props.user.password,
      password2: props.user.password2,
      balance: props.user.balance,
    });
  };
  const handleChange = (e) => {
    const values = { ...value };
    values[e.target.name] = e.target.value;
    setValue(values);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = props.user._id;
    fetch(`http://localhost:5000/user/userUpdate/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(value),
    }).then(() => {
      const values = { ...value };
      values.success = "User Update Successfully !";
      setValue(values);
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
        <Modal.Header closeButton>
          <Modal.Title className="text-center">User Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="col-md-12 m-auto">
            {value.success && (
              <p className="alert alert-success">{value.success}</p>
            )}
            <form onSubmit={handleSubmit}>
              <Row>
                <Col>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={value.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />
                </Col>
                <Col>
                  <label htmlFor="country">Country</label>
                  <input
                    type="text"
                    className="form-control"
                    name="country"
                    value={value.country}
                    onChange={handleChange}
                    placeholder="Enter your country"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <label htmlFor="club">Club</label>
                  <input
                    type="text"
                    className="form-control"
                    name="club"
                    value={value.club}
                    onChange={handleChange}
                    placeholder="Enter your club"
                  />
                </Col>
                <Col>
                  <label htmlFor="number">Number</label>
                  <input
                    type="number"
                    className="form-control"
                    name="number"
                    value={value.number}
                    onChange={handleChange}
                    placeholder="Enter your number"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <label htmlFor="sponsor">Sponsor</label>
                  <input
                    type="text"
                    className="form-control"
                    name="sponsor"
                    value={value.sponsor}
                    onChange={handleChange}
                    placeholder="Enter your sponsor"
                  />
                </Col>
                <Col>
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    value={value.username}
                    onChange={handleChange}
                    placeholder="Enter your username"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <label htmlFor="password">Password</label>
                  <input
                    type="text"
                    className="form-control"
                    name="password"
                    value={value.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                  />
                </Col>
                <Col>
                  <label htmlFor="password2">Password2</label>
                  <input
                    type="text"
                    className="form-control"
                    name="password2"
                    value={value.password2}
                    onChange={handleChange}
                    placeholder="Enter your password2"
                  />
                </Col>
              </Row>
              <label htmlFor="balance">Balance</label>
              <input
                type="text"
                className="form-control"
                name="balance"
                value={value.balance}
                onChange={handleChange}
                placeholder="Enter your balance"
              />
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
                    value="Update"
                  />
                </Col>
                <Col>
                  <input
                    type="button"
                    variant="contained"
                    style={{
                      backgroundColor: "rgb(18 110 81)",
                      color: "white",
                      marginTop: "10px",
                      width: "100%",
                      padding: "4px",
                      border: "none",
                    }}
                    onClick={handleValue}
                    value="Set Value"
                  />
                </Col>
              </Row>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditModal;
