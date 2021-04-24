import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";

const WithdrawReq = () => {
  const today = Date.now();
  const time = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(today)

  const [withdraw, setWithdraw] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/withdrawGet`)
      .then((res) => res.json())
      .then((data) => setWithdraw(data));
  }, []);
  const handleClick = (id, data) => {
    console.log(id);
    console.log(data.user);
    // Withdraw Request Delete
    fetch(`http://localhost:5000/user/delete/${id}`, {
      method: "DELETE",
    }).then(() => {
      fetch(`http://localhost:5000/user/withdrawGet`)
        .then((res) => res.json())
        .then((data) => setWithdraw(data));
    });
    // Withdraw History Create
    const WithHistory = {
      username: data.user,
      number: data.to,
      type: data.type,
      method: data.method,
      amount: data.amount,
      date: time
    }
    fetch(`http://localhost:5000/user/createWithdrawHistory`, {
      method: "POST",
      headers: {
        "content-type" : "application/json",
      },
      body: JSON.stringify(WithHistory)
    }).then((result) => {
      console.log(result);
    });
  };
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
                <Button
                  onClick={() => handleClick(data._id, data)}
                  color="secondary"
                  variant="contained"
                >
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
