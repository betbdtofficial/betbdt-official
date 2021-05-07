import React from "react";
import { Table } from "react-bootstrap";

const Bet = () => {
  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-12">
            <div className="MyStatementMenu">
              <h5>Bets</h5>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>SN.</th>
                    <th>Date</th>
                    <th>Match</th>
                    <th>Bet Title</th>
                    <th>Bet Amount</th>
                    <th>Bet Rate</th>
                    <th>Wining Amount</th>
                    <th>Win/Lose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>10/05/2021, 10:10:10 PM</td>
                    <td>Australia VS India</td>
                    <td>Autralia</td>
                    <td>250 TK</td>
                    <td>1.6</td>
                    <td>360 TK</td>
                    <td>Panding</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>10/05/2021, 10:10:10 PM</td>
                    <td>Australia VS India</td>
                    <td>India</td>
                    <td>350 TK</td>
                    <td>1.5</td>
                    <td>350 TK</td>
                    <td>Panding</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bet;
