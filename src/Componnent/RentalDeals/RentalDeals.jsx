import React from 'react';
import RentCar from '../../assets/RentCar.png'

const RentalItem = ({ icon, heading, description }) => {
  return (
    <div className="d-flex align-items-center mb-5">
   
      <div 
        className="ms-3 me-4 d-flex align-items-center justify-content-center text-light"
        style={{ 
          width: "60px", 
          height: "60px", 
          borderRadius: "12px",
          backgroundColor: "#71a3f3ff", 

        }}
      >
       
        {icon} 
      </div>

      {/* Text Content */}
      <div className="text-start"> 
        <h3 className="fw-bold mb-1 fs-3">{heading}</h3>
        <p className="text-muted mb-0 fs-4">{description}</p>
      </div>
    </div>
  );
};

export default function RentalDeals() {
  return (
    <div className="container-fluid my-5 px-0">
      <div className="row mx-0 align-items-center">

     
        <div className="col-md-6 p-0">
          <div style={{
            position: "relative",
            height: "500px",
          }}>
            
            <div style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                backgroundColor: "#f4f7f9", 
                clipPath: "polygon(0 0, 100% 0, 80% 100%, 0 100%)", 
            }}></div>
            
            
            <img 
              src={RentCar} 
              alt="Rent Car" 
              style={{
                width: "90%", 
                height: "auto", 
                objectFit: "cover", 
                position: "absolute",
                bottom: "0", 
                right: "0",
                maxWidth: "600px" // To keep it from being too large on huge screens
              }}
            />
          </div>
        </div>

        {/* Text and Features Section on the right */}
        <div className="col-md-6 py-5">
          <div className="ms-5 me-5">

            <div 
              className="btn btn-outline-primary fw-bold mb-3" 
              style={{ 
                border: "2px solid", 
                borderRadius: "5px",
                padding: "8px 20px",
                color: "#71a3f3ff" 
              }}>
              WHY CHOOSE US
            </div>
            
            <h2 className="my-3 fs-1 fw-bolder">
              We Offer The Best Experience With Our Rental Deals
            </h2>
          </div>
          
          {/* Icons and Text Features */}
          <div className="d-flex flex-column justify-content-center align-items-start ms-5 me-5 pt-4">
            
            <RentalItem 
              icon={<i className="fa-solid fa-user fa-xl"></i>}
              heading="Best price guaranteed"
              description="Find a lower price? We'll refund you 100% of the difference."
            />

            <RentalItem 
              icon={<i className="fa-solid fa-user fa-xl"></i>} 
              heading="24 hour car delivery"
              description="Book your car anytime and we will deliver it directly to you."
            />

            <RentalItem 
              icon={<i className="fa-solid fa-user fa-xl"></i>} 
              heading="Best price guaranteed"
              description="Find a lower price? We'll refund you 100% of the difference."
            />

          </div>
        </div>
      </div>
    </div>
  );
}