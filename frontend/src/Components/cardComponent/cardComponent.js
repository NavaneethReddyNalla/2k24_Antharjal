import React from "react";

function CardComponent({ campaignObj }) {
  return (
    <div className="card text-white bg-dark mb-3" style={{ maxWidth: "18rem" }}>
      <div className="card-header">{campaignObj.campaignTitle}</div>
      <div className="card-body">
        {/* <h5 className="card-title">Special title treatment</h5> */}
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Name:{" "}
            {String(campaignObj.firstName) + " " + String(campaignObj.lastName)}
          </li>
          <li className="list-group-item">
            Phone number:{campaignObj.mobileNumber}
          </li>
          <li className="list-group-item">
            Blood Group:{campaignObj.bloodGroup}
          </li>
          <li className="list-group-item">Email: {campaignObj.email}</li>
          <li className="list-group-item">Address: {campaignObj.address}</li>
          <li className="list-group-item">
            Funds Required: {campaignObj.fundRequired}
          </li>
        </ul>
        <button className="btn btn-success mt-2">Donate</button>
      </div>
    </div>
  );
}

export default CardComponent;
