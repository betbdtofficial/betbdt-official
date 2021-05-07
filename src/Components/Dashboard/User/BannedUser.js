import { Button } from "@material-ui/core";
import BathtubIcon from "@material-ui/icons/Bathtub";
import React from "react";
import { FaRegEye } from "react-icons/fa";
const BannedUser = () => {
  return (
    <>
      <div className="winnerHeading d-flex align-items-center justify-content-between">
        <span className="head">Banned User</span>
        <span>
          <input
            type="text"
            className="form-control"
            name="search"
            autoComplete="off"
            placeholder="Search Banned User..."
            required
          />
        </span>
      </div>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Username</th>
          <th>Mobile</th>
          <th>Balance</th>
          <th>Details</th>
        </tr>
        <tr>
          <td>MD Hasan Mia</td>
          <td>juihasan@gmail.com</td>
          <td>jui_hasan</td>
          <td>01711122233</td>
          <td>4890 BDT</td>
          <td>
            <span>
              <Button color="primary" variant="contained">
                <span>
                  <BathtubIcon className="viewIcon" />
                </span>{" "}
                Active
              </Button>{" "}
              <Button color="secondary" variant="contained">
                <span>
                  <FaRegEye className="viewIcon" />
                </span>{" "}
                View
              </Button>
            </span>
          </td>
        </tr>
      </table>
    </>
  );
};

export default BannedUser;
