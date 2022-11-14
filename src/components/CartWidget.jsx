import { Link } from 'react-router-dom'
import cartIcon from '../assets/carrito.svg'
import useProduct from '../hook/useProduct.jsx'

const CartWidget = () => {
    const{cart} = useProduct()
  return (
    <div className='flex flex-row items-center justify-center sm:mt-5'>
        <Link to={'/cart'} className="mr-5 rounded-lg text-lg p-1 bg-gray-700 hover:cursor-pointer hover:text-gray-900 hover:scale-110 hover:bg-gray-700 transition duration-200 absolute"><img src={cartIcon} alt="img cart" width={30} />
        </Link>
        <div className='flex items-center justify-center -ml-4 p-0.5 bg-red-500 px-0.5 relative left-4 bottom-5 rounded-full '>
            <span className="text-xs font-light text-white">({ cart.length })</span>
        </div>
    </div>

  )
}

export default CartWidget