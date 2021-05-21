import React, { useEffect, useState } from "react";

const Member = () => {
  const storage = sessionStorage.getItem("club");
  const club = JSON.parse(storage);
  const [clubs, setClubs] = useState([]);
  useEffect(() => {
    fetch(`https://betbdt.herokuapp.com/user/clubHolderMembers?user=${club?.club}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setClubs(data));
  }, [clubs._id]);

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
              {clubs
                .filter((value) => {
                  if (searchTerm === "") return value;
                  else if (
                    value.name.toLowerCase().includes(searchTerm.toLowerCase())
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
