import React, { useState } from "react";
import { Table } from "react-bootstrap";

const Bet = () => {
  const storage = sessionStorage.getItem("user");
  const getUser = JSON.parse(storage);
  const [bet, setBet] = useState([]);
  fetch(`http://localhost:5000/user/getBet`)
    .then((res) => res.json())
    .then((data) => setBet(data));

  const findEl = bet.filter(data=>data.username === getUser?.user)
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
                    <th>Bet Title</th>
                    <th>Bet Amount</th>
                    <th>Bet Rate</th>
                    <th>Wining Amount</th>
                    <th>Win/Lose</th>
                  </tr>
                </thead>
                <tbody>
                  {findEl?.map((data, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{data.date}</td>
                      <td>
                        {data.match1} vs {data.match2}
                      </td>
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
