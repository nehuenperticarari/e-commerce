import {Link} from 'react-router-dom'
import useProduct from "../hook/useProduct.jsx"

const CartList = ({products}) => {
  const {totalPay, clearCart, removeCart} = useProduct()
  return (
    <>
        {products.map(product => (
            <div className="overflow-x-auto relative mt-10 mb-10 rounded-lg shadow-lg" key={product.id}>
              <table className="w-full text-sm text-left text-white rounded-lg bg-gray-600">

                <thead className="text-xs bg-gray-700 uppercase">
                  <tr>
                    <th className="py-3 px-6">Name</th>
                    <th className="py-3 px-6">Image</th>
                    <th className="py-3 px-6">Price</th>
                    <th className="py-3 px-6">Quantity</th>
                    <th className="py-3 px-6">Total</th>
                    <th className="py-3 px-6">Delete</th>
                  </tr>
                </thead>

                <tbody className="border-t bg-gray-600">
                  <tr className="">
                    <th className="capitalize py-4 px-6 font-bold whitespace-nowrap">{product.product.name}</th>

                    <td><img className="py-3 px-6 w-20 object-contain" src={product.product.image.data[0].attributes.url} alt={`img ${product.product.name}`} /></td>

                    <td className="py-3 px-6">${product.product.price}</td>
                    <td className="py-3 px-6">{product.qty}</td>
                    <td className="py-3 px-6">${product.product.price * product.qty}</td>
                    <td className="py-3 px-6"><button onClick={() => removeCart(product.id)} className='bg-red-500 rounded-full px-2 py-1 hover:bg-red-600 transition duration-200'>X</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
        ))}

      <div className='flex justify-center items-center flex-col mb-5'>
        
        <p className='text-2xl text-gray-700'>Total: <span className='font-bold'>${totalPay}</span></p>
     
        <div className='flex flex-row items-center gap-4 mt-5'>
          <button className='bg-red-600	hover:bg-red-700 text-center 
          rounded-3xl py-1.5 px-5 text-white'onClick={clearCart}>Empty Cart</button>

          <Link to='/order'>
            <button className='bg-blue-600	hover:bg-blue-700 text-center
            rounded-3xl py-1.5 px-5 uppercase text-white'>Buy</button>
          </Link>
        </div>

      </div>
        
    </>
  )
}

export default CartList

