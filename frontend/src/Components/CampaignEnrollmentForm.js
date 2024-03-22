import React from 'react';
import './CampaignEnrollmentForm.js'
import { useForm } from 'react-hook-form';


export default function CampaignEnrollmentForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  function handleFormSubmit(data)
  {
      console.log(data)
  }
  console.log("Errors",errors);
  return (
    <div>
          <h1 className='display-1 text-center text-info'>Campaign Enrollment</h1>
          <div className='form m-5 w-50 mx-auto p-4'>
        <form className='w-50 mx-auto mt-5' onSubmit={handleSubmit(handleFormSubmit)}>
        <div className='row mb-3'>
            <div className='col-xs-1 col-6 mb-3'>
            <label htmlFor="firstname" className='mb-1 mx-2 form-label'>Firstname</label>
            <input type='text' name="firstname" className='form-control mb-3' placeholder='First name'
            {...register('firstname',{required:true,minLength:4,maxLength:6})}/>
            
            {errors.firstname?.type==='required' && <p  className='text-danger-lead fs-5'>Firstname is required</p>}
            {errors.firstname?.type==='minLength' && <p  className='text-danger-lead fs-5'>minLength is 4</p>}
            {errors.firstname?.type==='maxLength' && <p  className='text-danger-lead fs-5'>maxLength is 6</p>}
            </div>
            <div className='col-xs-1 col-6 mb-3'>
            <label htmlFor="firstname" className='mb-1 mx-2 form-label'>Password</label>

            <input type='password' name="password" className='form-control mb-3' {...register('password')}/>
            </div>
            </div>
            <select id='' className='form-select' {...register('skills')}>
            
                <option value='css'>CSS</option>
                <option value='js'>JS</option>
                <option value='react'>React</option>

            </select>
            {/* male */}
            <div>
                <div className='form-check'>
                    <input type='radio' id='form-check-input' {...register('gender')}/>
                    <label htmlFor='m' className='form-check-label'>Male</label>
                </div>
                <div className='form-check'>
                    <input type='radio' id='form-check-input' {...register('gender')}/>
                    <label htmlFor='f' className='form-check-label'>Female</label>
                </div>
            </div>
            <textarea rows='5' className='form-control mb-5' {...register('address')}>Address</textarea>
            <input type="text" placeholder=" Title of Campaign" {...register(" Title of Campaign", {required: true})} />
      <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
      <input type="number" placeholder="Age" {...register("Age", {required: true, max: 3})} />

      <input {...register("Gender", { required: true })} type="radio" value="Male " />
      <input {...register("Gender", { required: true })} type="radio" value=" Female" />
      <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true})} />
      <select {...register("Blood Group", { required: true })}>
        <option value="O+">O+</option>
        <option value="O-">O-</option>
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B-">B-</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB-</option>
      </select>
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="text" placeholder="Hospital Name" {...register("Hospital Name", {required: true})} />
      <input type="text" placeholder="Hospital Name" {...register("Hospital Name", {required: true, maxLength: 78})} />
      <input type="text" placeholder="Location" {...register("Location", { maxLength: 100})} />
      <input type="text" placeholder="Patient Room Number" {...register("Patient Room Number", {})} />
      <input type="number" placeholder="Fund Required" {...register("Fund Required", {required: true})} />
      <input type="datetime" placeholder="Deadline for Collecting Funds" {...register("Deadline for Collecting Funds", {required: true})} />

      <input type="submit" />
            <button type='submit' className='btn btn-success'>Login</button>

        </form>
        </div>
    </div>
    
     

  );
}