import React from 'react';

const StepItem = ({ iconClass, title, description }) => {
  return (
    <div className="col-md-4 col-sm-12 mb-5 text-center"> 
      <div
        className="d-flex align-items-center justify-content-center mx-auto rounded-4"
        style={{
          width: "80px",
          height: "80px",

          backgroundColor: '#71a3f3ff' , 
          color: "white",
          marginBottom: "15px",
        }}
      >
        {/* Font Awesome Icon */}
        <i className={`${iconClass} fa-2x`}></i>
      </div>
      <h5 className="fw-bold mt-3">{title}</h5>
      <p className="text-muted px-2">{description}</p>
    </div>
  );
};

export default function Steps() {
  
  const rentalSteps = [
    {
      iconClass: "fa-solid fa-location-dot",
      title: "Choose Location",
      description: "Select your desired pick-up and drop-off location and find your best car.",
    },
    {
      iconClass: "fa-solid fa-calendar-days",
      title: "Pick-up Date & Time",
      description: "Select your pick-up date and time to ensure your chosen car is available.",
    },
    {
      iconClass: "fa-solid fa-car",
      title: "Book Your Car",
      description: "Complete your booking online and we will deliver the vehicle directly to you.",
    },
  ];

  return (
    <div className="container my-5 py-5">
      {/* Section Header */}
      <div className="text-center">
        
        <div 
          className="btn btn-outline-secondary disabled fw-bold mb-3" 
          style={{ 
            color: "var(--bs-primary)", 
            borderColor: "var(--bs-primary)" 
          }}>
          HOW IT WORKS
        </div>
        
        {/* Main Heading */}
        <h2 className="py-3 fw-bolder fs-1">
          Rent with the following 3 easy steps
        </h2>
      </div>
      
  
      <div className="row mt-4 justify-content-center">
      
        {rentalSteps.map((step, index) => (
          <StepItem 
            key={index}
            iconClass={step.iconClass}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </div>
  );
}