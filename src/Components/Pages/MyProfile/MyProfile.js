import dotenv from "dotenv";
import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Context } from "../../../App";
dotenv.config();
const MyProfile = () => {
  const [loginUser, setLoginUser] = useContext(Context);
  const storage = sessionStorage.getItem("userInfo");
  const getUser = JSON.parse(storage);
  const [dbData, setDbData] = useState([]);
  useEffect(() => {
    fetch(
      `http://localhost:5000/user/me?u=${getUser.username || loginUser.user}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`,
        },
      }
    )
    .then((res) => res.json())
    .then((data) => setDbData(data));
  }, []);
  return (
    <div className="row">
      <div className="col-md-12">
        <h2 className="heading text-center">My Profile</h2>
        <br />
        <Table striped bordered hover>
          {dbData.map((data) => (
            <tbody key={data._id}>
              <tr>
                <td>Full Name</td>
                <td>{data.name}</td>
              </tr>
              <tr>
                <td>Username</td>
                <td>{data.username}</td>
              </tr>
              <tr>
                <td>Total Balance</td>
                <td>{data.balance} BDT</td>
              </tr>
              <tr>
                <td>Mobile Number</td>
                <td>{data.number}</td>
              </tr>
              <tr>
                <td>Sponsored By</td>
                <td>{data.sponsor}</td>
              </tr>
              <tr>
                <td>Club</td>
                <td>❤️{data.club}❤️</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default MyProfile;
