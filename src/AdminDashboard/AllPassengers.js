import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { Passengers } from "./AllUsersData";
export default function AllPassengers() {
  const [PassengersList, setPassengersList] = useState([]);
  const getAllUsers = () => {
    fetch("http://127.0.0.1:34567/get_PassengerReg")
      .then((raw) => raw.json())
      .then((data) => {
        if (data.results && data.results.length) {
          setPassengersList(data.results);
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
      {JSON.stringify(PassengersList)}
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
