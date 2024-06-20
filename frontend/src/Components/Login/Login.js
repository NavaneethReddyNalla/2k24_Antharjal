import React, { useEffect } from "react";
import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { userLoginThunk } from "../../store/slices/userLogin";
import { useSelector, useDispatch } from "react-redux";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const { errorOccured, errorMessage, currentUser, loginStatus } = useSelector(
    (state) => state.userLogin
  );
  const dispatch = useDispatch();

  function handleFormSubmit(userObj) {
    const action = userLoginThunk(userObj);
    dispatch(action);
  }

  useEffect(() => {
    if (loginStatus === true) {
      console.log("Logged in");
      if (currentUser.username === "root") {
        navigate("/admin-dashboard");
      } else {
        navigate("/create-campaign");
      }
    }
  }, [currentUser.username, loginStatus, navigate]);

  return (
    <div className="register-form mt-5">
      <div className="register-form-container mx-auto p-4 ">
        <h1 className="register-form-title text-center text-white mt-3">
          Login
        </h1>

        <form onSubmit={handleSubmit(handleFormSubmit)}>
          {/*Username*/}
          <div className="mb-4">
            <label className="form-label text-white">Username</label>
            <input
              className="register-form-input form-control"
              type="text"
              placeholder="Enter your username..."
              {...register("username", { required: true, minLength: 7 })}
            />
            {errors.username?.type === "required" && (
              <p className="form-text text-danger">Username is required </p>
            )}
            {errors.username?.type === "minLength" && (
              <p className="form-text text-danger">
                Username should have minimum 4 characters
              </p>
            )}
          </div>

          {/*Password*/}
          <div className="mb-4">
            <label className="form-label text-white">Password</label>
            <input
              className="register-form-input form-control"
              type="password"
              placeholder="Enter your password..."
              {...register("password", { required: true, minLength: 4 })}
            />
            {errors.password?.type === "required" && (
              <p className="form-text text-danger">password is required </p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="form-text text-danger">
                password should have minimum 4 characters
              </p>
            )}
          </div>

          <button
            type="submit "
            className="registerButton btn btn-dark text-white"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
