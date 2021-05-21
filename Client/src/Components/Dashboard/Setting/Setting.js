import { Button } from "@material-ui/core";
import { Editor } from "@tinymce/tinymce-react";
import dotenv from "dotenv";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./Setting.css";
dotenv.config();
const Setting = () => {
  const [value, setValue] = useState({
    notice: "",
    success: "",
  });
  const [dbData, setDbData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/getNotice`,{
      method: "GET",
      headers:{
        'content-type':"application/json",
        Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`
      }
    })
      .then((res) => res.json())
      .then((data) => setDbData(data));
  }, []);

  const dbText = dbData.find((data) => data._id > "0");
  const id = dbText?._id;
  const handleChange = (e) => {
    const text = e.target.getContent();
    setValue({
      notice: text,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/user/noticeUpdate/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(value),
    }).then(() => {
      const msg = { ...value };
      msg.success = "Notice Updated !";
      setValue(msg);
    });
  };
  return (
    <>
      <div className="settingWrapped">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="heading">Website Setting</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="generalSetting">
                <div className="head">
                  <h4>
                    <span>General Setting</span>
                  </h4>
                </div>
                <div className="option">
                  <form onSubmit={handleSubmit}>
                    {value.success && (
                      <p className="alert alert-success">{value.success}</p>
                    )}
                    <Row>
                      <Col>
                        <label htmlFor="notice">Notice Title:</label>
                        <Editor
                          initialValue={dbText?.notice}
                          init={{
                            plugins: "link image code emoticons",
                            menubar: false,
                            toolbar:
                              "undo redo | fontsizeselect | fontselect | bold italic| alignleft aligncenter alignright | code emoticons",
                          }}
                          onChange={handleChange}
                        />
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Col>
                        <Button
                          color="primary"
                          type="submit"
                          variant="contained"
                        >
                          Update
                        </Button>
                      </Col>
                    </Row>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Setting;
