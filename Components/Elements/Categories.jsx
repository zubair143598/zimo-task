import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {BsChevronLeft} from "react-icons/bs"
import {BsChevronRight} from "react-icons/bs"


const Categories = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="container-fluid mb-4 mt-5">
        <div className="d-flex" style={{ marginTop: "7rem" }} >
      <p className="fs-2 " >
        OUR CATEGORIES
      </p>
      <p className="position-absolute d-flex right-5" style={{ right:"5px" }} >
        <span><BsChevronLeft size={50}  /></span>
        <span className="ms-3"><BsChevronRight  size={50} /></span>
      </p>
      
      </div>
      <Carousel
        swipeable={false}
        draggable={false}
        //   showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true }
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["desktop","tablet", "mobile"]}
        deviceType={"desktop"}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div>
          <div className="card border-0 position-relative p-0 m-0">
            <div className="card-body  m-0">
              <Image
                src="/building1.jfif"
                className="ms-2 rounded-3"
                width="320"
                height="350"
                style={{ height: "350px" }}
                alt=""
              />
              <p
                className=" ms-3 p-3 tracking-widest position-absolute fw-bold"
                style={{ top: "19rem", left: "116px", color: "white" }}
              >
                REAL ESTATE
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="card border-0 position-relative p-0 m-0">
            <div className="card-body  m-0">
              <Image
                src="/car.png"
                className="ms-2 rounded-3"
                width="320"
                height="350"
                style={{ height: "350px" }}
                alt=""
              />
              <p
                className=" ms-3 p-3 tracking-widest position-absolute fw-bold"
                style={{ top: "19rem", left: "116px", color: "white" }}
              >
                CARS
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="card border-0 position-relative p-0 m-0">
            <div className="card-body  m-0">
              <Image
                src="/lunch.png"
                className="ms-2 rounded-3"
                width="320"
                height="350"
                style={{ height: "350px" }}
                alt=""
              />
              <p
                className=" ms-3 p-3 tracking-widest position-absolute fw-bold"
                style={{ top: "19rem", left: "116px", color: "white" }}
              >
                YACHTS
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="card border-0 position-relative p-0 m-0">
            <div className="card-body  m-0">
              <Image
                src="/watch.png"
                className="ms-2 rounded-3"
                width="320"
                height="350"
                style={{ height: "350px" }}
                alt=""
              />
              <p
                className=" ms-3 p-3 tracking-widest position-absolute fw-bold"
                style={{ top: "19rem", left: "116px", color: "white" }}
              >
               WATCHES 
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="card border-0 position-relative p-0 m-0">
            <div className="card-body  m-0">
              <Image
                src="/beach.png"
                className="ms-2 rounded-3"
                width="320"
                height="350"
                style={{ height: "350px" }}
                alt=""
              />
              <p
                className=" ms-3 p-3 tracking-widest position-absolute fw-bold"
                style={{ top: "19rem", left: "116px", color: "white" }}
              >
                BEACH
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="card border-0 position-relative p-0 m-0">
            <div className="card-body  m-0">
              <Image
                src="/aeroplane1.jfif"
                className="ms-2 rounded-3"
                width="320"
                height="350"
                style={{ height: "350px" }}
                alt=""
              />
              <p
                className=" ms-3 p-3 tracking-widest position-absolute fw-bold"
                style={{ top: "19rem", left: "116px", color: "white" }}
              >
                AEROPLANE
              </p>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Categories;
