import { Button } from "@material-ui/core";
import React from "react";

const WithdrawReq = () => {
  return (
    <>
      <div className="winnerHeading d-flex align-items-center justify-content-between">
        <span className="head">Withdraw Request</span>
        <span>
          <input
            type="text"
            className="form-control"
            name="search"
            autoComplete="off"
            placeholder="Search Withdraw Request..."
            required
          />
        </span>
      </div>
      <table>
        <tr>
          <th>Username</th>
          <th>Transaction</th>
          <th>Gateway</th>
          <th>Request Amount</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>Hasan</td>
          <td>458rjyyerUYzeX7</td>
          <td>Paypal</td>
          <td>5697 BDT</td>
          <td>
            <span>
              <Button color="secondary" variant="contained">
                Processing
              </Button>
            </span>
          </td>
        </tr>
        <tr>
          <td>Monowar</td>
          <td>254878252488</td>
          <td>Sonali Bank</td>
          <td>112547 BDT</td>
          <td>
            <span>
              <Button color="primary" variant="contained">
                Completed
              </Button>
            </span>
          </td>
        </tr>
        <tr>
          <td>Bashar</td>
          <td>HyeTXyZ0Ip8dAta</td>
          <td>Payneer</td>
          <td>23654 BDT</td>
          <td>
            <span>
              <Button color="secondary" variant="contained">
                Processing
              </Button>
            </span>
          </td>
        </tr>
      </table>
    </>
  );
};

export default WithdrawReq;
