import React from 'react'

function PizzaSection() {
  return (
    <section className="relative z-30  flex flex-col  justify-center gap-2 px-14 py-[8rem] lg:py-[6rem]  bg-gray-200/75 text-gray-800 h-auto " >
        <div className="flex flex-col items-center content-center justify-center gap-2 ">
            <h2 className='text-xl lg:text-2xl text-red-500 sous-title-font-bold text-center'>Découvrez Nos Spécialités Gourmandes </h2>
            <h1 className='title-font-regular text-3xl lg:text-[5rem] text-center uppercase lg:leading-[4rem] '>Plaisirs Culinaires à l'Honneur </h1>
            <p className=' px-14 lg:px-10 py-4 para-font-regular w-full lg:w-[50%] text-center '>
                Plongez dans un univers de saveurs exquises et laissez-vous séduire par nos délices gastronomiques préparés avec passion et créativité.
            </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center my-2">
            <div className="flex flex-col w-full lg:w-[33%] gap-2 justify-center items-center">
                <img 
                    src='/images/pizzaimg.png'
                    alt="pizza image"
                    className='w-[30rem] h-[20rem] '
                /> 
                <h3 className='btn-font-regular text-2xl font-semibold uppercase '>Pizza Margherita</h3>
                <p className=' para-font-regular  text-center '> Découvrez notre pizza Margherita classique, garnie de tomates juteuses, de mozzarella fondante et de basilic frais.
                </p>

            </div>
            <div className="flex flex-col w-full lg:w-[33%] gap-2 justify-center items-center">
                <img 
                    src='/images/pizzaimg3.png'
                    alt="pizza image"
                    className='w-[30rem] h-[20rem] '
                /> 
                <h3 className='btn-font-regular text-2xl font-semibold uppercase '>Burger Gourmet</h3>
                <p className=' para-font-regular  text-center '>  Laissez-vous tenter par notre burger gourmet savoureux, composé de bœuf grillé, de fromage fondant.
                </p>

            </div>
            <div className="flex flex-col w-full lg:w-[33%] gap-2 justify-center items-center">
                <img 
                    src='/images/pizzaimg3.png'
                    alt="pizza image"
                    className='w-[30rem] h-[20rem] '
                /> 
                <h3 className='btn-font-regular text-2xl font-semibold uppercase '>Méga plat de pizza</h3>
                <p className=' para-font-regular  text-center '>
                    Craquez pour nos frites maison croustillantes et dorées à souhait, accompagnées d'une pointe de sel et d'une sauce au choix.
                </p>

            </div>
           
           
        </div>
        {/* ajouter un slider avec le point  */}
    </section>
  )
}

export default PizzaSection