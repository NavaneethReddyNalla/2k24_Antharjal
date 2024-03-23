import React from "react";
import "./HomePage.css";
function Homepage() {
  return (
    <div>
      <div className="banner">
        <div className="text-container ">
          <h5 className="fs-3">
            Need Funds to Pay For a Medical
            <br /> Emergency or Social Cause?
          </h5>
          <div className="statistics">
            <div className="stats1">
              <span className="font-weight-bold text-warning">0%</span>
              <br />
              platform fee
            </div>

            <div className="stats2">
              <span className="font-weight-bold text-warning">72 Lakh+</span>
              <br />
              Donors
            </div>

            <div className="stats2">
              <span className="font-weight-bold text-warning">3.2 Lakh+</span>
              <br />
              Lifes Saved
            </div>
          </div>

          {/* Button to navigate to start a campaign*/}
          <button className="button-66 mx-auto mt-5">
            Start a Fund-Raiser
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
