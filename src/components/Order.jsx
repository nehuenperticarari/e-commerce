import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { newDate, orderID, validation } from '../helper/index.js'
import useProduct from '../hook/useProduct.jsx'
import Alert from './Alert.jsx'
import Spinner from './Spinner.jsx'

const Order = () => {
  const [name, setName] = useState('')
  const [country, setCountry] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [adress, setAdress] = useState('')
  const [postal, setPostal] = useState('')
  const [email, setEmail] = useState('')
  const [card1, setCard1] = useState('')
  const [card2, setCard2] = useState('')
  const [finish, setFinish] = useState(false)
  const [order, setOrder] = useState('')
  const [date, setDate] = useState('')
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState({})

  const {totalPay, cart, saveOrder} = useProduct()

  useEffect(() => {
    const getInfo = () => {
      setDate(newDate(Date.now()))
      setOrder(orderID())
    }
    getInfo()
  }, [])
  

  const handleForm = async (e) => {
    e.preventDefault()
    setLoading(true)

    const buyer = {
      name,
      country,
      state,
      city,
      adress,
      postal,
      email,
      card1,
      card2,
      order: {
        order,
        date,
        totalPay,
        cart
      }
    }
    if(validation(name, country, state, city, adress, postal, email, card1, card2, setAlert, setLoading)){
      return
    }
    saveOrder(buyer)

    setTimeout(() => {
      setLoading(false)
    }, 3000)

    setFinish(true)
    setAlert ({
      msg: 'Successful Purchase',
      error: false
   })

  }
  const {msg} = alert

  return (
    <section className='m-10 flex flex-col items-center' >

      {finish ? (
        <>
          <Alert alert={alert}/>
          <h1 className='text-2xl font-bold text-center mb-5'>Thanks for your purchase {name}</h1>
          <h2 className='text-xl font-medium text-center mb-5'>The operation number is <span className='font-bold'>{order}</span></h2>
          <p className='font-medium text-lg text-gray-700 text-center mb-5'>Total amount: <span className='font-bold'>${totalPay}</span></p>
          <Link to={'/'} className='rounded-lg bg-blue-500 text-white shadow-lg p-2 uppercase text-lg hover:bg-blue-600 hover:text-gray-600 duration-200 transition'>Go to home</Link>
        </>

      ) : (
        <>
          <h1 className='text-2xl font-bold text-center'>Thanks for your purchase</h1>
          <p className='font-medium text-lg text-gray-700 text-center'>Total amount: <span className='font-bold'>${totalPay}</span></p>

          <form onSubmit={handleForm} className="bg-white shadow-lg rounded-lg container max-w-sm md:max-w-md mt-5 p-5" >
          {msg && <Alert alert={alert} />}
            <div className='mb-2'>
              <label className='text-gray-700 font-medium text-xl' htmlFor="name">Name:</label>
              <input className='p-2 border border-gray-200 rounded-lg w-full' placeholder='Enter your name' id='name' type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label className='text-gray-700 font-medium text-xl' htmlFor="email">Email:</label>
              <input id='email' className='p-2 border border-gray-200 rounded-lg w-full' placeholder='Enter your email' type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className='text-gray-700 font-medium text-xl' htmlFor="country">Country:</label>
              <input id='country' className='p-2 border border-gray-200 rounded-lg w-full' placeholder='Enter your Country' type="text" 
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              />
            </div>

            <div>
              <label className='text-gray-700 font-medium text-xl' htmlFor="state">State:</label>
              <input id='state' className='p-2 border border-gray-200 rounded-lg w-full' placeholder='Enter your State' type="text" 
              value={state}
              onChange={(e) => setState(e.target.value)}
              />
            </div>

            <div>
              <label className='text-gray-700 font-medium text-xl' htmlFor="city">City:</label>
              <input id='city' className='p-2 border border-gray-200 rounded-lg w-full' placeholder='Enter your City' type="text" 
              value={city}
              onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div> 
              <label className='text-gray-700 font-medium text-xl' htmlFor="adress">Adress:</label>
              <input id='adress' className='p-2 border border-gray-200 rounded-lg w-full' placeholder='Enter your Adress' type="text" 
              value={adress}
              onChange={(e) => setAdress(e.target.value)}
              />
            </div>

            <div>
              <label className='text-gray-700 font-medium text-xl' htmlFor="postal-code">Postal Code:</label>
              <input id='postal-code' className='p-2 border border-gray-200 rounded-lg w-full' placeholder='Enter your postal code' type="number" 
              value={postal}
              onChange={(e) => setPostal(e.target.value)}
              />
            </div>

            <div>
              <label className='text-gray-700 font-medium text-xl' htmlFor="card1">Credit Card:</label>
              <input id='card1' className='p-2 border border-gray-200 rounded-lg w-full ' placeholder='Enter your credit card number' type="number" 
              value={card1}
              onChange={(e) => setCard1(e.target.value)}
              />
            </div>

            <div>
              <label className='text-gray-700 font-medium text-xl' htmlFor="card2">Credit Card back:</label>
              <input id='card2' className='p-2 border border-gray-200 rounded-lg w-full ' placeholder='Enter your credit card number back' type="number" 
              value={card2}
              onChange={(e) => setCard2(e.target.value)}
              />
            </div>
            {loading ? (
              <div className='flex items-center justify-center'><Spinner/></div>
            ) : (
              <input className="bg-blue-500 mt-5 p-1 w-full text-white uppercase text-lg rounded-lg shadow-md hover:cursor-pointer hover:bg-blue-600 hover:text-gray-500 transition duration-200"  value={'Checkout'} type="submit"/>
            )}
          </form>
        </>
      )}
        
    </section>
  )
}

export default Order