import  { useContext } from 'react'
import ProductContext from '../context/ProductProvider.jsx'

const useProduct = () => {
    return useContext(ProductContext)
}

export default useProduct