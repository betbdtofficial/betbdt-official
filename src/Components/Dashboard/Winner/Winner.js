import { Button } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import dotenv from "dotenv";
import React, { useEffect, useState } from "react";
import "./Winner.css";
dotenv.config();
const Winner = () => {
  const [bet, setBet] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/getBet`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`
      },
    })
      .then((res) => res.json())
      .then((data) => setBet(data));
  }, []);
  // refund function
  const handleReFund = (data)=>{
    const username = data?.username;
    const id = data?._id;
    const balance = {
      balance: data?.betAmount,
    };
    fetch(`http://localhost:5000/user/betUserBalUpdate/${username}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(balance),
    });
    fetch(`http://localhost:5000/user/betDelete/${id}`, {
      method: "DELETE",
    }).then(() => {
      fetch(`http://localhost:5000/user/getBet`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`
        },
      })
        .then((res) => res.json())
        .then((data) => setBet(data));
    });
  }
  // Win function
  const handleWin = (data) => {
    const username = data?.username;
    const id = data?._id;
    const balance = {
      balance: data?.winingAmount,
    };
    // bet user balance update
    fetch(`http://localhost:5000/user/betUserBalUpdate/${username}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(balance),
    });
    // bet button status update
    const bets = {
      username: data?.username,
      date: data?.date,
      match1: data?.match1,
      match2: data?.match2,
      betTitle: data?.betTitle,
      betAmount: data?.betAmount,
      winingAmount: data?.winingAmount,
      betRate: data?.betRate,
      question: data?.question,
      status: "Win",
    };
    fetch(`http://localhost:5000/user/createBetHistory`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bets),
    });
    // bet delete from wining list
    fetch(`http://localhost:5000/user/betDelete/${id}`, {
      method: "DELETE",
    }).then(() => {
      fetch(`http://localhost:5000/user/getBet`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`
        },
      })
        .then((res) => res.json())
        .then((data) => setBet(data));
    });
  };
  // Lose function
  const handleLose = (data) => {
    const id = data?._id;
    // bet button status update
    const bets = {
      username: data?.username,
      date: data?.date,
      match1: data?.match1,
      match2: data?.match2,
      betTitle: data?.betTitle,
      betAmount: data?.betAmount,
      winingAmount: data?.winingAmount,
      betRate: data?.betRate,
      question: data?.question,
      status: "Loss",
    };
    fetch(`http://localhost:5000/user/createBetHistory`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bets),
    });
    // bet delete from wining list
    fetch(`http://localhost:5000/user/betDelete/${id}`, {
      method: "DELETE",
    }).then(() => {
      fetch(`http://localhost:5000/user/getBet`)
        .then((res) => res.json())
        .then((data) => setBet(data));
    });
  };
  return (
    <>
      <div className="winnerWrapped">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="heading">Awaiting Winner</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="winnerData">
                <div className="winnerHeading d-flex align-items-center justify-content-between">
                  <span className="head">
                    Winner Match Check{" "}
                    <span class="badge badge-danger">After Finished</span>
                  </span>
                  <span>
                    <input
                      type="text"
                      className="form-control"
                      name="search"
                      autoComplete="off"
                      placeholder="Search Match..."
                      required
                    />
                  </span>
                </div>
                <table>
                  <tr>
                    <th>#No</th>
                    <th>Match Name</th>
                    <th>Question</th>
                    <th>Bet Name</th>
                    <th>Action</th>
                  </tr>
                  {bet.map((data, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>
                        {data.match1} VS {data.match2}
                      </td>
                      <td>{data.question}?</td>
                      <td>{data.betTitle}</td>
                      <td>
                        <span>
                          {" "}
                          <Button
                            onClick={() => handleReFund(data)}
                            color="primary"
                            variant="contained"
                          >
                            {" "}
                            Refund
                          </Button>{" "}
                        </span>
                        <span>
                          {" "}
                          <Button
                            onClick={() => handleLose(data)}
                            color="secondary"
                            variant="contained"
                          >
                            {" "}
                            Lose
                          </Button>{" "}
                        </span>
                        <span>
                          {" "}
                          <Button
                            onClick={() => handleWin(data)}
                            color="primary"
                            variant="contained"
                          >
                            Win
                          </Button>{" "}
                        </span>
                      </td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Winner;
