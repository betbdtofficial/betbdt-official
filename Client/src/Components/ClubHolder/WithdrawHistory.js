import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";

const WithdrawHistory = () => {
  const storage = sessionStorage.getItem("club");
  const club = JSON.parse(storage);
  const [history, setHistory] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/specificWithHistory?user=${club?.club}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setHistory(data));
  }, []);
  const [withdraw, setWithdraw] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/specificWithdraw?user=${club?.club}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setWithdraw(data));
  }, []);
  return (
    <>
      {" "}
      <div className="winnerHeading d-flex align-items-center justify-content-between">
        <span className="head">Withdraw History</span>
      </div>
      <div style={{ overflowX: "auto" }}>
        <table className="mb-5">
          <tr>
            <th>Username</th>
            <th>Recived Num</th>
            <th>Account Type</th>
            <th>Pay Method</th>
            <th>Request Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
          {[...withdraw, ...history].map((data) => (
            <tr>
              <td>{data?.username}</td>
              <td>{data?.number}</td>
              <td>{data?.type}</td>
              <td>{data?.method}</td>
              <td>{data?.amount} BDT</td>
              <td>{data?.date}</td>
              <td>
                <span>
                  <Button color="primary" variant="contained">
                    {data?.button}
                  </Button>
                </span>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};

export default WithdrawHistory;
