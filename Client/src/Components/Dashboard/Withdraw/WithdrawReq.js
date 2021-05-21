import { Button } from "@material-ui/core";
import dotenv from "dotenv";
import React, { useEffect, useState } from "react";
dotenv.config();
const WithdrawReq = () => {
  const today = Date.now();
  const time = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(today)

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
  const [searchTerm, setSearchTerm] = useState("")
  const handleClick = (id, data) => {
    // Withdraw Request Delete
    fetch(`http://localhost:5000/user/delete/${id}`, {
      method: "DELETE",
    }).then(() => {
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
    });
    // Withdraw History Create
    const WithHistory = {
      username: data.username,
      club: data.club,
      number: data.number,
      type: data.type,
      method: data.method,
      amount: data.amount,
      date: time,
      button: "Completed"
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
            onChange={(e)=>setSearchTerm(e.target.value)}
            autoComplete="off"
            placeholder="Type Username..."
            required
          />
        </span>
      </div>
      <table>
        <tr>
          <th>Username</th>
          <th>Recived Num</th>
          <th>Account Type</th>
          <th>Pay Method</th>
          <th>Request Amount</th>
          <th>Date</th>
          <th>Status</th>
        </tr>
        {withdraw.filter((value)=>{
          if(searchTerm == "") return value
          else if(value.user.toLowerCase().includes(searchTerm.toLowerCase())) return value
        }).map((data) => (
          <tr>
            <td>{data.username}</td>
            <td>{data.number}</td>
            <td>{data.type}</td>
            <td>{data.method}</td>
            <td>{data.amount} BDT</td>
            <td>{data.date}</td>
            <td>
              <span>
                <Button
                  onClick={() => handleClick(data._id, data)}
                  color="secondary"
                  variant="contained"
                >
                  {data.button}
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
