import React, { useState } from 'react'
import {  NavLink } from "react-router-dom";

// import clsx from 'clsx';

const HeaderBar = (
     {sideBarAction, searchAction, showSideBar}
    ) => {
    return (
        <>
            {showSideBar ? <SideBar sideBarAction={sideBarAction} /> : null }
            <header className='flex flex-row justify-between items-center text-gray-50'>
                <div className='flex flex-row items-center gap-5 cursor-pointer'>
                    <span className="text-2xl" onClick={sideBarAction}>
                        <i className="bi bi-menu-app-fill"></i>
                    </span>

                    <div className="hidden lg:flex  items-center gap-2">
                        <span className="text-2xl text-green-800">
                            <i className="bi bi-telephone"></i>
                        </span>
                        <div className="flex flex-col ">
                            <b>24/7 Support center</b>
                            <a href="tel:+243817723066" className='font-semibold text-red-700 text-xl'>+243 817723066</a>
                        </div>
                    </div>
                </div>

                <div >
                    <img 
                        src='../images/logo.svg'
                        alt="Pizza de Kin Logo"
                        className="w-[150px] h-[30px]  "
                    />
                </div>

                {/* pour le header, nous devons ajouteer la partie droite, les interactions et autres */}
                <div className='flex flex-row items-center gap-5 cursor-pointer'>
                    <span className="hidden text-sm text-gray-50 lg:flex items-baseline hover:text-red-500" onClick={searchAction}>
                        <i className="bi bi-search text-xl"></i> 
                        Recherche
                    </span>

                    <NavLink to='/menu' className='hidden lg:flex gap-1 bg-red-500 rounded-lg px-4 py-3 text-gray-50 font-semibold  hover:bg-green-700 duration-700 '>
                        <i className="bi bi-cart4"></i> 
                        Commander
                    </NavLink>
                    <button className='bg-green-700 rounded-lg px-4 py-3 text-gray-50 font-semibold'>
                        <i className="bi bi-basket2"></i> 
                    </button>
                    <button className='hidden lg:flex text-xl text-gray-600 font-semibold'>
                        <i className="bi bi-ui-radios-grid"></i> 
                    </button>

                </div>
            </header>
        </>

    )
}

const BarSearch = ({searchAction}) => {
    return (
        <div className='flex px-2 py-1 bg-gray-50 m-0'>
            <input type="text" name="" placeholder="Tapez votre recherche..." 
                className='font-semibold bg-gray-50 w-full p-1 focus:text-gray-950 outline-none' 
            />
            <span className="cursor-pointer text-4xl font-bold bg-gray-50 text-gray-950 hover:text-red-500 hover:animate-pulse hover:delay-100 duration-700 " onClick={searchAction}>
                <i className="bi bi-x"></i>
            </span>
        </div>
    )
}

const SideBar = ({sideBarAction}) => {
    return (
        <div className=' transition duration-1000 ease-in-out bg-gray-50 w-[65%] lg:w-[25%] h-[50rem] absolute left-0 top-0 z-10 py-6 px-5 '>
            <div className='flex justify-end content-end'>
                <span className="text-4xl text-gray-950 hover:text-red-500 cursor-pointer" onClick={sideBarAction} >
                    <i className="bi bi-x"></i>
                </span>
            </div>
            <div className='flex justify-center'>
                <img 
                    src='../images/logo_black.svg'
                    alt="Pizza de Kin Logo"
                    className=" w-[180px] h-[50px]"
                />
            </div>

            <div className=" my-8">
                <div className="flex justify-start gap-5 text-gray-800">
                    <b className='border-b-2 border-red-500'>Menu principal</b>
                    {/* <b>Category</b> */}

                </div>

                <div className="flex flex-col gap-2 font-bold my-8 text-[0.8rem] ">
                    <a to="./" className='hover:text-gray-600 hover:delay-700 text-red-500 uppercase flex flex-row justify-between content-baseline items-center'>
                        <span>Accueil </span>
                        <i className="bi bi-house text-2xl"></i>
                    </a>
                    
                    <NavLink to='./menu'  className='hover:text-red-500 hover:delay-700 text-gray-900 uppercase flex flex-row justify-between content-baseline items-center '>
                        <span>Menu </span>
                        <i className="bi bi-house text-2xl"></i>
                    </NavLink>
                    <NavLink to="/reservation" className='hover:text-red-500  text-gray-900 uppercase flex flex-row justify-between content-baseline items-center '>
                        <span>Réservation </span>
                        <i className="bi bi-house text-2xl"></i>
                    </NavLink>
                    <NavLink to="/shop" className='hover:text-red-500 hover:delay-700 text-gray-900 uppercase flex flex-row justify-between content-baseline items-center '>
                        <span>Shop </span>
                        <i className="bi bi-house text-2xl"></i>
                    </NavLink>
                </div>
            </div>


        </div>
    )
}

function Header() {
  const [makeSearch, setMakeSearch] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);

  const searchAction = () => {
    if(makeSearch === false){
        setMakeSearch(true);
    }else{
        setMakeSearch(false);
    }
    console.log('Kinshasa');
  }

  const sideBarAction = () => {
    if(showSideBar === false){
        setShowSideBar(true);
    }else{
        setShowSideBar(false);
    }
  }
  return (
    <>
        {makeSearch 
            ? <BarSearch searchAction={searchAction} /> 
            : <HeaderBar searchAction={searchAction} sideBarAction={sideBarAction} 
                showSideBar={showSideBar}
              />
         }
        
    </>
   
  )
}

export default Header