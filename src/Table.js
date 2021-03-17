import React from "react";
import "./Table.css";

export default function Table() {
  return (
    <div className="container t">
      <div className="card-body2">
        <table>
          <thead>
            <tr className="heading">
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span id="wind"></span>
              </td>
              <td>
                <span id="humidity"></span>
              </td>
              <td>
                <span id="feelsLike"></span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
