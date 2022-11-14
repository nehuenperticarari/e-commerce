import {Link} from 'react-router-dom'


const Categories = ({item}) => {
    const {name, image} = item.attributes
    
  
  return (
    <Link to={`/categories/${item.attributes.name.toLowerCase()}`} className="md:w-1/2 xl:w-1/3 p-6 hover:rounded-xl hover:scale-95 transition duration-200">
        <div style={{backgroundColor: "rgb(66, 119, 170)"}} className="shadow-xl p-6 rounded-lg inline-flex border-4 border-white flex-col justify-center items-center w-96 md:w-72 lg:w-36">
            <img className='w-14 h-14 ' src={image.data.attributes.url} alt={`image ${name}`} />
            <h2 className="text-lg text-white font-bold capitalize text-center">{name}</h2>
        </div>
    </Link>
  )
}

export default Categories