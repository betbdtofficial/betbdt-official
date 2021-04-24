import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Modal, Table } from "react-bootstrap";
import Avater from "../../image/avater.png";

const Modals = (props) => {
  return (
    <>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-center">User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="col-md-6 m-auto">
            <div className="profilePic mb-4">
              <img src={Avater} width="150px" className="img-fluid" alt="" />
            </div>
          </div>
          <Table striped bordered hover>
            <tbody key={props.user._id}>
              <tr>
                <td>Full Name</td>
                <td>{props.user.name}</td>
              </tr>
              <tr>
                <td>Username</td>
                <td>{props.user.username}</td>
              </tr>
              <tr>
                <td>Total Balance</td>
                <td>{props.user.balance} BDT</td>
              </tr>
              <tr>
                <td>Mobile Number</td>
                <td>{props.user.number}</td>
              </tr>
              <tr>
                <td>Sponsored By</td>
                <td>{props.user.sponsor}</td>
              </tr>
              <tr>
                <td>Club</td>
                <td>❤️{props.user.club}❤️</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Modals;
