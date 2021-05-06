import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Modal, Table } from "react-bootstrap";
import Avater from "../../image/avater.png";

const LiveViewModals = (props) => {
  const {
    match1,
    match2,
    m1Amount,
    m2Amount,
    event,
    title1,
    value1,
    v1Amount,
    value2,
    v2Amount,
    title2,
    value3,
    v3Amount,
    value4,
    v4Amount,
    title3,
    value5,
    v5Amount,
    value6,
    v6Amount,
    title4,
    value7,
    v7Amount,
    value8,
    v8Amount,
    title5,
    value9,
    v9Amount,
    value10,
    v10Amount,
    starttime,
    startdate
  } = props.match;
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
            <tbody key={props.match._id}>
              <tr>
                <td>Match 1</td>
                <td>{match1} <span class="badge badge-danger">{m1Amount}</span></td>
              </tr>
              <tr>
                <td>Match 2</td>
                <td>{match2} <span class="badge badge-danger">{m2Amount}</span></td>
              </tr>
              <tr>
                <td>Event</td>
                <td>{event}</td>
              </tr>
              <tr>
                <td>Start Time</td>
                <td>{starttime}</td>
              </tr>
              <tr>
                <td>Start Date</td>
                <td>{startdate}</td>
              </tr>
              <tr>
                <td>Title 1</td>
                <td>{title1}</td>
              </tr>
              <tr>
                <td>Bet Name 1</td>
                <td>{value1} <span class="badge badge-danger">{v1Amount}</span></td>
              </tr>
              <tr>
                <td>Bet Name 2</td>
                <td>{value2} <span class="badge badge-danger">{v2Amount}</span></td>
              </tr>
              <tr>
                <td>Title 2</td>
                <td>{title2}</td>
              </tr>
              <tr>
                <td>Bet Name 1</td>
                <td>{value3} <span class="badge badge-danger">{v3Amount}</span></td>
              </tr>
              <tr>
                <td>Bet Name 2</td>
                <td>{value4} <span class="badge badge-danger">{v4Amount}</span></td>
              </tr>
              <tr>
                <td>Title 3</td>
                <td>{title3}</td>
              </tr>
              <tr>
                <td>Bet Name 1</td>
                <td>{value5} <span class="badge badge-danger">{v5Amount}</span></td>
              </tr>
              <tr>
                <td>Bet Name 2</td>
                <td>{value6} <span class="badge badge-danger">{v6Amount}</span></td>
              </tr>
              <tr>
                <td>Title 4</td>
                <td>{title4}</td>
              </tr>
              <tr>
                <td>Bet Name 1</td>
                <td>{value7} <span class="badge badge-danger">{v7Amount}</span></td>
              </tr>
              <tr>
                <td>Bet Name 2</td>
                <td>{value8} <span class="badge badge-danger">{v8Amount}</span></td>
              </tr>
              <tr>
                <td>Title 5</td>
                <td>{title5}</td>
              </tr>
              <tr>
                <td>Bet Name 1</td>
                <td>{value9} <span class="badge badge-danger">{v9Amount}</span></td>
              </tr>
              <tr>
                <td>Bet Name 2</td>
                <td>{value10} <span class="badge badge-danger">{v10Amount}</span></td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LiveViewModals;
