import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProgressBar from "../ProgressBar/ProgressBar";
import { getAxiosWithToken } from "../util";

function AdminVerify() {
  const campaign = useLocation().state;
  const navigate = useNavigate();

  async function verify() {
    const axiosWithToken = getAxiosWithToken();

    const res = await axiosWithToken.put(
      `http://localhost:5000/admin/verify/${campaign.id}`
    );

    if (res.data.statusCode === 11) {
      navigate("../admin-dashboard");
    }
  }

  return (
    <div className="admin-verify">
      <div className="bg-white m-auto mt-3 w-75 p-3 text-start">
        <h3 className="text-center">{campaign.campaignTitle} </h3>
        <p>
          Name: {campaign.firstName} {campaign.lastName}
        </p>
        <p>Age: {campaign.age}</p>
        <p>Gender: {campaign.gender}</p>
        <p>Mobile Number: {campaign.mobileNumber}</p>
        <p>Email: {campaign.email}</p>
        <p>Blood Group: {campaign.bloodGroup}</p>
        <p>Hospital Name: {campaign.hospitalName}</p>
        <p>Hospital Address: {campaign.hospitalAddress}</p>
        <p>Patient Room Number: {campaign.patientRoomNo}</p>
        <p>Funds Required: {campaign.fundsRequired}</p>
        <p>Funding Deadline: {campaign.fundingDeadline}</p>
        <p>Funds Raised: {campaign.fundsRaised} </p>
        <p>Progress: </p>
        <ProgressBar
          bgcolor="orange"
          progress={(+campaign.fundsRaised / +campaign.fundsRequired) * 100}
        />
        <button
          className="btn btn-danger"
          onClick={() => navigate("../admin-dashboard")}
        >
          Cancel
        </button>
        <button className="btn btn-success ms-5" onClick={verify}>
          Verify
        </button>
      </div>
    </div>
  );
}

export default AdminVerify;
