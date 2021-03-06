import { Button } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import dotenv from "dotenv";
import React, { useEffect, useState } from "react";
dotenv.config();
const WithdrawMethod = () => {
  const [dbData, setDbData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/getMethod`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`
      },
    })
      .then((res) => res.json())
      .then((data) => setDbData(data));
  }, []);
  const handleDelete = (id) => {
    console.log(id)
    fetch(`http://localhost:5000/user/${id}`, {
      method: "DELETE",
    }).then(() => {
      fetch(`http://localhost:5000/user/getMethod`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`
        },
      })
        .then((res) => res.json())
        .then((data) => setDbData(data));
    });
  };
  return (
    <>
      <div className="winnerHeading d-flex align-items-center justify-content-between">
        <span className="head">Withdraw Method</span>
        <span>
          <input
            type="text"
            className="form-control"
            name="search"
            autoComplete="off"
            placeholder="Search Withdraw Method..."
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
        {dbData.map((data, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{data.gatewayName}</td>
            <td>{data.number}</td>
            <td>
              <span>
                {" "}
                <Button
                  onClick={() => handleDelete(data._id)}
                  color="secondary"
                  variant="contained"
                >
                  {" "}
                  <Delete />{" "}
                </Button>{" "}
              </span>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default WithdrawMethod;
