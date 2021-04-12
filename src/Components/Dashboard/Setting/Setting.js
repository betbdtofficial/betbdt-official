import { Button } from "@material-ui/core";
import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Setting.css";
const Setting = () => {
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
                  <form>
                    <Row>
                      <Col>
                        <label htmlFor="title">Website Title:</label>
                        <input
                          type="text"
                          className="form-control"
                          value="betBdt | Top Betting Website Of Bangladesh"
                        />
                      </Col>
                      <Col>
                        <label htmlFor="notice">Notice Title:</label>
                        <input
                          type="text"
                          className="form-control"
                          value="ঈদ ঊপলক্ষে ১০% ডিপোজিট ছাড় | পেমেন্ট মেথড যে কোনো সিস্টেমে দেয়া হবে"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <label htmlFor="pColor">Primary Color:</label>
                        <input type="color" className="form-control" />
                      </Col>
                      <Col>
                        <label htmlFor="sColor">Secondary Color:</label>
                        <input type="color" className="form-control" />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <label htmlFor="logo">Upload Logo:</label>
                        <input type="file" className="form-control" />
                      </Col>
                    </Row>
                    <br/>
                    <Row>
                      <Col>
                        <Button color="primary" type="submit" variant="contained">Update</Button>
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
