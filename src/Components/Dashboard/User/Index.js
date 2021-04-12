import { Button } from "@material-ui/core";
import React from "react";
import { FaRegEye } from "react-icons/fa";

const Index = () => {
  return (
    <>
      <div className="winnerHeading d-flex align-items-center justify-content-between">
        <span className="head">Active User</span>
        <span>
          <input
            type="text"
            className="form-control"
            name="search"
            autoComplete="off"
            placeholder="Search Active User..."
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
              <Button color="secondary" variant="contained">
                <span>
                  <FaRegEye className="viewIcon" />
                </span>{" "}
                View
              </Button>
            </span>
          </td>
        </tr>
        <tr>
          <td>MD Abul Bashar</td>
          <td>abulbashar@gmail.com</td>
          <td>abul_bashar</td>
          <td>01789562365</td>
          <td>4587 BDT</td>
          <td>
            <span>
              <Button color="secondary" variant="contained">
                <span>
                  <FaRegEye className="viewIcon" />
                </span>{" "}
                View
              </Button>
            </span>
          </td>
        </tr>
        <tr>
          <td>MD Monowar Hossain</td>
          <td>monowarhossain@gmail.com</td>
          <td>monowarhossain</td>
          <td>01778985647</td>
          <td>5879 BDT</td>
          <td>
            <span>
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

export default Index;
