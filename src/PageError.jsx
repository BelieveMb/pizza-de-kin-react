import React from 'react';
import Header from './components/Header';
import BannerTitle from './components/BannerTitle';

function PageError() {
  const imageName  = 'pizzaimg.png'
  return (
    <main className=' para-font-regular '>
        <div className="bg-gray-400 px-10 py-5">
            <Header />
        </div>
        <BannerTitle title="Page d'Erreur" menu=' Page Error' secondMenu=' ' />
        <section className='flex flex-col lg:flex-row gap-6 py-[8%] px-10 bg-gray-400 h-screen '>
            
        </section>
    </main>
  )
}

export default PageError