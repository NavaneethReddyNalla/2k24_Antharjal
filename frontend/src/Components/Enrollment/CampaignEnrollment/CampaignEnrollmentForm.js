import React from "react";
import "./CampaignEnrollment.css";
import { useForm } from "react-hook-form";

export default function CampaignEnrollmentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function handleFormSubmit(data) {
    console.log(data);
  }

  return (
    <div>
      <h1 className="display-1 text-center">Campaign Enrollment</h1>
      <div className="form m-5 w-50 mx-auto p-4">
        <form
          className="w-50 mx-auto mt-5 text-start"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <div>
            <label htmlFor="age" className="mb-2 mx-2 form-label">
              Campaign Title
            </label>

            <input
              type="text"
              placeholder=" Title of Campaign"
              {...register("campaignTitle", { required: true })}
            />
          </div>
          <div className="row mb-2">
            <div className="col-xs-1 col-6 mb-2">
              <label htmlFor="firstname" className="mb-2 mx-2 form-label">
                Firstname
              </label>
              <input
                type="text"
                name="firstname"
                className="form-control mb-3"
                placeholder="First name"
                {...register("firstName", {
                  required: true,
                  minLength: 4,
                  maxLength: 6,
                })}
              />

              {errors.firstname?.type === "required" && (
                <p className="text-danger-lead fs-5">Firstname is required</p>
              )}
              {errors.firstname?.type === "minLength" && (
                <p className="text-danger-lead fs-5">minLength is 4</p>
              )}
              {errors.firstname?.type === "maxLength" && (
                <p className="text-danger-lead fs-5">maxLength is 6</p>
              )}
            </div>
            <div className="col-xs-1 col-6 mb-2">
              <label htmlFor="lastname" className="mb-2 mx-2 form-label">
                LastName
              </label>
              <input
                type="text"
                name="lastname"
                className="form-control mb-2"
                placeholder="Last name"
                {...register("lastName", {
                  required: true,
                  minLength: 4,
                  maxLength: 6,
                })}
              />

              {errors.lastname?.type === "required" && (
                <p className="text-danger-lead fs-5">lastname is required</p>
              )}
              {errors.lastname?.type === "minLength" && (
                <p className="text-danger-lead fs-5">minLength is 4</p>
              )}
              {errors.lastname?.type === "maxLength" && (
                <p className="text-danger-lead fs-5">maxLength is 6</p>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="age" className="mb-2 mx-2 form-label">
              Age
            </label>
            <input
              type="number"
              placeholder="Age"
              {...register("age", { required: true, max: 3 })}
            />
          </div>
          <div>
            <h6>Select Gender</h6>
            <div className="form-check col-xs-1 col-6">
              <input
                type="radio"
                id="form-check-input"
                {...register("gender")}
              />
              <label htmlFor="m" className="form-check-label">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                id="form-check-input"
                {...register("gender")}
              />
              <label htmlFor="f" className="form-check-label">
                Female
              </label>
            </div>
          </div>
          <div>
            <label htmlFor="mobileno" className="mb-2 mx-2 form-label">
              Mobile Number
            </label>

            <input
              type="tel"
              placeholder="Mobile number"
              {...register("mobileNumber", { required: true })}
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 mx-2 form-label">
              Email
            </label>

            <input
              type="text"
              placeholder="Email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
          </div>
          <div>
            <label htmlFor="bloodGroup" className="mb-2 mx-2 form-label">
              BloodGroup
            </label>
            <select {...register("bloodGroup", { required: true })}>
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
          <div>
            <label htmlFor="hospitalName" className="mb-2 mx-2 form-label">
              HospitalName
            </label>

            <input
              type="text"
              placeholder="Hospital Name"
              {...register("hospitalName", { required: true, maxLength: 78 })}
            />
          </div>
          <div>
            <label htmlFor="age" className="mb-2 mx-2 form-label">
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
          <div>
            <label htmlFor="age" className="mb-2 mx-2 form-label">
              Patient Room No
            </label>
            <input
              type="text"
              placeholder="Patient Room Number"
              {...register("patientRoomNo", {})}
            />
          </div>
          <div>
            <label htmlFor="age" className="mb-2 mx-2 form-label">
              Fund Required
            </label>

            <input
              type="number"
              placeholder="Fund Required"
              {...register("fundRequired", { required: true })}
            />
          </div>
          <div>
            <label htmlFor="age" className="mb-2 mx-2 form-label">
              Funding Deadline
            </label>

            <input
              type="datetime"
              placeholder="Deadline"
              {...register("fundingDeadline", { required: true })}
            />
          </div>

          <button type="submit" className="btn btn-success mt-3">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
