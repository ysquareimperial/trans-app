import React from "react";
import "./input.css";
export default function Goog() {
  return (
    <div>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="Enter Zip Code"
          id="zipcode"
          name="zipcode"
        />
        <label for="zipcode" class="form-label">
          Enter Zip Code
        </label>
      </div>
    </div>
  );
}
