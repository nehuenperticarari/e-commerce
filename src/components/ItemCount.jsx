import React, { useState } from 'react'

const ItemCount = ({stock, addCart}) => {

    const [count, setCount] = useState(1)

    const addition  = () => {
        if (count < stock) setCount (count + 1)
    }
    const subtraction = () => {
        if (count > 0) setCount (count - 1)
    }

  return (
    <div >

        <div className='flex flex-col items-center justify-center'>
            <div className='mb-5 flex gap-5'>
                <button className='inline-block p-2 w-10  border-2 border-blue-500 
                font-bold text-lg uppercase rounded-lg shadow-lg hover:bg-black hover:bg-opacity-5 
                transition duration-150 ease-in-out' onClick={subtraction} type='button'>-</button>
         
                <div>
                    <p className='font-bold'>Quantity: ({count})</p>
                    <p className='text-sm font-medium'>stock: {stock}</p>
                </div>

                <button className='inline-block p-2 w-10 border-2 border-blue-500 
                font-bold text-lg uppercase rounded-lg shadow-lg hover:bg-black hover:bg-opacity-5
                transition duration-150 ease-in-out' onClick={addition} type='button'>+</button>
             
            </div>

            <button onClick={ ()=> addCart(count)} className="text-white bg-blue-500 py-2 
            text-lg px-6 hover:bg-blue-600 rounded">Add to Cart</button>
        </div>

    </div>
  )
}

export default ItemCount