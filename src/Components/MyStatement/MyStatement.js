import React from "react";
import { Table } from "react-bootstrap";

const MyStatement = () => {
  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-12">
            <div className="MyStatementMenu">
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>SN.</th>
                    <th>Match</th>
                    <th>Question</th>
                    <th>Answer</th>
                    <th>Amount</th>
                    <th>Rate</th>
                    <th>Amount(Won)</th>
                    <th>Win/Lose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>Panding</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    <td>3.1</td>
                    <td>350</td>
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

export default MyStatement;
