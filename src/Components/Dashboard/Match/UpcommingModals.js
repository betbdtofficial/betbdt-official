import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";

const UpcommingModals = (props) => {
  const [value, setValue] = useState({
    match1: "",
    match2: "",
    m1Amount: "",
    m2Amount: "",
    event: "",
    startdate: "",
    starttime: "",
    success: ""
  });
  const handleChange = (e) => {
    const inputValue = { ...value };
    inputValue[e.target.name] = e.target.value;
    setValue(inputValue);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/user/createUpcomingMatch`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(value)
    }).then(()=>{
      const values = {...value}
      values.success = "Match Added !"
      setValue(values)
    })
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
            <Modal.Title className="text-center">ADD UPCOMING MATCH</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              {
                value.success && <p className="alert alert-success">{value.success}</p>
              }
              <Row>
                <Col>
                  <label htmlFor="match1">Match 1</label>
                  <input
                    type="text"
                    className="form-control"
                    name="match1"
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="Match 1"
                    required
                  />
                </Col>
                <Col>
                  <label htmlFor="match2">Match 2</label>
                  <input
                    type="text"
                    className="form-control"
                    name="match2"
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="Match 2"
                    required
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <label htmlFor="m1Amount">M1 Amount</label>
                  <input
                    type="text"
                    className="form-control"
                    name="m1Amount"
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="M1 Amount"
                    required
                  />
                </Col>
                <Col>
                  <label htmlFor="m2Amount">M2 Amount</label>
                  <input
                    type="text"
                    className="form-control"
                    name="m2Amount"
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="M2 Amount"
                    required
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <label htmlFor="event">Event</label>
                  <input
                    type="text"
                    className="form-control"
                    name="event"
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="Event"
                    required
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <label htmlFor="startdate">Start Date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="startdate"
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="Start Date"
                    required
                  />
                </Col>
                <Col>
                  <label htmlFor="starttime">Start Time</label>
                  <input
                    type="time"
                    className="form-control"
                    name="starttime"
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="Start Time"
                    required
                  />
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

export default UpcommingModals;
