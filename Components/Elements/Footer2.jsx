import Image from 'next/image'


const Footer2 = () => {
  return (
    <div className="container position-relative">
        <div className="row " >
            <div className="col-lg-3 ">
            <Image src="/jep.jfif" style={{top:"-190px"}} className=" jep  rounded-3 ms-5 position-absolute float-right" width="300" height="50"  />
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-8">
            <Image src="/zimo-logo-2.png" style={{top:"-60px"}} className=" jep  rounded-3 ms-5 position-absolute  float-right" width="500" height="50"  />
            </div>
        </div>
    </div>
  )
}

export default Footer2