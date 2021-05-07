import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";

const DepositReq = () => {
  const today = Date.now();
  const time = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(today);

  const [depo, setDepo] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/getDeposit`)
      .then((res) => res.json())
      .then((data) => setDepo(data));
  }, []);
  const [searchTerm, setSearchTerm] = useState("");
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
      username: data.username,
      from: data.from,
      method: data.method,
      amount: data.amount,
      date: time,
      button: "Completed",
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
    // deposite amount add
    const username = data.username;
    fetch(`http://localhost:5000/user/${username}`, {
      method: "PATCH",
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
            onChange={(e) => setSearchTerm(e.target.value)}
            autoComplete="off"
            placeholder="Type Username..."
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
          <th>Date</th>
          <th>Status</th>
        </tr>
<<<<<<< HEAD
        {depo
          .filter((value) => {
            if (searchTerm == "") return value;
            else if (
              value.user.toLowerCase().includes(searchTerm.toLowerCase())
            )
              return value;
          })
          .map((data) => (
            <tr>
              <td>{data.username}</td>
              <td>{data.from}</td>
              <td>{data.method}</td>
              <td>{data.amount} BDT</td>
              <td>{data.date}</td>
              <td>
                <span>
                  <Button
                    onClick={() => handleDeposit(data._id, data)}
                    color="secondary"
                    variant="contained"
                  >
                    {data.button}
                  </Button>
                </span>
              </td>
            </tr>
          ))}
=======
        {depo.filter((value)=>{
          if(searchTerm == "") return value
          else if(value.user.toLowerCase().includes(searchTerm.toLowerCase())) return value
        }).map((data) => (
          <tr>
            <td>{data.user}</td>
            <td>{data.from}</td>
            <td>{data.method}</td>
            <td>{data.amount} BDT</td>
            <td>{data.date}</td>
            <td>
              <span>
                <Button
                  onClick={()=>handleDeposit(data._id, data)}
                  color="secondary"
                  variant="contained"
                >
                  Cancel
                </Button>
              </span> <span>
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
>>>>>>> 857571ddfd1de6e7847521aa904ca687e2a3d95f
      </table>
    </>
  );
};

export default DepositReq;
