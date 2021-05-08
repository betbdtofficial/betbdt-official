import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const Deposit = () => {
  const storage = sessionStorage.getItem("user");
  const getUser = JSON.parse(storage);
  const [depoHis, setDepoHis] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/getDepositHistory`)
      .then((res) => res.json())
      .then((data) => setDepoHis(data));
  }, []);
  const [depo, setDepo] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/getDeposit`)
      .then((res) => res.json())
      .then((data) => setDepo(data));
  }, []);
  const filter = [...depoHis, ...depo].filter(
    (data) => data.username === getUser.user
  );
  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-12">
            <div className="MyStatementMenu">
              <h5>Deposit</h5>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>SN.</th>
                    <th>Date</th>
                    <th>From</th>
                    <th>Method And To</th>
                    <th>Deposit Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filter.map((data, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{data.date}</td>
                      <td>{data.from}</td>
                      <td>{data.method}</td>
                      <td>{data.amount} TK</td>
                      <td>{data.button}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;