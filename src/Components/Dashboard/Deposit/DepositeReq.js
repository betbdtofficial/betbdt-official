import { Button } from "@material-ui/core";
import React from "react";

const DepositReq = () => {
  return (
    <>
      <div className="winnerHeading d-flex align-items-center justify-content-between">
        <span className="head">Deposit Request</span>
        <span>
          <input
            type="text"
            className="form-control"
            name="search"
            autoComplete="off"
            placeholder="Search Deposit Request..."
            required
          />
        </span>
      </div>
      <table>
        <tr>
          <th>Username</th>
          <th>Recived Num</th>
          <th>Account Type</th>
          <th>Gateway</th>
          <th>Request Amount</th>
          <th>Status</th>
        </tr>
          <tr>
            <td>younus</td>
            <td>0172356898</td>
            <td>Agent</td>
            <td>Bkash</td>
            <td>254 BDT</td>
            <td>
              <span>
                <Button
                  color="secondary"
                  variant="contained"
                >
                  Pending
                </Button>
              </span>
            </td>
          </tr>
      </table>
    </>
  );
};

export default DepositReq;
