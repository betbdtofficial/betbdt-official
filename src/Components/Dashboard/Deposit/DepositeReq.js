import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";

const DepositReq = () => {
  const today = Date.now();
  const time = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(today)

  const [depo, setDepo] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/getDeposit`)
      .then((res) => res.json())
      .then((data) => setDepo(data));
  }, []);
  const handleDeposit = (id, data) => {
    console.log(id);
    // Deposit Request Delete
    fetch(`http://localhost:5000/user/deposit/delete/${id}`, {
      method: "DELETE",
    }).then(() => {
      fetch(`http://localhost:5000/user/getDeposit`)
        .then((res) => res.json())
        .then((data) => setDepo(data));
    });
    // Deposit History Create
    const depoHistory = {
      username: data.user,
      from: data.from,
      method: data.method,
      amount: data.amount,
      date: time,
    };
    fetch(`http://localhost:5000/user/createDepositHistory`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(depoHistory),
    }).then((result) => {
      console.log(result);
    });
  };
  return (
    <>
      <div className="winnerHeading d-flex align-items-center justify-content-between">
        <span className="head">Deposit Request</span>
        <span>
          <input
            type="text"
            className="form-control"
            name="search"
            autoComplete="off"
            placeholder="Search Deposit Request..."
            required
          />
        </span>
      </div>
      <table>
        <tr>
          <th>Username</th>
          <th>From</th>
          <th>Method And To</th>
          <th>Request Amount</th>
          <th>Status</th>
        </tr>
        {depo.map((data) => (
          <tr>
            <td>{data.user}</td>
            <td>{data.from}</td>
            <td>{data.method}</td>
            <td>{data.amount} BDT</td>
            <td>
              <span>
                <Button
                  onClick={()=>handleDeposit(data._id, data)}
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

export default DepositReq;
