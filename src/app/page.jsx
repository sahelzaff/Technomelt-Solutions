import About_Company_Homepage from '@/Components/About_Company_Homepage'
import ContactHome from '@/Components/ContactHome'
import Footer from '@/Components/Footer'
import Hero_Homepage from '@/Components/Hero_Homepage'
import Navbar from '@/Components/Navbar'
import Products from '@/Components/Products'
import Services from '@/Components/Services'
import Testimonial from '@/Components/Testimonial'
import Topbar from '@/Components/Topbar'
import React from 'react'


const page = () => {
  return (
    <>
    <Topbar/>
    <Navbar/>
    <Hero_Homepage/>
    <About_Company_Homepage/>
    <Products/>
    <Services/>
    <Testimonial/>
    <ContactHome/>
    <Footer/>

    </>
  )
}

export default page