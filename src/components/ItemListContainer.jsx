import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import useProduct from '../hook/useProduct.jsx';
import ItemList from './ItemList.jsx';
import Spinner from './Spinner.jsx';
import back from '../assets/back-arrow-icon.svg'


const ItemListContainer = () => {
  const [products, setProducts] = useState([])

  const {loading, setLoading } = useProduct()

  const {category} = useParams();


    const getProduct = async () => {
        try{
            const url = `http://localhost:1337/api/products?populate=*&pagination[page]=${1}&pagination[pageSize]=50`
            const {data} = await axios(url)
            const filterData = data.data
            if(category){
              const results = filterData.filter(product => product.attributes.category === category)
                setProducts(results)
            }
            else{
                setProducts(filterData)
            }
        }
        catch(error){
          console.log(error.message)
        }
    }
    useEffect( () => { 
        getProduct()
        setTimeout(() => {
            setLoading(false)
            
        }, 2000);
      }, [category])
        
  if(loading){ return <div className='flex items-center justify-center'><Spinner/></div>
}
  else{
  return (
    <div className='container px-5 py-24 mx-auto -mt-14'>
        <Link to={'/categories'} className="flex flex-row gap-3 mb-5 items-center font-bold hover:opacity-60 duration-200 transition"> <img className='w-6 h-6' src={back} alt="back arrow" />Go back </Link>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {products.map(item => (
        <ItemList
        key={item.id}
        item={item}
        />
      ))}
    </div>
  </div>
  )
}
}
export default ItemListContainer