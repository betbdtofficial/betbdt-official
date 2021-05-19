import dotenv from "dotenv";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import './index.css';
dotenv.config();
const Withdraw = () => {
  const storage = sessionStorage.getItem("userInfo");
  const getUser = JSON.parse(storage);
  const [history, setHistory] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/getWithdrawHistory`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`
      },
    })
      .then((res) => res.json())
      .then((data) => setHistory(data));
  }, []);
  const [withdraw, setWithdraw] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/withdrawGet`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`
      },
    })
      .then((res) => res.json())
      .then((data) => setWithdraw(data));
  }, []);

  const historyFilter = history.filter(data=>data.username === getUser?.username)
  const withdrawFilter = withdraw.filter(data=>data.username === getUser?.username)
  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-12">
            <div className="MyStatementMenu">
              <h5>Withdraws</h5>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>SN.</th>
                    <th>Date</th>
                    <th>Pay Method</th>
                    <th>Account Type</th>
                    <th>Recieved Num</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[...historyFilter, ...withdrawFilter].map((data, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{data.date}</td>
                      <td>{data.method}</td>
                      <td>{data.type}</td>
                      <td>{data.number}</td>
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

export default Withdraw;
