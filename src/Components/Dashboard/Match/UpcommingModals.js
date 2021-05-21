import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";

const UpcommingModals = (props) => {
  const [value, setValue] = useState({
    match1: "",
    match2: "",
    m1Amount: "",
    m2Amount: "",

    title1: "",
    value1: "",
    v1Amount: "",
    value2: "",
    v2Amount: "",

    title2: "",
    value3: "",
    v3Amount: "",
    value4: "",
    v4Amount: "",

    title3: "",
    value5: "",
    v5Amount: "",
    value6: "",
    v6Amount: "",

    title4: "",
    value7: "",
    v7Amount: "",
    value8: "",
    v8Amount: "",

    title5: "",
    value9: "",
    v9Amount: "",
    value10: "",
    v10Amount: "",

    event: "",
    startdate: "",
    starttime: "",
    success: "",
    status: "",
    matchStatus: "",
  });
  const handleChange = (e) => {
    const inputValue = { ...value };
    inputValue[e.target.name] = e.target.value;
    setValue(inputValue);
  };
  const handleValue = () => {
    setValue({
      match1: props.data?.match1,
      match2: props.data?.match2,
      m1Amount: props.data?.m1Amount,
      m2Amount: props.data?.m2Amount,

      title1: props.data?.title1,
      value1: props.data?.title2,
      v1Amount: props.data?.v1Amount,
      value2: props.data?.value2,
      v2Amount: props.data?.v2Amount,

      title2: props.data?.title2,
      value3: props.data?.value3,
      v3Amount: props.data?.v3Amount,
      value4: props.data?.value4,
      v4Amount: props.data?.v4Amount,

      title3: props.data?.title3,
      value5: props.data?.value5,
      v5Amount: props.data?.v5Amount,
      value6: props.data?.value6,
      v6Amount: props.data?.v6Amount,

      title4: props.data?.title4,
      value7: props.data?.value7,
      v7Amount: props.data?.v7Amount,
      value8: props.data?.value8,
      v8Amount: props.data?.v8Amount,

      title5: props.data?.title5,
      value9: props.data?.value9,
      v9Amount: props.data?.v9Amount,
      value10: props.data?.value10,
      v10Amount: props.data?.v10Amount,

      event: props.data?.event,
      startdate: props.data?.startdate,
      starttime: props.data?.starttime,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.status === "Publish") {
      fetch(`https://betbdt.herokuapp.com/user/createUpcomingMatch`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(value),
      }).then(() => {
        const values = { ...value };
        values.success = "Match Added !";
        setValue(values);
      });
    } else if (value.status === "Draft") {
      const values = { ...value };
      values.matchStatus = "upco";
      fetch(`https://betbdt.herokuapp.com/user/createDraftMatch`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(values),
      }).then(() => {
        const values = { ...value };
        values.success = "Match Added !";
        setValue(values);
      });
    }
    // update
    const id = props.data?._id;
    fetch(`https://betbdt.herokuapp.com/user/updateUpcomMatch/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(value),
    }).then(() => {
      const values = { ...value };
      values.success = "Match Added !";
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
        <form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title className="text-center">
              ADD UPCOMING MATCH
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              {value.success && (
                <p className="alert alert-success">{value.success}</p>
              )}
              <Row>
                <Col>
                  <label htmlFor="match1">Match 1</label>
                  <input
                    type="text"
                    className="form-control"
                    name="match1"
                    value={value.match1}
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="Match 1"
                  />
                </Col>
                <Col>
                  <label htmlFor="match2">Match 2</label>
                  <input
                    type="text"
                    className="form-control"
                    name="match2"
                    value={value.match2}
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="Match 2"
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
                    value={value.m1Amount}
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="M1 Amount"
                  />
                </Col>
                <Col>
                  <label htmlFor="m2Amount">M2 Amount</label>
                  <input
                    type="text"
                    className="form-control"
                    name="m2Amount"
                    value={value.m2Amount}
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="M2 Amount"
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
                    value={value.event}
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="Event"
                  />
                </Col>
              </Row>
              {/* title 1 */}
              <Row style={{ marginBottom: "10px" }}>
                <Col>
                  <label htmlFor="title">Title 1</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title1"
                    value={value.title1}
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="Title 1"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <input
                    type="text"
                    className="form-control"
                    name="value1"
                    value={value.value1}
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="Value 1"
                  />
                </Col>
                <Col>
                  <input
                    type="text"
                    className="form-control"
                    name="v1Amount"
                    value={value.v1Amount}
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="Amount"
                  />
                </Col>
                <Col>
                  <input
                    type="text"
                    className="form-control"
                    name="value2"
                    value={value.value2}
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="Value 2"
                    required
                  />
                </Col>
                <Col>
                  <input
                    type="text"
                    className="form-control"
                    name="v2Amount"
                    value={value.v2Amount}
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="Amount"
                    required
                  />
                </Col>
              </Row>
              {/* title 2 */}
              <Row style={{ marginBottom: "10px" }}>
                <Col>
                  <label htmlFor="title">Title 2</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title2"
                    value={value.title2}
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="Title 2"
                    required
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <input
                    type="text"
                    className="form-control"
                    name="value3"
                    value={value.value3}
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="Value 1"
                    required
                  />
                </Col>
                <Col>
                  <input
                    type="text"
                    className="form-control"
                    name="v3Amount"
                    value={value.v3Amount}
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="Amount"
                    required
                  />
                </Col>
                <Col>
                  <input
                    type="text"
                    className="form-control"
                    name="value4"
                    value={value.value4}
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="Value 2"
                    required
                  />
                </Col>
                <Col>
                  <input
                    type="text"
                    className="form-control"
                    name="v4Amount"
                    value={value.v4Amount}
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="Amount"
                    required
                  />
                </Col>
              </Row>
              {/* title 3 */}
              <Row style={{ marginBottom: "10px" }}>
                <Col>
                  <label htmlFor="title">Title 3</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title3"
                    value={value.title3}
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="Title 3"
                    required
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <input
                    type="text"
                    className="form-control"
                    name="value5"
                    value={value.value5}
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="Value 1"
                    required
                  />
                </Col>
                <Col>
                  <input
                    type="text"
                    className="form-control"
                    name="v5Amount"
                    value={value.v5Amount}
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="Amount"
                    required
                  />
                </Col>
                <Col>
                  <input
                    type="text"
                    className="form-control"
                    name="value6"
                    value={value.value6}
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="Value 2"
                    required
                  />
                </Col>
                <Col>
                  <input
                    type="text"
                    className="form-control"
                    name="v6Amount"
                    value={value.v6Amount}
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="Amount"
                    required
                  />
                </Col>
              </Row>
              {/* title 4 */}
              <Row style={{ marginBottom: "10px" }}>
                <Col>
                  <label htmlFor="title">Title 4</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title4"
                    value={value.title4}
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="Title 4"
                    required
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <input
                    type="text"
                    className="form-control"
                    name="value7"
                    value={value.value7}
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="Value 1"
                    required
                  />
                </Col>
                <Col>
                  <input
                    type="text"
                    className="form-control"
                    name="v7Amount"
                    value={value.v7Amount}
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="Amount"
                    required
                  />
                </Col>
                <Col>
                  <input
                    type="text"
                    className="form-control"
                    name="value8"
                    value={value.value8}
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="Value 2"
                    required
                  />
                </Col>
                <Col>
                  <input
                    type="text"
                    className="form-control"
                    name="v8Amount"
                    value={value.v8Amount}
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="Amount"
                    required
                  />
                </Col>
              </Row>
              {/* TITLE 5 */}
              <Row style={{ marginBottom: "10px" }}>
                <Col>
                  <label htmlFor="title">Title 5</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title5"
                    value={value.title5}
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="Title 5"
                    required
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <input
                    type="text"
                    className="form-control"
                    name="value9"
                    value={value.value9}
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="Value 1"
                    required
                  />
                </Col>
                <Col>
                  <input
                    type="text"
                    className="form-control"
                    name="v9Amount"
                    value={value.v9Amount}
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="Amount"
                    required
                  />
                </Col>
                <Col>
                  <input
                    type="text"
                    className="form-control"
                    name="value10"
                    value={value.value10}
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="Value 2"
                    required
                  />
                </Col>
                <Col>
                  <input
                    type="text"
                    className="form-control"
                    name="v10Amount"
                    value={value.v10Amount}
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="Amount"
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
                    value={value.startdate}
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
                    value={value.starttime}
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="Start Time"
                    required
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <label htmlFor="status">Status</label>
                  <select
                    className="form-control"
                    name="status"
                    value={value.status}
                    onChange={handleChange}
                  >
                    <option value="Choose">Choose...</option>
                    <option value="Publish">Publish</option>
                    <option value="Draft">Draft</option>
                  </select>
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
                {props.data?._id && (
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
                )}
              </Row>
            </div>
          </Modal.Body>
        </form>
      </Modal>
    </>
  );
};

export default UpcommingModals;
