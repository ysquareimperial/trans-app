import React from "react";
import { Table } from "reactstrap";
import { Drivers } from "./AllUsersData";
export default function AllDrivers() {
  return (
    <div>
      <Table size="sm" striped className="mt-4">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Full Name</th>
            <th>Phone</th>
            <th>NIN</th>
            <th>License</th>
            <th>Expiry Date</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {Drivers.map((item, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{item.fullName}</td>
              <td>{item.phone}</td>
              <td>{item.NIN}</td>
              <td>{item.license}</td>
              <td>{item.licenseExpiry}</td>
              <td>{item.address}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
