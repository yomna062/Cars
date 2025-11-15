import React from 'react'
import google1 from '../../assets/google1.png'
import google2 from '../../assets/google2.png'
import phone from '../../assets/phone-img.png'
export default function Contact() {
  return (
    <>
    <div className="container my-5">
      <div className="row">
        {/* ============== */}
        <div className="col-md-6">
          <p className='fs-1 fw-bold'>Download Rentcars App for <span className='text-primary'>FREE</span></p>
          <p>For faster, easier booking and exclusive deals.</p>
          {/* google-imgs */}
          <div className="d-flex align-items-center gap-3 mt-4">
            <img src={google1} alt="google play" />
            <img src={google2} alt="app store"/>
          </div>
          {/* form */}

<form>

  <div className="form-group ">
    
    <input 
      type="password" 
      className="form-control  py-3 rounded-5 my-4"
      id="password1" 
      placeholder="Password"
      style={{ backgroundColor: '#d4e4fdff' }}
    />
  </div>

  <div className="form-group">
    
    <input 
      type="password" 
      className="form-control  py-3 rounded-5 my-4"
      id="password2" 
      placeholder="Confirm Password"
      style={{ backgroundColor: '#d4e4fdff' }}
    />
  </div>

  <div className="form-group">
   
    <input 
      type="email" 
      className="form-control py-3 rounded-5 my-4"
      id="email1" 
      placeholder="Enter email" 
      style={{ backgroundColor: '#d4e4fdff' }}
    />
  </div>

  <div className="text-center">
            <button type="submit" className="btn btn-primary mt-3 py-2 px-4 ">Submit</button>
  </div>
  </form>
        </div>

        {/* ============img=========== */}
          <div className="col-md-6">
            <div className="text-center">
            <img src={phone} alt='phone ' style={{width:'450px'}}/>
            </div>

          </div>
      </div>
    </div>    
    </>
  )
}
