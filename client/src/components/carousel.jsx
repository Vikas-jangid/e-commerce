import React from "react";
import 'tw-elements';
import slider1 from "../assests/images/slider1.webp";
import slider2 from "../assests/images/slider2.webp";
import slider3 from "../assests/images/slider3.webp";

function Carousel() {
    return(
      <div
      id="carouselDarkVariant"
      className="carousel slide carousel-fade carousel-dark relative"
      data-bs-ride="carousel"
    >
      {/* <!-- Indicators --> */}
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
          data-bs-target="#carouselDarkVariant"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          data-bs-target="#carouselDarkVariant"
          data-bs-slide-to="1"
          aria-label="Slide 1"
        ></button>
        <button
          data-bs-target="#carouselDarkVariant"
          data-bs-slide-to="2"
          aria-label="Slide 1"
        ></button>
      </div>
    
      {/* <!-- Inner --> */}
      <div className="carousel-inner relative w-full overflow-hidden">
        {/* <!-- Single item --> */}
        <div className="carousel-item active relative float-left w-full">
          <img
            src={slider1}
            className="block w-full max-h-96"
            alt="Motorbike Smoke"
          />
          <div className="carousel-caption hidden md:block absolute text-center">
            <h5 className="text-xl">First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
    
        {/* <!-- Single item --> */}
        <div className="carousel-item relative float-left w-full">
          <img
            src={slider2}
            className="block w-full max-h-96"
            alt="Mountaintop"
          />
          <div className="carousel-caption  hidden md:block absolute text-center">
            <h5 className="text-xl text-white">Second slide label</h5>
            <p className="text-white">Some representative placeholder content for the second slide.</p>
          </div>
        </div>
    
        {/* <!-- Single item --> */}
        <div className="carousel-item relative float-left w-full">
          <img
            src={slider3}
            className="block w-full max-h-96"
            alt="Woman Reading a Book"
          />
          <div className="carousel-caption hidden md:block absolute text-center">
            <h5 className="text-xl text-white">Third slide label</h5>
            <p className="text-white">Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      {/* <!-- Inner --> */}
    
      {/* <!-- Controls --> */}
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselDarkVariant"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselDarkVariant"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    )   
}

export default Carousel;