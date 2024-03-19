import React from 'react';
import Header from './components/Header';
import BannerTitle from './components/BannerTitle';
import ListDish from './components/ListDish';
import MenuPrice from './components/MenuPrice';
import Footer from './components/Footer';

function Menu() {
  return (
    <main className=' para-font-regular '>
       <div className="bg-gray-400 px-10 py-5">
        <Header />
      </div>
      <BannerTitle secondMenu=' ' title='Notre Menu' menu=' menu' />
      <ListDish />
      <MenuPrice />
      <Footer />  
    </main>
  )
}

export default Menu