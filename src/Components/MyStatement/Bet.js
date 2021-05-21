import dotenv from "dotenv";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import './index.css';
dotenv.config();
const Bet = () => {
  const storage = sessionStorage.getItem("userInfo");
  const getUser = JSON.parse(storage);
  // bets
  const [bet, setBet] = useState([]);
  useEffect(() => {
    fetch(`https://betbdt.herokuapp.com/user/specificBets/me?bets=${getUser?.username}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setBet(data));
  }, []);
  // bet history
  const [betHistory, setBetHistory] = useState([]);
  useEffect(() => {
    fetch(`https://betbdt.herokuapp.com/user/specificBetHistory/me?betHis=${getUser?.username}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setBetHistory(data));
  }, []);
  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-12">
            <div className="MyStatementMenu">
              <h5>Bets</h5>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>SN.</th>
                    <th>Date</th>
                    <th>Match</th>
                    <th>Question</th>
                    <th>Bet Title</th>
                    <th>Bet Amount</th>
                    <th>Bet Rate</th>
                    <th>Wining Amount</th>
                    <th>Win/Lose</th>
                  </tr>
                </thead>
                <tbody>
                  {[...bet, ...betHistory]?.map((data, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{data.date}</td>
                      <td>
                        {data.match1} vs {data.match2}
                      </td>
                      <td>{data.question}?</td>
                      <td>{data.betTitle}</td>
                      <td>{data.betAmount} TK</td>
                      <td>{data.betRate}</td>
                      <td>{data.winingAmount} TK</td>
                      <td>{data.status}</td>
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

export default Bet;
