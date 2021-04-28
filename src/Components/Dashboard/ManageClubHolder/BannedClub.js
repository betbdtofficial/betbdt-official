import { Button } from "@material-ui/core";
import React from 'react';
import { FaRegEye } from "react-icons/fa";
const BannedClub = () => {
    return (
        <div>
            <>
      <div className="winnerHeading d-flex align-items-center justify-content-between">
        <span className="head">Banned Club</span>
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
          <th>Club Name</th>
          <th>Username</th>
          <th>Mobile</th>
          <th>Details</th>
        </tr>
        <tr>
          <td>MD Hasan Mia</td>
          <td>Top Bangladesh24</td>
          <td>hasanmiaweb</td>
          <td>01711122233</td>
          <td>
            <span>
              <Button color="primary" variant="contained">
                <span>
                  <FaRegEye className="viewIcon" />
                </span>{" "}
                Re Active 
              </Button>
            </span>
            <span>
              <Button color="" variant="contained">
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
        </div>
    );
};

export default BannedClub;