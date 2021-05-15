import React, { useEffect, useState } from "react";

const Member = () => {
  const storage = sessionStorage.getItem("club");
  const club = JSON.parse(storage);
  const [dbData, setDbData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user`)
      .then((res) => res.json())
      .then((data) => setDbData(data));
  }, [dbData._id]);

  const [clubHolder, setClubHolder] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/getClubHolder`)
      .then((res) => res.json())
      .then((data) => setClubHolder(data));
  }, [clubHolder._id]);
  const findClubHolder = clubHolder.find((u) => u.username === club?.club); //find Club holder
  const findUser = dbData.filter((u) => u.club === findClubHolder?.club); // find user
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-md-12">
            <div className="winnerHeading d-flex align-items-center justify-content-between">
              <span className="head">Member And Details</span>
              <span>
                <input
                  type="text"
                  className="form-control"
                  name="search"
                  autoComplete="off"
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Type Username..."
                  required
                />
              </span>
            </div>
            <table>
              <tr>
                <th>SN.</th>
                <th>Name</th>
                <th>Mobile</th>
                <th>Sponsor</th>
                <th>Club</th>
                <th>Country</th>
              </tr>
              {findUser
                .filter((value) => {
                  if (searchTerm === "") return value;
                  else if (
                    value.username
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  )
                    return value;
                })
                .map((data, index) => (
                  <tr key={data._id}>
                    <td>{index + 1}</td>
                    <td>{data.name}</td>
                    <td>{data.number}</td>
                    <td>{data.sponsor}</td>
                    <td>{data.club}</td>
                    <td>{data.country}</td>
                  </tr>
                ))}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Member;
