import { Button } from "@material-ui/core";
import React from "react";

const DepoHistory = () => {
  return (
    <>
      {" "}
      <div className="winnerHeading d-flex align-items-center justify-content-between">
        <span className="head">Deposit History</span>
        <span>
          <input
            type="text"
            className="form-control"
            name="search"
            autoComplete="off"
            placeholder="Search Deposit User..."
            required
          />
        </span>
      </div>
      <table>
        <tr>
          <th>Username</th>
          <th>Wallet Address</th>
          <th>Gateway</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
        <tr>
          <td>jui_hasan</td>
          <td>125srRuYr21dbarzy</td>
          <td>Mastercard</td>
          <td>540 BDT</td>
          <td>2018-07-29 10:13:20</td>
          <td>
            <span>
              <Button color="secondary" variant="contained">
              Processing
              </Button>
            </span>
          </td>
        </tr>
        <tr>
          <td>abul_bashar</td>
          <td>125srRuYr21dbarzy</td>
          <td>Credit Card</td>
          <td>587 BDT</td>
          <td>2018-07-29 10:13:20</td>
          <td>
            <span>
              <Button color="primary" variant="contained">
                Completed
              </Button>
            </span>
          </td>
        </tr>
        <tr>
          <td>monowar_hossain</td>
          <td>12548785518254</td>
          <td>Mastercard</td>
          <td>987 BDT</td>
          <td>2018-07-29 10:13:20</td>
          <td>
            <span>
              <Button color="primary" variant="contained">
                Completed
              </Button>
            </span>
          </td>
        </tr>
      </table>
    </>
  );
};

export default DepoHistory;
