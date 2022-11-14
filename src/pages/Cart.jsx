import { Link } from 'react-router-dom'
import CartList from '../components/CartList.jsx'
import useProduct from '../hook/useProduct.jsx'


const Cart = () => {
  const {cart} = useProduct()
  
  return (
    <>
      {cart.length > 0 ?
        <div className='container mx-auto mb-48'>
          <CartList products={cart}/>
        </div>
        :
        <div className='flex flex-col items-center'>
          <h2 className='text-5xl mt-12 mb-16 font-bold font-sans text-center'>Your Cart is Empty</h2>
          <Link to={'/shop'} className='text-xl font-medium font-sans capitalize mb-7 hover:opacity-50 transition duration-200'>you can go to our store to add something, clicking here</Link>
          <Link to={'/categories'}  className='text-xl font-medium font-sans capitalize mb-7 hover:opacity-50 transition duration-200'>or you can search our product categories, clicking here</Link>
        </div>
      }
    </>
  )
}

export default Cart