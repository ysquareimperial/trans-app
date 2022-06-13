import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { Drivers } from "./AllUsersData";
export default function AllDrivers() {
  const [DriversList, setDriversList] = useState([]);
  const getAllUsers = () => {
    fetch("http://127.0.0.1:34567/get_driverregistration")
      .then((raw) => raw.json())
      .then((data) => {
        if (data.results && data.results.length) {
          setDriversList(data.results);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <div>
      {/* {JSON.stringify(DriversList)} */}
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
          {DriversList.map((item, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{item.fullName}</td>
              <td>{item.phoneNo}</td>
              <td>{item.NIN}</td>
              <td>{item.licenseNo}</td>
              <td>{item.licenseExpiryDate}</td>
              <td>{item.currentAddress}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
