import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";

const WithdrawReq = () => {
  const [withdraw, setWithdraw] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/withdrawGet`)
      .then((res) => res.json())
      .then((data) => setWithdraw(data));
  }, []);
  return (
    <>
      <div className="winnerHeading d-flex align-items-center justify-content-between">
        <span className="head">Withdraw Request</span>
        <span>
          <input
            type="text"
            className="form-control"
            name="search"
            autoComplete="off"
            placeholder="Search Withdraw Request..."
            required
          />
        </span>
      </div>
      <table>
        <tr>
          <th>Username</th>
          <th>Recived Num</th>
          <th>Account Type</th>
          <th>Gateway</th>
          <th>Request Amount</th>
          <th>Status</th>
        </tr>
        {withdraw.map((data) => (
          <tr>
            <td>{data.user}</td>
            <td>{data.to}</td>
            <td>{data.type}</td>
            <td>{data.method}</td>
            <td>{data.amount} BDT</td>
            <td>
              <span>
                <Button color="secondary" variant="contained">
                  Pending
                </Button>
              </span>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default WithdrawReq;
