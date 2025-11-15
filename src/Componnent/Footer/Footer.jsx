import React from 'react';

export default function Footer() {
  return (
    <>
      {/* Main footer section */}

      <footer className="bg-dark text-light pt-5 pb-0"> 
        <div className="container">
          <div className="row">
            
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="d-flex align-items-center mb-3">
                
                <h4 className="text-primary fw-bold mb-0">RENTCARS</h4>
              </div>
              
              <ul className="list-unstyled">
            
                <li className="mb-2 d-flex align-items-start">
                  <i className="fa-solid fa-location-dot me-3 mt-1 text-primary"></i> 
                  <span>25566 Hc 1, Glenallen, Alaska, 99588, USA</span>
                </li>
              
                <li className="mb-2 d-flex align-items-start">
                  <i className="fa-solid fa-phone me-3 mt-1 text-primary"></i>
                  <span>+603 4784 273 12</span>
                </li>

                <li className="mb-2 d-flex align-items-start">
                  <i className="fa-solid fa-envelope me-3 mt-1 text-primary"></i>
                  <span>rentcars@gmail.com</span>
                </li>
              </ul>
            </div>
    
            <div className="col-lg-2 col-md-6 mb-4">
              <h5 className="mb-3 text-white">Our Products</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-light text-decoration-none hover-link">Carriers</a></li>
                <li className="mb-2"><a href="#" className="text-light text-decoration-none hover-link">Cars</a></li>
                <li className="mb-2"><a href="#" className="text-light text-decoration-none hover-link">Packages</a></li>
                <li className="mb-2"><a href="#" className="text-light text-decoration-none hover-link">Features</a></li>
                <li className="mb-2"><a href="#" className="text-light text-decoration-none hover-link">Priceline</a></li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 mb-4">
              <h5 className="mb-3 text-white">About Rent Cars</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-light text-decoration-none hover-link">Why Choose Us</a></li>
                <li className="mb-2"><a href="#" className="text-light text-decoration-none hover-link">Our Story</a></li>
                <li className="mb-2"><a href="#" className="text-light text-decoration-none hover-link">Investor Relations</a></li>
                <li className="mb-2"><a href="#" className="text-light text-decoration-none hover-link">Press Center</a></li>
                <li className="mb-2"><a href="#" className="text-light text-decoration-none hover-link">Advertise</a></li>
              </ul>
            </div>

          
            <div className="col-lg-2 col-md-6 mb-4">
              <h5 className="mb-3 text-white">Resources</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-light text-decoration-none hover-link">Download</a></li>
                <li className="mb-2"><a href="#" className="text-light text-decoration-none hover-link">Help Center</a></li>
                <li className="mb-2"><a href="#" className="text-light text-decoration-none hover-link">Guides</a></li>
                <li className="mb-2"><a href="#" className="text-light text-decoration-none hover-link">Partner Network</a></li>
                <li className="mb-2"><a href="#" className="text-light text-decoration-none hover-link">Cruises</a></li>
                <li className="mb-2"><a href="#" className="text-light text-decoration-none hover-link">Developer</a></li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 mb-4">
              <h5 className="mb-3 text-white">Follow Us</h5>
              <div className="d-flex">

                <a href="#" className="text-light me-3 fs-5 border border-primary p-2 rounded-circle d-flex align-items-center justify-content-center bg-primary" style={{ width: '40px', height: '40px' }}>
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                
                <a href="#" className="text-light me-3 fs-5 border border-primary p-2 rounded-circle d-flex align-items-center justify-content-center bg-primary" style={{ width: '40px', height: '40px' }}>
                  <i className="fa-brands fa-instagram"></i>
                </a>
                
                <a href="#" className="text-light fs-5 border border-primary p-2 rounded-circle d-flex align-items-center justify-content-center bg-primary" style={{ width: '40px', height: '40px' }}>
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

      
        <div className="container-fluid bg-dark border-top border-secondary mt-4 py-3">
          <div className="container text-center text-md-start">
            <small className="text-white-50">Copyright {new Date().getFullYear()} &bull; Rentcars. All Rights Reserved</small>
          </div>
        </div>

      </footer>
     
    </>
  );
}