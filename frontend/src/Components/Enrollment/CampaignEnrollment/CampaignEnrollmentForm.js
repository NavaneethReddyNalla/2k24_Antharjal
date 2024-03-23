import React, { useState } from "react";
import "./CampaignEnrollment.css";
import { useForm } from "react-hook-form";
import { getAxiosWithToken } from "../../util";
import { useNavigate } from "react-router-dom";

export default function CampaignEnrollmentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  async function handleFormSubmit(data) {
    const axiosWithToken = getAxiosWithToken();

    data.id = Date.now();
    data.verified = false;
    data.completed = false;
    data.fundsRaised = 0;

    const res = await axiosWithToken.post(
      "http://localhost:5000/campaign/new-campaign",
      data
    );

    if (res.data.statusCode === 10) {
      navigate("/campaigns");
    } else {
      setErr(res.data.message);
    }
  }

  return (
    <div>
      <h1 className="campaignEnrollmentH1 display-1 text-center text-white">
        Campaign Enrollment
      </h1>
      <div className="campaingnEnrollmentForm m-3 w-50 mx-auto p-4">
        <form
          className=" w-100 mx-auto mt-5 text-start"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <div className="mb-3">
            <label
              htmlFor="campaignTitle"
              className=" text-white mx-2 form-label "
            >
              Campaign Title
            </label>

            <input
              type="text"
              placeholder=" Title of Campaign"
              {...register("campaignTitle", { required: true })}
              className="form-control"
            />
          </div>
          <div className="row mb-2">
            <div className="col-xs-1 col-6">
              <label
                htmlFor="firstname"
                className="mb-2 mx-2 form-label text-white"
              >
                First-Name
              </label>
              <input
                type="text"
                name="firstname"
                className="form-control mb-3"
                placeholder="First name"
                {...register("firstName", {
                  required: true,
                  minLength: 4,
                  maxLength: 60,
                  maxLength: 30,
                })}
              />

              {errors.firstname?.type === "required" && (
                <p className="text-danger-lead fs-5">Firstname is required</p>
              )}
              {errors.firstname?.type === "minLength" && (
                <p className="text-danger-lead fs-5">minLength is 4</p>
              )}
              {errors.firstname?.type === "maxLength" && (
                <p className="text-danger-lead fs-5">maxLength is 60</p>
              )}
            </div>
            <div className="col-xs-1 col-6 ">
              <label
                htmlFor="lastname"
                className="mb-2 mx-2 form-label text-white"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastname"
                className="form-control mb-2"
                placeholder="Last name"
                {...register("lastName", {
                  required: true,
                  minLength: 4,
                  maxLength: 60,
                  maxLength: 40,
                })}
              />

              {errors.lastname?.type === "required" && (
                <p className="text-danger-lead fs-5">lastname is required</p>
              )}
              {errors.lastname?.type === "minLength" && (
                <p className="text-danger-lead fs-5">minLength is 4</p>
              )}
              {errors.lastname?.type === "maxLength" && (
                <p className="text-danger-lead fs-5">maxLength is 60</p>
              )}
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="mb-2 mx-2 form-label text-white">
              Age
            </label>
            <input
              type="number"
              placeholder="Age"
              {...register("age", { required: true, max: 100 })}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <h6 className="text-white">Select Gender</h6>
            <div className="form-check col-xs-1 col-6">
              <input
                type="radio"
                id="form-check-input"
                value="male"
                {...register("gender")}
              />
              <label htmlFor="m" className="form-check-label text-white">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                id="form-check-input"
                value="female"
                {...register("gender")}
              />
              <label htmlFor="f" className="form-check-label text-white">
                Female
              </label>
            </div>
          </div>

          <div className="mb-3">
            <label
              htmlFor="mobileno"
              className="mb-2 mx-2 form-label text-white"
            >
              Mobile Number
            </label>

            <input
              type="tel"
              placeholder="Mobile number"
              {...register("mobileNumber", { required: true })}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="mb-2 mx-2 form-label text-white">
              Email
            </label>

            <input
              type="text"
              placeholder="Email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="bloodGroup"
              className="mb-2 mx-2 form-label text-white"
            >
              BloodGroup
            </label>
            <select
              {...register("bloodGroup", { required: true })}
              className="form-control"
            >
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>

          <div className="mb-3">
            <label
              htmlFor="hospitalName"
              className="mb-2 mx-2 form-label text-white"
            >
              HospitalName
            </label>

            <input
              type="text"
              placeholder="Hospital Name"
              {...register("hospitalName", { required: true, maxLength: 78 })}
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="address"
              className="mb-2 mx-2 form-label text-white"
            >
              HospitalAddress
            </label>

            <textarea
              rows="5"
              className="form-control mb-2"
              {...register("address")}
            >
              Address
            </textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="age" className="mb-2 mx-2 form-label text-white">
              Patient Room No
            </label>
            <input
              type="text"
              placeholder="Patient Room Number"
              {...register("patientRoomNo", {})}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="fundRequired"
              className="mb-2 mx-2 form-label text-white"
            >
              Fund Required
            </label>

            <input
              type="number"
              placeholder="Fund Required"
              {...register("fundRequired", { required: true, min: 5000 })}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="fundingDeadLine"
              className="mb-2 mx-2 form-label text-white"
            >
              Funding Deadline
            </label>

            <input
              type="date"
              placeholder="Deadline"
              {...register("fundingDeadline", { required: true })}
              className="form-control"
            />
          </div>

          <button
            type="campaignEnrollmentButton submit"
            className="btn btn-success mt-3"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
