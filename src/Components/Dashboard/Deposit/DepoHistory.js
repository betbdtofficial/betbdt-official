import { Button } from "@material-ui/core";
import dotenv from "dotenv";
import React, { useEffect, useState } from "react";
dotenv.config();
const DepoHistory = () => {
  const [depoHis, setDepoHis] = useState([]);
  useEffect(() => {
    fetch(`https://betbdt.herokuapp.com/user/getDepositHistory`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setDepoHis(data));
  }, []);
  return (
    <>
      {" "}
      <div className="winnerHeading d-flex align-items-center justify-content-between">
        <span className="head">Deposit History</span>
        <span>
          <input
            type="text"
            className="form-control"
            name="search"
            autoComplete="off"
            placeholder="Search Deposit User..."
            required
          />
        </span>
      </div>
      <table>
        <tr>
          <th>Username</th>
          <th>From</th>
          <th>Method And To</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
        {depoHis.map((data) => (
          <tr>
            <td>{data.username}</td>
            <td>{data.from}</td>
            <td>{data.method}</td>
            <td>{data.amount} BDT</td>
            <td>{data.date}</td>
            <td>
              <span>
                <Button color="primary" variant="contained">
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

export default DepoHistory;
