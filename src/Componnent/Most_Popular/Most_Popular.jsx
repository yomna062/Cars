// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import car2 from "../../assets/car2.png";
// import car3 from "../../assets/car3.png";
// import car4 from "../../assets/car4.png";
// import car5 from "../../assets/car5.png";
// import { Link } from 'react-router-dom';

// export default function Most_Popular() {
//   const [cars, setCars] = useState([]);

//   // array للصور حسب ترتيب الكروت
//   const carImages = [car2, car3, car4, car5];
//   const carratting = [4.5, 4.0, 5.0, 3.5];
//   const carReviews=['120 reviews', '98 reviews', '150 reviews', '75 reviews'];
  

//   useEffect(() => {
//     const getCars = async () => {
//       try {
//         const response = await axios.get("https://myfakeapi.com/api/cars/");
//         setCars(response.data.cars.slice(0, 4)); // أول 4 عربيات
//         console.log(response.data.cars.slice(0, 4));
//       } catch (error) {
//         console.error("Error fetching cars:", error);
//       }
//     };
//     getCars();
//   }, []);

//   return (
//     <>
//       <link
//         href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"
//         rel="stylesheet"
//       />

//       <div className="container my-4">
//         <div className="row">
//           <div className="col-md-12">
//             <form className="d-flex">
//               <div className="input-group">
//                 <span className="input-group-text bg-primary text-light d-flex ">
//                   <i className="bi bi-geo-alt-fill fs-4"></i>
//                 </span>
//                 <input
//                   className="form-control form-control-lg"
//                   type="search"
//                   placeholder="Search"
//                   aria-label="Search"
//                 />
//                 <button className="btn btn-primary px-4" type="submit">
//                   <i className="bi bi-search fs-5"></i>
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>

//       <div className="d-flex justify-content-center my-3 ">
//         <a
//           href="#"
//           className="btn btn-primary btn-lg disabled fs-3"
//           role="button"
//           aria-disabled="true"
          
//         >
//           popular rental deals
//         </a>
//       </div>

//       <h2 className="text-center mb-4 fs-1">Most Popular Cars Rental Deals</h2>

//       {/* --------- Cards section --------- */}
//       {/* <div className="container">
//         <div className="row">
//           {cars.map((car, index) => (
//             <div key={car.id} className="col-md-3 mb-4">
//               <div className="card h-100 cursor-pointer">
//                 <img
//                   src={carImages[index]} // صورة مختلفة لكل كرت
//                   className="card-img-top"
//                   alt={`${car.car} ${car.car_model}`}
//                   style={{ height: "180px", objectFit: "cover" }}
//                 />
//                 <div className="card-body text-center">
//                   <h5 className="card-title">{car.car} {car.car_model}</h5>
//                   <p className="card-text">{car.price}</p>
//                   <a href="#" className="stretched-link"></a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div> */}

// <div className="container d-flex justify-content-center">
//   <div className="row">
//     {cars.map((car, index) => (
//       <div key={car.id} className="card m-2" style={{ width: "18rem" }}>
//         <img
//           src={carImages[index]}
//           className="card-img-top"
//           alt={car.car_model}
//         />
//         <div className="card-body">
//           <h5 className="card-title">{car.car}{car.car_model}</h5>
//         </div>
//         <ul className="list-group list-group-flush">
//           <li className="list-group-item d-flex align-items-center">
//             <i className="fa-solid fa-star text-warning me-2"></i>
//             {carratting[index]} ({carReviews[index]})
//           </li>
//           <li className="list-group-item d-flex justify-content-between">
//             <span>Price</span>
//             <span>{car.price} / day</span>
//           </li>
//         </ul>
//         <div className="card-body">
//           <button className="btn btn-primary w-100">Rent Now 
//             <i className="fa-solid fa-arrow-right p-1" />

//           </button>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>
// <button className="btn btn-primary d-block mx-auto my-4">
//   <Link to="/All_Cars" className="text-light text-decoration-none">
//   View All Cars
// </Link>

// </button>


//     </>
//   );
// }
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Users } from "lucide-react";

import car2 from "../../assets/car2.png";
import car3 from "../../assets/car3.png";
import car4 from "../../assets/car4.png";
import car5 from "../../assets/car5.png";

export default function Most_Popular() {
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("");

  const carImages = [car2, car3, car4, car5];
  const carratting = [4.5, 4.0, 5.0, 3.5];
  const carReviews = ["120 reviews", "98 reviews", "150 reviews", "75 reviews"];

  useEffect(() => {
    const getCars = async () => {
      try {
        const response = await axios.get("https://myfakeapi.com/api/cars/");
        setCars(response.data.cars);
      } catch (error) {
        console.error(error);
      }
    };
    getCars();
  }, []);

  const filteredCars = cars
    .filter((car) =>
      `${car.car} ${car.car_model}`.toLowerCase().includes(search.toLowerCase())
    )
    .slice(0, 4); 

  return (
    <div className="container my-5 py-5">
      {/* Search Bar */}
      <div className="row mb-4">
        <div className="col-md-12">
          
          <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <input
                className="form-control form-control-lg"
                type="search"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)} 
              />
              
              <button className="btn btn-primary px-4" type="submit">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="text-center">
              <div
            className="btn btn-outline-primary fs-3 mb-3"
            style={{
              border: "2px solid #71a3f3ff",
              borderRadius: "8px",
              padding: "8px 25px",
              color: "#71a3f3ff",
              fontWeight: "600",
            }}
          >
            popular rental deals
          </div>
          </div>
      <h2 className="text-center mb-4 fs-1">Most Popular Cars Rental Deals</h2>

      <div className="row d-flex justify-content-center">
        {filteredCars.length > 0 ? (
          filteredCars.map((car, index) => (
            <div key={car.id} className="card m-2" style={{ width: "18rem" }}>
              <img
                src={carImages[index % carImages.length]}
                className="card-img-top"
                alt={car.car_model}
              />

              <div className="card-body text-center">
                <h5 className="card-title">
                  {car.car} {car.car_model}
                </h5>
              </div>

              <ul className="list-group">
                <li className="list-group-item d-flex align-items-center justify-content-center">
                  <i className="fa-solid fa-star text-warning me-2"></i>
                  {carratting[index % carratting.length]} (
                  {carReviews[index % carReviews.length]})
                </li>

                <li className="list-group-item">
                  <div className="grid grid-cols-2 gap-3 text-gray-600 text-sm border-b pb-3 mb-3">
                    <div className="flex items-center">
                      <i className="fa-regular fa-user"></i>
                      4 Passenger
                    </div>

                    <div className="flex items-center">
                      <i className="fa-solid fa-calendar-days"></i>
                      {car.car_model_year}
                    </div>

                    <div className="flex items-center">
                      <i className="fa-solid fa-gauge"></i>
                      Automatic
                    </div>

                    <div></div>
                  </div>
                </li>

                <li className="list-group-item d-flex justify-content-between">
                  <span>Price</span>
                  <span>{car.price} / day</span>
                </li>
              </ul>

              <div className="card-body">
                <Link
                  to={`/CarDetails/${car.id}`}
                  className="btn w-100 d-flex justify-content-center align-items-center text-light"
                  style={{background:'#71a3f3ff'}}
                >
                  View Details
                  <i className="fa-solid fa-arrow-right p-1"></i>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No cars found.</p>
        )}
      </div>

      <div className="text-center my-4">
        <Link to="/All_Cars" className="btn btn-outline-secondary btn-lg">
          View All Cars
          <i className="fa-solid fa-arrow-right p-1"></i>
        </Link>
      </div>
    </div>
  );
}
