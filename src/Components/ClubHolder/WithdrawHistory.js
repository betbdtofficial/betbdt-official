import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";

const WithdrawHistory = () => {
  const storage = sessionStorage.getItem("club");
  const club = JSON.parse(storage);
  const [history, setHistory] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/getWithdrawHistory`)
      .then((res) => res.json())
      .then((data) => setHistory(data));
  }, []);

  const [clubHolder, setClubHolder] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/getClubHolder`)
      .then((res) => res.json())
      .then((data) => setClubHolder(data));
  }, [clubHolder._id]);
  const findClubHolder = clubHolder.find((u) => u.username === club?.club); //find Club holder
  const findUser = history.filter((u) => u.club === findClubHolder?.club); // find user
  console.log(findUser)
  console.log(findClubHolder)
  console.log(history)
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
        {findUser.filter((value)=>{
          if(searchTerm == "") return value
          else if(value.username.toLowerCase().includes(searchTerm.toLowerCase())) return value
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

export default WithdrawHistory;
