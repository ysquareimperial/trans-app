import React from "react";
import { Table } from "reactstrap";
import { Passengers } from "./AllUsersData";
export default function AllPassengers() {
  return (
    <div>
      <Table size="sm" striped className="mt-4">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Full Name</th>
            <th>Phone</th>
            <th>NIN</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {Passengers.map((item, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{item.fullName}</td>
              <td>{item.phone}</td>
              <td>{item.NIN}</td>
              <td>{item.address}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
