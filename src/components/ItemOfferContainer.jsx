import useProduct from '../hook/useProduct.jsx'
import ItemListOffer from './ItemListOffer.jsx';
import Spinner from './Spinner.jsx';

const ItemOfferContainer = () => {
  const {data, loading} = useProduct()

  if(loading) return <div className='flex items-center justify-center'><Spinner/></div>
  return (
    <section className="text-gray-600 -mt-20">
      <div className='container px-5 py-24 mx-auto'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {data.slice(0, 6).map(item => (
            <ItemListOffer
            key={item.id}
            item={item}
            />
          ))}
        </div>
      </div>
    </section>

  )
}

export default ItemOfferContainer