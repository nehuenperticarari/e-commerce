import {Link} from 'react-router-dom'

const ItemListOffer = ({item}) => {
    const img = item.attributes.image.data[0].attributes.url

  return (
    <>
      <div className="container p-2 w-full bg-white shadow-lg rounded-lg">
            
        <div className="block relative h-64 rounded overflow-hidden border-b border-gray-200">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={img}/>
        </div>

        <div className="mt-4 flex flex-col">
            <h3 className="text-gray-500 text-xs tracking-widest mb-1 text-center">{item.attributes.category}</h3>
            <h2 className="text-gray-900 text-xl font-bold capitalize text-center">{item.attributes.name}</h2>
            <p className="mt-1 font-bold text-red-700 line-through text-lg -mb-4">${item.attributes.price}</p>
            <p className="mt-1 mb-2 font-bold text-gray-700 text-2xl">${item.attributes.price - (item.attributes.price * 25/100)}</p>
            <Link to={`/shop/${item.attributes.urlName}`} className='bg-blue-500 text-white p-1 rounded-md text-center hover:bg-blue-600 hover:text-gray-700 duration-200 transition'>Buy it</Link>
        </div>
        
      </div>
    </>

  )
}

export default ItemListOffer