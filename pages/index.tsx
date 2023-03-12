import type { NextPage } from 'next'
import Header from "../Components/Layout/Header"
import Hero from "../Components/Elements/Hero"
import Revolutionary from "../Components/Elements/Revolutionary"
import Categories from "../Components/Elements/Categories"
import Platform from "../Components/Elements/Platform"
import Personalised from "../Components/Elements/Personalised"
import Global from "../Components/Elements/Global"
import Partners from "../Components/Elements/Partners"
import Footer from "../Components/Elements/Footer"
import Footer2 from "../Components/Elements/Footer2"


const Home: NextPage = () => {
  return (
    <div className='mb-96'>
    <div className='shad ps-3'>
    <Header/>
    <Hero  />
    </div>
    <Revolutionary/>
    <Categories/>
    <Platform/>
    <Personalised/>
    <Global/>
    <Partners/>
    <Footer/>
    <Footer2/>

    </div>
    
    )
}

export default Home
