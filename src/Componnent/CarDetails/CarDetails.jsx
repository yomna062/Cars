import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import car2 from "../../assets/car2.png";
import car3 from "../../assets/car3.png";
import car4 from "../../assets/car4.png";
import car5 from "../../assets/car5.png";

export default function CarDetails() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const carImages = [car2, car3, car4, car5];

  useEffect(() => {
    const getCar = async () => {
      try {
        const response = await axios.get("https://myfakeapi.com/api/cars/");
        const foundCar = response.data.cars.find(c => c.id === parseInt(id));
        setCar(foundCar);
      } catch (error) {
        console.error(error);
      }
    };
    getCar();
  }, [id]);

  if (!car) return <p>Loading...</p>;

  return (

    <div className="container my-5">
      
      <div className="row">
        {/* الصورة */}
        <div className="col-md-6 mb-3">
          <img
            src={carImages[(car.id - 1) % carImages.length]}
            className="img-fluid rounded"
            alt={car.car_model}
          />
        </div>

        {/* التفاصيل */}
        <div className="col-md-6">
              <a
          href="#"
          className="btn btn-primary btn-lg disabled fs-6 "
          role="button"
          aria-disabled="true"
          
        >
          Why choose us
        </a>
            <h3 className=" fs-1 fw-bold mt-3">We offer the best experience with our rental deals</h3>
          <h2 className="text-primary my-5">{car.car} {car.car_model}</h2>
          <p><strong>Color:</strong> {car.car_color}</p>
          <p><strong>Year:</strong> {car.car_model_year}</p>
          <p><strong>VIN:</strong> {car.car_vin}</p>
          <p><strong>Price:</strong> {car.price} / day</p>
          <p><strong>Availability:</strong> {car.availability ? "Available" : "Not Available"}</p>
          <button className="btn btn-primary mt-3">
            Rent Now <i className="fa-solid fa-arrow-right p-1"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
