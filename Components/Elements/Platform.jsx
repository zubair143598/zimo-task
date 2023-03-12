import Image from "next/image";
import React from "react";

const Platform = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 text-center mt-5">
          <p className="tracking-widest fs-2 fw-semibold">
            OUR PLATFORM FOR ALL PREMIUM LISTENING
          </p>
          <p className="tracking-widest mt-5 fs-2 fw-semibold">
            UNLIMITED POTENTIAL
          </p>
        </div>
      </div>
      <div className="row ms-4">
        <div className="col-lg-4 ">
        <Image src="/zimo-black.png" className="mt-52" width="460" height="50"  />
        <p className="tracking-widest mt-2 fs-2 fw-semibold">
            OUR SOURCE
          </p>
          <p className="tracking-widest  fs-1 fw-semibold" style={{marginTop:'-15px'}}>
          ENTRY TICKETS
          </p>
          <p className="tracking-widest text-muted" >FOR ALL PREMIUM LISTINGS</p>
        </div>
        <div className="col-lg-8">
        <Image src="/building2.jfif" className="rounded-4 ms-4 mt-3" width="870" height="150"  />
        <p className="tracking-widest text-center fs-4 mt-11 fw-semibold">LET YOUR DREAMS FIND YOU</p>
        </div>
      </div>
    </div>
  );
};

export default Platform;
