import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";

const WithdrawHistory = () => {
  const storage = sessionStorage.getItem("club");
  const club = JSON.parse(storage);
  const [history, setHistory] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/getWithdrawHistory`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setHistory(data));
  }, []);
  const [clubHolder, setClubHolder] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/getClubHolder`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setClubHolder(data));
  }, [clubHolder._id]);
  const [withdraw, setWithdraw] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/withdrawGet`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setWithdraw(data));
  }, []);
  const findClubHolder = clubHolder.find((u) => u?.username === club?.club); //find Club holder
  const findUser = [...withdraw, ...history].filter((u) => u?.club === findClubHolder?.club); // find user
  const [searchTerm, setSearchTerm] = useState("")
  return (
    <>
      {" "}
      <div className="winnerHeading d-flex align-items-center justify-content-between">
        <span className="head">Withdraw History</span>
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
      <table className="mb-5">
        <tr>
          <th>Username</th>
          <th>Recived Num</th>
          <th>Account Type</th>
          <th>Pay Method</th>
          <th>Request Amount</th>
          <th>Date</th>
          <th>Status</th>
        </tr>
        {findUser?.filter((value)=>{
          if(searchTerm == "") return value
          else if(value.username.toLowerCase().includes(searchTerm.toLowerCase())) return value
        }).map((data) => (
          <tr>
            <td>{data?.username}</td>
            <td>{data?.number || data?.to}</td>
            <td>{data?.type}</td>
            <td>{data?.method}</td>
            <td>{data?.amount} BDT</td>
            <td>{data?.date}</td>
            <td>
              <span>
                <Button color="primary" variant="contained">
                  {data?.button}
                </Button>
              </span>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default WithdrawHistory;
