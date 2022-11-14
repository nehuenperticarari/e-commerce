import {Link} from 'react-router-dom'
import mouseIcon from '../assets/mouse.svg'
import consoleIcon from '../assets/console.svg'
import controllerIcon from '../assets/controller.svg'


const PopularCategory = () => {
  return (
    <div className='grid md:grid-cols-3 justify-center w-fit mx-auto gap-5 md:gap-10 mb-10'>

        <Link to={'/categories/console'} className='bg-gray-400 rounded-full py-4 px-10 md:py-9 md:px-12 shadow-md'>
            <img src={consoleIcon} alt="console icon" className='hover:scale-110 duration-200 transition' />
            <p className='text-center text-white font-bold capitalize text-lg'>Consoles</p>
        </Link>
        <Link to={'/categories/controller'} className='bg-gray-400 rounded-full py-9 px-12 shadow-md'>
            <img src={controllerIcon} alt="controller icon" className='hover:rotate-45 duration-200 transition' />
            <p className='text-center text-white font-bold capitalize text-lg '>Controller</p>
        </Link>
        <Link to={'/categories/mouse'} className='bg-gray-400 rounded-full py-9 px-12 shadow-md'> 
            <img src={mouseIcon} alt="mouse icon" className='hover:-rotate-45 duration-200 transition' />
            <p className='text-center text-white font-bold capitalize text-lg'>Mouse</p>
        </Link>

      </div>
  )
}

export default PopularCategory