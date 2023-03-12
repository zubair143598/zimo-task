import React from 'react'
import {BiArrowBack} from "react-icons/bi"
import {AiOutlineDown} from "react-icons/ai"



const Hero = () => {
  return (
    <div className="container-fluid text-white">
        <div className="row">
            <div className="col-lg-12">
                <p className='d-flex ms-3 mt-3 fs-5 tracking-widest'>
                <span className='mt-1 me-2'><BiArrowBack/></span>   BACK
                </p>
            </div>
            <div className="col-lg-12" style={{marginTop: "11rem",marginBottom: "11rem"}}>
                <p className='fs-2 tracking-widest'>DISCOVER</p>
                <p className=' tracking-widest' style={{fontSize:"3rem", marginTop:"-30px"}} >A NEW WORLD</p>
                <p className='text-muted tracking-widest'>FOR THOS E WHO WI SH FOR MORE . . .</p>

            </div>
            <div className="col-lg-12  text-center   fs-5">
                <p className='text-muted ' >BRING ING THE WORLD CLOS ER TOG E THER
                
                </p>
                <p className='down'><AiOutlineDown  size={100}/></p>
            </div>
        </div>
    </div>
  )
}

export default Hero