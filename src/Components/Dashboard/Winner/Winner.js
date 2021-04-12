import { Button } from "@material-ui/core";
import { Edit } from '@material-ui/icons';
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import './Winner.css';

const Winner = () => {
  return (
    <>
      <div className="winnerWrapped">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="heading">Awaiting Winner</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="winnerData">
                <div className="winnerHeading d-flex align-items-center justify-content-between">
                  <span className="head">Winner Match Check {" "} 
                  <span class="badge badge-danger">After Finished</span>
                   </span>
                  <span>
                    <input
                      type="text"
                      className="form-control"
                      name="search"
                      autoComplete="off"
                      placeholder="Search Match..."
                      required
                    />
                  </span>
                </div>
                <table>
                  <tr>
                    <th>#No</th>
                    <th>Question</th>
                    <th>Match Name</th>
                    <th>End Time</th>
                    <th>Action</th>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>Who Will Be Won?</td>
                    <td>Australia VS Pakistan</td>
                    <td>2020-06-20 20:31:55</td>
                    <td>
                      <span>
                        {" "}
                        <Button color="primary" variant="contained">
                          {" "}
                          <Edit />{" "}
                        </Button>{" "}
                      </span>
                      <span>
                        {" "}
                        <Button color="secondary" variant="contained">
                          Select Winner
                        </Button>{" "}
                      </span>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Winner;
