import React from 'react'
import './Login.css'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useForm } from 'react-hook-form'
function Login() {

  let {register,handleSubmit,formState:{errors}} = useForm()
  let [err,setErr] = useState('')
  let navigate = useNavigate()

  function handleFormSubmit(userObj){
    console.log(userObj)
  }



  return (
    <div className='register-form mt-5'>
      <div className='register-form-container mx-auto p-4 '>
        <h1 className="register-form-title text-center text-white mt-3">Login</h1>

        <form onSubmit={handleSubmit(handleFormSubmit)}>
            {/*Username*/}
            <div className="mb-4">
              <label className="form-label text-white">Username</label>
              <input className="register-form-input form-control" type="text" placeholder="Enter your username..." {...register("username",{required:true,minLength:5})} />
              {errors.username?.type==='required'&&<p className="form-text text-danger">Username is required </p>}
              {errors.username?.type==='minLength'&&<p className="form-text text-danger">Username should have minimum 5 characters</p>}
            </div>

          {/*Password*/}
          <div className="mb-4">
            <label className="form-label text-white">Password</label>
            <input className="register-form-input form-control" type="password" placeholder="Enter your password..." {...register("password",{required:true,minLength:4})} />
            {errors.password?.type==='required'&&<p className="form-text text-danger">password is required </p>}
            {errors.password?.type==='minLength'&&<p className="form-text text-danger">password should have minimum 4 characters</p>}
          </div>

          <button type="submit " className="registerButton btn btn-dark text-white">Register</button>

        </form>
       

      </div>
    </div>
  )
}

export default Login