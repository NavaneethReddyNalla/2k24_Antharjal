import React from "react";
import { useLocation } from "react-router-dom";

function AdminVerify() {
  const campaign = useLocation().state;

  return (
    <div className="admin-verify">
      <div className="bg-white m-auto mt-3 w-75 p-3 text-start">
        <h3 className="text-center">{campaign.campaignTitle} </h3>
        <p>
          Name: {campaign.firstName} {campaign.lastName}
        </p>
        <p>gender: {campaign.age}</p>
        <p>Gender: {campaign.gender}</p>
        <p>Mobile Number: {campaign.mobileNumber}</p>
        <p>Email: {campaign.email}</p>
        <p>Blood Group: {campaign.bloodGroup}</p>
        <p>Hospital Name: {campaign.hospitalName}</p>
        <p>Hospital Address: {campaign.hospitalAddress}</p>
        <p>Patient Room Number: {campaign.patientRoomNo}</p>
        <p>Funds Required: {campaign.fundsRequired}</p>
        <p>Funding Deadline: {campaign.fundingDeadline}</p>
      </div>
    </div>
  );
}

export default AdminVerify;
