import { Button } from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import React from "react";

const DepositMethod = () => {
  return (
    <>
      <div className="winnerHeading d-flex align-items-center justify-content-between">
        <span className="head">Deposit Method</span>
        <span>
          <input
            type="text"
            className="form-control"
            name="search"
            autoComplete="off"
            placeholder="Search Deposit Method..."
            required
          />
        </span>
      </div>
      <table>
        <tr>
          <th>#No</th>
          <th>Payment Gateway Name</th>
          <th>Wallet Address</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
        <tr>
          <td>01</td>
          <td>PayPal</td>
          <td>125775482585</td>
          <td>
            <span>
              <Button color="primary" variant="contained">
                Active
              </Button>
            </span>
          </td>
          <td>
            <span>
              <Button color="secondary" variant="contained">
                <span>
                <Edit className="viewIcon" />
                </span>{" "}
                Edit
              </Button>
            </span>
          </td>
        </tr>
        <tr>
          <td>02</td>
          <td>Visa</td>
          <td>12547rko3587</td>
          <td>
            <span>
              <Button color="primary" variant="contained">
                Active
              </Button>
            </span>
          </td>
          <td>
            <span>
              <Button color="secondary" variant="contained">
                <span>
                <Edit className="viewIcon" />
                </span>{" "}
                Edit
              </Button>
            </span>
          </td>
        </tr>
        <tr>
          <td>03</td>
          <td>Payneer</td>
          <td>3698741258re1</td>
          <td>
            <span>
              <Button color="primary" variant="contained">
                Active
              </Button>
            </span>
          </td>
          <td>
            <span>
              <Button color="secondary" variant="contained">
                <span>
                <Edit className="viewIcon" />
                </span>{" "}
                Edit
              </Button>
            </span>
          </td>
        </tr>
      </table>
    </>
  );
};

export default DepositMethod;
