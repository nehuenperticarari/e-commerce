import { useState } from 'react'
import {Link} from 'react-router-dom'
import back from '../assets/back-arrow-icon.svg'
import useProduct from '../hook/useProduct.jsx'
import ItemCount from './ItemCount.jsx'
import Spinner from './Spinner.jsx'

const ItemDetail = ({product}) => {
  //check is in cart
  const [isInCart, setIsInCart] = useState(false)
  //Hook context
  const {loading, addToCart } = useProduct()

  const copyProduct = {
    id: product.id,
    product: product.attributes
  }
  const addCart = (qty) => {
    addToCart(copyProduct, qty)
    setIsInCart(true)
  }

  if(loading || product?.length === 0) return <div className='flex items-center justify-center'><Spinner/></div> 


    return ( 
      <>
        <section className="text-gray-600 bg-white container mx-auto m-10 shadow-lg rounded-xl overflow-hidden">
          <Link to={`/categories/${product.attributes.category}`} className="flex flex-row gap-3 mb-5 items-center font-bold hover:opacity-60 duration-200 transition mt-5 ml-5"> <img className='w-6 h-6' src={back} alt="back arrow" />Go back </Link>
          
          <div className="container px-2 py-10 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">

              <img alt={`ecommerce ${product.attributes.name}`} className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={product.attributes.image.data[0].attributes.url} />

              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">

                <div className='flex flex-row justify-between'>
                  <h2 className="text-sm  text-gray-500 tracking-widest">{product.attributes.category}</h2>

                  <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                </div>

                <h1 className="text-gray-900 text-3xl font-medium mb-1">{product.attributes.name}</h1>
                <p className="leading-relaxed">{product.attributes.description}</p>
    
                <div className="mt-5 lg:mt-24 ">

                  <span className="font-bold text-4xl text-black">${product.attributes.price}</span> 
                  {isInCart ?
                  <div className='flex flex-col'>
                    <Link to={"/cart"} className="mx-auto">
                        <button className="mt-5 ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Finish the purchase</button>
                    </Link>
                    <Link to={"/categories"} className="mx-auto">
                        <button className="mt-5 ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded ">Keep Buying</button>
                    </Link>
                  </div>
                  :
                    <ItemCount addCart={addCart} stock={product.attributes.stock}/>
                  }  

                </div>

              </div>

            </div>
          </div>

        </section>
      </>  
       
      
    )
}

export default ItemDetail