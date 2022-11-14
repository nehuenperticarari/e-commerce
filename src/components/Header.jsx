import icon from '../assets/search.svg'
import logo from '../assets/logo.jpg'
import {Link} from 'react-router-dom'
import CartWidget from './CartWidget.jsx'
import useProduct from '../hook/useProduct.jsx'

//TODO agregar para iniciar sesion
const Header = () => {
  const {setSearch, search, searchGet} = useProduct()

  return (
    <header style={{backgroundColor: "rgb(66, 119, 170)"}} className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center gap-4">
        <Link to={'/'} className="flex title-font font-medium items-center mb-4 md:mb-0">
          <img src={logo} className=" rounded-xl shadow-md hover:scale-90 transition duration-200" alt="image logo" width={100} />
          <span className="ml-3 text-2xl font-bold text-white">Vikings</span>
        </Link>

        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link to={'/'} className="mr-5 text-lg text-white hover:cursor-pointer hover:text-gray-900">Home</Link>

          <Link to={'/categories'} className="mr-5 text-lg text-white hover:cursor-pointer hover:text-gray-900">Categories</Link>

          <Link to={'/shop'} className="text-lg text-white hover:cursor-pointer hover:text-gray-900 mr-12">Shop</Link>

          <CartWidget/>
        
        </nav>

        <div className='flex flex-row rounded-md bg-gray-200 shadow-lg lg:mr-6'>
          <input type="text" className='rounded-md bg-gray-200 shadow-lg p-2' placeholder='Search Product'
          value={search}
          onChange={e => setSearch(e.target.value)}
          />
          <Link onClick={() => searchGet()} to="/search" className='hover:scale-110 transition duration-200'>
            <img className='text-white' src={icon} width={30} alt="searcher icon" />
          </Link>

        </div>
      </div>
    </header>
  )
}
export default Header