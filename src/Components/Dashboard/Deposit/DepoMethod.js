import { Button } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import dotenv from "dotenv";
import React, { useEffect, useState } from "react";
dotenv.config();
const DepositMethod = () => {
  const [depoMethod, setDepoMethod] = useState([]);
  useEffect(() => {
    fetch(`https://betbdt.herokuapp.com/user/getDepoMethod`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setDepoMethod(data));
  }, []);
  const handleDelete = (id) => {
    fetch(`https://betbdt.herokuapp.com/user/deleteDepoMethod/${id}`, {
      method: "DELETE",
    }).then(() => {
      fetch(`https://betbdt.herokuapp.com/user/getDepoMethod`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setDepoMethod(data));
    });
  };
  return (
    <>
      <div className="winnerHeading d-flex align-items-center justify-content-between">
        <span className="head">Deposit Method</span>
        <span>
          <input
            type="text"
            className="form-control"
            name="search"
            autoComplete="off"
            placeholder="Search Deposit Method..."
            required
          />
        </span>
      </div>
      <table>
        <tr>
          <th>#No</th>
          <th>Payment Gateway Name</th>
          <th>Number</th>
          <th>Action</th>
        </tr>
        {depoMethod.map((data, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{data.gatewayName}</td>
            <td>{data.number}</td>
            <td>
              <span>
                <Button
                  onClick={() => handleDelete(data._id)}
                  color="secondary"
                  variant="contained"
                >
                  <Delete className="viewIcon" />
                </Button>
              </span>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default DepositMethod;
