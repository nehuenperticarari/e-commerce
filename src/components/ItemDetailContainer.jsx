import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import useProduct from '../hook/useProduct.jsx'
import ItemDetail from './ItemDetail.jsx'
import Spinner from './Spinner.jsx'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const {loading, setLoading } = useProduct()
    const {name} = useParams()

    const getProduct = async () => {
        try{
            const url = `http://localhost:1337/api/products?populate=*&pagination[page]=${1}&pagination[pageSize]=50`
            const {data} = await axios(url)
            const findData = data.data
            if(name){
              const results = findData.find(product => product.attributes.url == name)
                setProduct(results)
            }
            else{
                setProduct(findData)
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
        }, 3000);
      }, [name])


  if(loading) { return <div className='flex items-center justify-center'><Spinner/></div>
  } else{

    return (
        <div>
            <ItemDetail product={product}/>
        </div>
      )
  }
      
}

export default ItemDetailContainer