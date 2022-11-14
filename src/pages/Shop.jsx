import useProduct from '../hook/useProduct.jsx'
import ItemList from '../components/ItemList.jsx'
import Spinner from '../components/Spinner.jsx'


const Shop = () => {
  const {data, 
        loading,
        allData,
        backPage,
        nextPage
  } = useProduct()

  if(loading) return <div className='flex items-center justify-center'><Spinner/></div>
  return (
    <main>
      <h1 className='text-2xl font-bold text-center capitalize mt-5'>All our Products</h1>
      <div className='container px-5 py-24 mx-auto -mt-14'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {data.map(item => (
            <ItemList
            key={item.id}
            item={item}
            />
          ))}
        </div>
      </div>

      {loading ? null : (
            <div className='flex flex-row items-center justify-center gap-2 -mt-12 mb-10'> 

            <button
            className='bg-blue-600 rounded-full  px-3 text-white text-2xl font-bold hover:bg-blue-700 hover:text-gray-400 transition duration-200'
            onClick={() => backPage()}
            >Back</button>

            <p className='bg-gray-700 rounded-full py-1 px-3 text-white text-2xl font-bold'>{allData.page}</p>

            <button
            className='bg-blue-600 rounded-full px-3 text-white text-2xl font-bold hover:bg-blue-700 hover:text-gray-400 transition duration-200'
            onClick={() => nextPage()}
            >Next</button>
            
          </div>
      )}
    </main>
  )
}

export default Shop
