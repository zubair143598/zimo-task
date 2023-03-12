import Image from "next/image";
import React from "react";
import {TbArrowNarrowRight} from 'react-icons/tb'

const Personalised = () => {
  return (
    <div className="container-fluid personalised">
      <div className="row pb-72">
        <div className="col-lg-4">
          <Image
            src="/zimo-logo-white.png"
            className="mt-96"
            width="330"
            height="100"
          />
        </div>
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <p className="tracking-widest mt-16 text-white fs-3">
            PERSONALISED FOR YOU
          </p>
          <p className="tracking-widest mt-16 text-muted fs-5">
            DELIVERING THOUSANDS OF PERSONALISED ALERTS EVERYDAY, OUR USERS CAN
            BE FIRST IN LINE WHEN THAT OPPORTUNITY OF A LIFETIME IS HERE.
          </p>
          <p className="mt-52 tracking-widest text-white float-right me-5 d-flex" >CREATE USER ID <span><TbArrowNarrowRight className="" size={30} /></span> </p>
        </div>
      </div>
    </div>
  );
};

export default Personalised;
