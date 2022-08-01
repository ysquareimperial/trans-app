import React from "react";
import RequestRide from "./RequestRide";
import SuccessPayment from "./SuccessPayment";

export default function PassengerHome() {
  return (
    <div>
      <div style={{ marginTop: 70 }}>
       <RequestRide/>
       <SuccessPayment/>
      </div>
    </div>
  );
}
