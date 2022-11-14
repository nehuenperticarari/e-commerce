import {createContext, useEffect, useState } from 'react'
import AxiosClient from '../config/AxiosClient.jsx'

const ProductContext = createContext()
const initialPage = 1

const ProductProvider = ({children}) => {

const [data, setData] = useState({})
const [categories, setCategories] = useState({})
const [hero, setHero] = useState({})
const [screen, setScreen] = useState({})
const [loading, setLoading] = useState(true)
const [allData, setAllData] = useState({})
const [page, setPage] = useState(initialPage)
const [cart, setCart] = useState([])
const [totalPay, setTotalPay] = useState(0)
const [search, setSearch] = useState('')
const [searchData, setSearchData] = useState({})

//get all the products

  useEffect(() => {
    const getData = async () => {
      try {
        const {data} = await AxiosClient(`/products?populate=*&pagination[page]=${page}&pagination[pageSize]=15&pagination[withCount]=true`)
        setAllData(data.meta.pagination)
        setData(data.data)
      } catch (error) {
        console.log(error.message);
      }finally{
        setTimeout(() => {
          setLoading(false)
        }, 2000);
      }
    }
    getData()
    loadStorage()
   
  }, [page])

  //save data 
  const storageCart = () => {
    localStorage.setItem('cart', JSON.stringify(cart))
    localStorage.setItem('totalPay', JSON.stringify(totalPay))
  }

  //Load data from storage
  const loadStorage = () => {
    setCart(JSON.parse(localStorage.getItem('cart')) || [])
    setTotalPay(JSON.parse(localStorage.getItem('totalPay')) || [])
}

//responsive carrousel
  useEffect(() => {
    const screen = () => {
      if(innerWidth < 768){
        setScreen(1)
      }else{
        setScreen(3)
      }
    }
    screen()
  }, [innerWidth])

  //get the categories
  useEffect(() => {
    const getData = async () => {
      try {
        const {data} = await AxiosClient('/categories?populate=*')
        setCategories(data.data)
      } catch (error) {
        console.log(error.message);
      }finally{
        setTimeout(() => {
          setLoading(false)
        }, 1000);
      }
    }
    getData()
    
  }, [])

    //get the Hero
    useEffect(() => {
      const getData = async () => {
        try {
          const {data} = await AxiosClient('/hero?populate=*')
          setHero(data.data)
        } catch (error) {
          console.log(error.message);
        }finally{
          setTimeout(() => {
            setLoading(false)
          }, 1000);
        }
      }
      getData()
      
    }, [])

  //calculate the limits of pages
  const maxPage = allData.pageCount
  
  const nextPage = () => {
    if(page < maxPage) {
    setPage(page + 1);
    }
  }

  const backPage = () => {
    if(page > 1) {
      setPage(page - 1);
      }
  }

  //Add product to cart

  const isProductoInCart = id =>{
    return cart.some(item => item.id === id)
  }

  const addToCart = (product, qty) => {
    if (isProductoInCart(product.id)){
      let index = cart.findIndex(item => item.id === product.id)

      let copyCart = [...cart]
      copyCart[index].qty += qty

      setTotalPay(totalPay + (product.price * qty))
      setCart(copyCart);
      storageCart()
    }else{
      const productoToAdd = {...product, qty}
      setCart([...cart, productoToAdd])
      setTotalPay(totalPay + (productoToAdd.product.price * qty))
      storageCart()
    }
  }

  //Remove producto from cart

  const removeCart = (id) => {
    let index = cart.findIndex(item => item.id === id);
    const copyCart = [...cart];
    copyCart.splice(index, 1 );
    setTotalPay(totalPay - (cart[index].product.price * cart[index].qty))
    setCart([...copyCart]);
  }
  //clear all cart

  const clearCart = () => {
    setCart([])
    setTotalPay(0)
    localStorage.removeItem('cart')
    localStorage.removeItem('totalPay')
  }

  //save order in bd

  const saveOrder = async (order) => {
    const data = JSON.stringify(order)
    const config = {
      headers:{
        "Content-Type": "application/json",
      }
    }
    try {
      await AxiosClient.post('/orders', {
        "data":{
          data: data
        }
      },config)
      clearCart()
    } catch (error) {
      console.error(error.message);
    }
  }

  const searchGet = async () =>{
    try {
     const {data} = await AxiosClient(`/products?filters[name][$contains]=${search}&populate=*`)
     setSearchData(data)
     console.log(searchData);
     setLoading(false)
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <ProductContext.Provider
    value={{
      data,
      loading,
      screen,
      categories,
      allData,
      hero,
      cart,
      totalPay,
      search,
      searchData,
      setLoading,
      backPage,
      nextPage,
      addToCart,
      removeCart,
      clearCart,
      saveOrder,
      searchGet,
      setSearch
    }}
    >
        {children}
    </ProductContext.Provider>
  )
}
export {
    ProductProvider
}

export default ProductContext