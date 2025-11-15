import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


import car2 from "../../assets/car2.png";
import car3 from "../../assets/car3.png";
import car4 from "../../assets/car4.png";
import car5 from "../../assets/car5.png";

export default function All_Cars() {
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 30;

  const carImages = [car2, car3, car4, car5];
  const carratting = [4.5, 4.0, 5.0, 3.5];
  const carReviews = ["120 reviews", "98 reviews", "150 reviews", "75 reviews"];

  useEffect(() => {
    const getCars = async () => {
      try {
        const response = await axios.get("https://myfakeapi.com/api/cars/");
        setCars(response.data.cars);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };
    getCars();
  }, []);

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

  const totalPages = Math.ceil(cars.length / carsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const nextPage = () =>
    currentPage < totalPages && setCurrentPage(currentPage + 1);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">All Cars</h2>

      <div className="row d-flex justify-content-center">
        {currentCars.length > 0 ? (
          currentCars.map((car, index) => (
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

                {/* Rating */}
                <li className="list-group-item d-flex align-items-center justify-content-center">
                  <i className="fa-solid fa-star text-warning me-2"></i>
                  {carratting[index % carratting.length]} (
                  {carReviews[index % carReviews.length]})
                </li>

                {/* 2×2 Grid Icons */}
                <li className="list-group-item">
                  <div className="grid grid-cols-2 gap-3 text-gray-600 text-sm border-b border-gray-200 pb-3 mb-4">

                    {/* Users */}
                    <div className="flex items-center">
                      <i className="fa-regular fa-user"></i>
                      4 Passenger
                    </div>

                    {/* Calendar */}
                    <div className="flex items-center">
                        <i className="fa-solid fa-calendar-days"></i>

                      {car.car_model_year}
                    </div>

                    {/* Gauge */}
                    <div className="flex items-center">
                      <i className="fa-solid fa-gauge"></i>
                      Automatic
                    </div>

                    {/* Empty to keep a clean grid */}
                    <div></div>
                  </div>
                </li>

                <li className="list-group-item d-flex justify-content-between">
                  <span>Price</span>
                  <span>{car.price || "N/A"} / day</span>
                </li>
              </ul>

              <div className="card-body">
                <Link
                  to={`/CarDetails/${car.id}`}
                  className="btn btn-primary w-100 d-flex justify-content-center align-items-center"
                >
                  View Details
                  <i className="fa-solid fa-arrow-right p-1"></i>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>Loading cars...</p>
        )}
      </div>

      {/* Pagination */}
      <nav className="d-flex justify-content-center mt-4">
        <ul className="pagination pagination-sm justify-content-center">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button className="page-link" onClick={prevPage}>
              Previous
            </button>
          </li>

          {Array.from({ length: totalPages }, (_, i) => (
            <li
              key={i + 1}
              className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
            >
              <button className="page-link" onClick={() => paginate(i + 1)}>
                {i + 1}
              </button>
            </li>
          ))}

          <li
            className={`page-item ${
              currentPage === totalPages || totalPages === 0 ? "disabled" : ""
            }`}
          >
            <button className="page-link" onClick={nextPage}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
