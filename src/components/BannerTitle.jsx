import React from 'react'
import { NavLink } from 'react-router-dom'

function BannerTitle({title, menu, secondMenu}) {
  return (
    <section className="flex flex-col justify-center items-center py-[5rem] lg:py-[7%] bg-center bg-cover bg-no-repeat para-font-regular text-gray-100" 
      style={{ backgroundImage: "url('../images/bg-spicies.avif')" }}>
        <h1 className='text-3xl lg:text-[4rem] uppercase sous-title-font-bold text-center'> {title} </h1>
        <div className="flex gap-2 mt-5">
            <NavLink to="/" className='hover:text-green-500'>Home</NavLink>
            <i className="bi bi-arrow-right"></i>
            <b>{menu} </b>
            <i className="bi bi-arrow-right"></i>
            <b>{secondMenu} </b>

        </div>
    </section>
  )
}

export default BannerTitle