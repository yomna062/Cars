import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import girl from '../../assets/girl.png';
import boy from '../../assets/boy.png';

const reviews = [
  {
    id: 1,
    rating: 5,
    quote: "I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.",
    author: "Charlie Johnson",
    lastUpdated: "3 mins ago",
    personImage: girl
  },
  {
    id: 2,
    rating: 5,
    quote: "I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time..",
    author: "Ahmed Hassan",
    lastUpdated: "15 mins ago",
    personImage: boy
  },
  {
    id: 3,
    rating: 4,
    quote: "Booking was fast and the car was clean. Highly recommend their service for long trips.",
    author: "Sara Al-Ali",
    lastUpdated: "1 hour ago",
    personImage: girl
  }
];


// ===================== Review Card ===================== //
const ReviewCard = ({ review }) => {
  const renderStars = (rating) => {
    const full = Math.floor(rating);
    return (
      <div className="d-flex my-2">
        {[...Array(full)].map((_, i) => (
          <i key={i} className="fas fa-star text-warning fs-5"></i>
        ))}
      </div>
    );
  };

  return (
    <div 
      className="card shadow-lg border-0 mx-auto"
      style={{ 
        maxWidth: "500px", 
        borderRadius: "15px",
        overflow: "hidden"
      }}
    >
      <div className="row g-0">

        {/* الصورة */}
        <div className="col-md-4 col-12">
          <img
            src={review.personImage}
            className="img-fluid w-100 h-100 object-fit-cover"
            alt={review.author}
            style={{
              minHeight: "220px",
            }}
          />
        </div>

        {/* النص */}
        <div className="col-md-8 col-12 d-flex align-items-center">
          <div className="card-body px-4">
            <h5 className="card-title fw-bold fs-3">
              {review.rating} <span className="text-muted fs-6">stars</span>
            </h5>

            {renderStars(review.rating)}

            <p className="card-text fs-5 fst-italic">"{review.quote}"</p>

            <p className="card-text mt-3">
              <strong className="d-block">{review.author}</strong>
              <small className="text-muted">Last updated {review.lastUpdated}</small>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};


// ===================== Main Component ===================== //
export default function Testimonials() {
  return (
    <>
      <div className="container py-5">

        {/* العنوان */}
        <div className="text-center mb-5">
          <div
            className="btn btn-outline-primary fs-3 mb-3"
            style={{
              border: "2px solid #4682B4",
              borderRadius: "8px",
              padding: "8px 25px",
              color: "#4682B4",
              fontWeight: "600",
            }}
          >
            Testimonials
          </div>

          <h3 className="fw-bold fs-1 mt-4">What people say about us?</h3>
        </div>

        {/* السلايدر */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={40}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 300,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
          style={{ paddingBottom: "70px" }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </>
  );
}
