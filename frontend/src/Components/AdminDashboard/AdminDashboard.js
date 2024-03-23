import React, { useEffect, useState } from "react";
import { getAxiosWithToken } from "../util";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const [campaigns, setCampaigns] = useState([]);
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  function showMore(campaign) {
    navigate(`../admin/campaign/${campaign.id}`, { state: campaign });
  }

  useEffect(() => {
    const axiosWithToken = getAxiosWithToken();

    const getCampaigns = async () => {
      const res = await axiosWithToken.get(
        "http://localhost:5000/admin/to-verify"
      );

      if (res.data.statusCode === 12) {
        setCampaigns(res.data.payload);
      } else {
        setErr(res.data.message);
      }
    };

    getCampaigns();
  }, []);

  return (
    <div className="p-5 admin-dashboard">
      <h2 className="text-center text-white">Unverified Campaigns</h2>
      {err !== "" && <p className="fs-3 lead text-danger">{err}</p>}
      <div className="row row-cols-3">
        {campaigns.map((campaign) => (
          <>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{campaign.campaignTitle}</h5>
                  <h6 className="card-subtitle text-body-secondary">
                    {campaign.firstName +
                      " " +
                      campaign.lastName +
                      ` (${campaign.gender})`}
                  </h6>
                  <p className="card-text text-body-secondary mb-3">
                    {campaign.hospitalAddress}
                  </p>
                  <p className="card-text">{`Funds Required: ${campaign.fundsRequired}`}</p>
                  <p className="card-text">{`Funds Raised: ${campaign.fundsRaised}`}</p>
                  <p className="card-text">{`Funds Dealine: ${campaign.fundingDeadline}`}</p>
                  <button
                    className="card-link btn btn-warning"
                    onClick={() => showMore(campaign)}
                  >
                    Show More
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;
