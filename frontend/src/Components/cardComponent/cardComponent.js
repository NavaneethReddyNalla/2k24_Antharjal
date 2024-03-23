import React from 'react';

function CardComponent(props) {
  return (
    <div className="card text-white bg-dark mb-3" style={{ maxWidth: '18rem' }}>
      <div className="card-header">{props.campaignTitle}</div>
      <div className="card-body">
       {/* <h5 className="card-title">Special title treatment</h5> */}
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Name: {String(props.firstName)+" " +String(props.lastName)}</li>
          <li className="list-group-item">Phone number:{props.mobileNumber}</li>
          <li className="list-group-item">Blood Group:{props.bloodGroup}</li>
          <li className="list-group-item">Email: {props.email}</li>
          <li className="list-group-item">Address: {props.address}</li>
          
        </ul>
        <button className='btn btn-success mt-2'>Donate</button>
      </div>
    </div>
  );
}

export default CardComponent;