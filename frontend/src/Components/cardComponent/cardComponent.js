import React from 'react';

function CardComponent() {
  return (
    <div className="card text-white bg-dark mb-3" style={{ maxWidth: '18rem' }}>
      <div className="card-header">Card Title</div>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Name: John Doe</li>
          <li className="list-group-item">Phone Number: 123-456-7890</li>
          <li className="list-group-item">Email: john.doe@example.com</li>
          <li className="list-group-item">Address: 1234 Main St. Anytown, USA</li>
        </ul>
      </div>
    </div>
  );
}

export default CardComponent;