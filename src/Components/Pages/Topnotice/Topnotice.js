/* eslint-disable jsx-a11y/no-distracting-elements */
import dotenv from "dotenv";
import React, { useEffect, useState } from "react";
import ReactHtmlParser from 'react-html-parser';
import "./Topnotice.css";
dotenv.config();
const Topnotice = () => {
  const [dbData, setDbData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/getNotice`,{
      method: "GET",
      headers: {
        'content-type':"application/json",
        Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`
      }
    })
      .then((res) => res.json())
      .then((data) => setDbData(data));
  }, []);

  const dbText = dbData.find((data) => data._id > "0");
  return (
    <div className="welcome-text">
      <div className="container-fluid">
        <marquee>
          <strong>
            {ReactHtmlParser(dbText?.notice)}
          </strong>
        </marquee>
      </div>
    </div>
  );
};

export default Topnotice;
