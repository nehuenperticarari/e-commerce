import React from 'react'
import useProduct from '../hook/useProduct.jsx'
import Spinner from './Spinner.jsx'

const Hero = () => {
    const {hero, loading} = useProduct()


    if(loading) return <div className='flex items-center justify-center'><Spinner/></div>
  return (
    <div className="container mx-auto py-9 md:py-12 px-4 md:px-6">
        <div className="flex justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
            <div className="flex flex-col md:flex-row justify-between bg-gray-50 rounded-lg shadow-lg py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
                <div className="flex flex-col justify-center md:w-1/2">
                <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">We have the best price</h1>
                <p className="text-base lg:text-xl text-gray-800 mt-2">
                    from <span className="font-bold">20% discount</span>
                </p>
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
                <img src={hero.attributes.image.data[0].attributes.url} alt="img discount" />
                </div>
            </div>
            <div className="md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 bg-gray-50 rounded-lg shadow-lg py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center relative">
                <div className="flex flex-col justify-center">
                <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">Consoles</h1>
                <p className="text-base lg:text-xl text-gray-800">
                    discount <span className="font-bold">from 30%</span>
                </p>
                </div>
                <div className="flex justify-end md:absolute md:bottom-4 md:right-4 lg:bottom-0 lg:right-0">
                <img src={hero.attributes.image.data[1].attributes.url} alt="img controller" className="md:w-20 md:h-20 lg:w-full lg:h-full" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero