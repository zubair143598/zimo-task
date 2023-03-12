import React from "react";
import Image from "next/image";

const Revolutionary = () => {
  return (
    <div className="container-fluid ps-5">
      <div className="row">
        <div className="col-lg-12 text-center mt-5">
          <p className="fs-5 tracking-widest">
            A REAL ESTATE AND PROPERTY PLATFORM THAT IS CHANGING THE WORLD
          </p>
        </div>
        <div className="col-lg-6 mt-5 ">
          <h3 className="text-start tracking-widest mt-5">
            A REVOLUTIONARY PLATFORM
          </h3>
          <h1
            className="text-start fs-1 tracking-widest"
            style={{ letterSpacing: "8px" }}
          >
            ENTRIES - SELLERS
          </h1>
          <h1
            className="text-start tracking-widest"
            style={{ letterSpacing: "13px", fontSize: "60px" }}
          >
            WORLD WIDE
          </h1>
        </div>
        <div className="col-lg-2"></div>
        <div
          className="col-lg-4 text-center tracking-widest "
          style={{ marginTop: "14rem" }}
        >
          <Image
            src="/zimo-logo-2.png"
            className="pb-2  me-4 float-right"
            width="440"
            height="160"
          />

          <p className="" style={{ marginTop: "9rem" }}>
            CONNECTING USERS FROM ACROSS THE GLOBE TO FACILITATE LIFE'S MOST
            IMPORTANT PERSONAL TRANSACTIONS
          </p>
        </div>
        <div className="col-lg-6">
          <p className="fs-2 fw-medium tracking-widest">THE BEST OF THE BEST</p>
          <p className="tracking-widest ">
            A COMBINAT ION OF AU TOMAT ION AND MANUAL C U RAT ION OU R PRO AG
            ENT S AND MODERAT ION T EAM S E L ECT S THE HI GHE S T QUAL I TY L I
            S T ING S ON THE MARKE T FROM ACROS S THE WORLD.
          </p>
          <Image src="/down-arrow.png" className="pb-2 float-right mt-4" width="60" height="40"  />
        </div>
      </div>
    </div>
  );
};

export default Revolutionary;
