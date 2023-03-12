import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useState, useEffect } from 'react';
import {BiShoppingBag} from "react-icons/bi";
import {CgProfile} from "react-icons/cg"




const Header = () => {

    const [currentTime, setCurrentTime] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  const [currentDate, setCurrentDate] = useState( { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString([], { hour12: false, hour: 'numeric', minute: 'numeric', second: undefined }));
      setCurrentDate(new Date().toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <Navbar    expand="lg">
      <Container  fluid>
        <Navbar.Brand  href="#" className=" border-y-4 ms-4 " > <Image src="/logo2-white.png" width="60" height="50"  /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link href="#action1"><Image src="/zimo-white.png" className="pb-2" width="140" height="60"  /> </Link>
            <Nav.Link href="#action2" className="text-white mt-4 tracking-widest ms-3">ABOUT</Nav.Link>
            <Nav.Link href="#action2"  className="text-white mt-2 logo2 tracking-widest"><Image src="/logo2-white.png" width="160" height="90"  /></Nav.Link>
            
          </Nav>
          <div className="div d-flex">
          <Nav.Link href="#action2" className="text-white mt-4  ms-3"><p className="time">{currentTime} <span>LONDON UNITED KINGDOM</span></p>
          <p className="text-end time day">{`${currentDate} `}</p>
          
          </Nav.Link>
          <Nav.Link href="#action2" className="text-white  mt-4 tracking-widest ms-3">
          <Image src="/ukflage.webp" className="mt-2" width="30" height="30"  />
          
          </Nav.Link>
          <Nav.Link href="#action2" className="text-white mt-4 tracking-widest ms-3"><BiShoppingBag className="mt-1 mx-5"  size={27}/></Nav.Link>
          <Nav.Link href="#action2" className="text-white mt-4 tracking-widest ms-3"><CgProfile className="mt-1 me-5"  size={27}/></Nav.Link>
          

          
              </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
