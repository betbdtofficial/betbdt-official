import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Col, Modal, Row } from "react-bootstrap";

const Modals = (props) => {
  return (
    <>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
      >
        <form>
          <Modal.Header closeButton>
            <Modal.Title className="text-center">ADD METHOD</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <Row>
                <Col>
                  <label htmlFor="gatewayName">Payment Gateway Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="gatewayName"
                    autoComplete="off"
                    placeholder="Payment Gateway Name"
                    required
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <label htmlFor="walletAddress">Wallet Address</label>
                  <input
                    type="text"
                    className="form-control"
                    name="walletAddress"
                    autoComplete="off"
                    placeholder="Wallet Address"
                    required
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <label htmlFor="status">Status</label>
                  <select className="form-control" name="status" id="status">
                    <option value="Choose Status">Choose Status</option>
                    <option value="Active">Active</option>
                    <option value="Deactive">Deactive</option>
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
              </Row>
            </div>
          </Modal.Body>
          {/* <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary">Save</Button>
        </Modal.Footer> */}
        </form>
      </Modal>
    </>
  );
};

export default Modals;
