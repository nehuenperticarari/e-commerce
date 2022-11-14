import useProduct from '../hook/useProduct.jsx'
import ItemList from './ItemList.jsx'
import Spinner from './Spinner.jsx'

const Searcher = () => {
  const {searchData, loading} = useProduct()

  if(loading) return <div className='flex items-center justify-center'><Spinner/></div>
  return (
   <div className='container m-10 mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
            {searchData.data.map(item => (
                <ItemList
                item={item}
                key={item.id}
                />
            ))}
        </div>
    </div>
  )
}

export default Searcher