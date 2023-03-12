
import Image from "next/image";

const Partners = () => {
  return (
    <div className="container">
        <div className="row" style={{paddingTop: "18rem",
    paddingBottom: "18rem"}}>
            <div className="col-lg-3">
            <Image src="/zimo-black.png" className="mt-64 " width="270" height="50"  />
            <p className="tracking-widest mt-3 text-5xl text-muted" style={{fontSize:"60px"}} >PARTNERS</p>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-3">
            <Image src="/logoss.png" className="mt-64 mb-64 float-right" width="270" height="50"  />

            </div>
            <div className="col-lg-3"></div>
        </div>
    </div>
  )
}

export default Partners