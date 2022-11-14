import useProduct from '../hook/useProduct.jsx'
import {Link} from 'react-router-dom'
// import required modules
import { Swiper, SwiperSlide  } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../styles/slider.css"
import Spinner from './Spinner.jsx';

const SliderContainer = () => {

  const {data, loading, screen} = useProduct()

  if(loading) return <div className='flex items-center justify-center'><Spinner/></div>
  return (
    <div className="mt-5 container mx-auto">
      <Swiper
        slidesPerView={screen}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.slice(7, 14).map(element => (
              <SwiperSlide key={element.id} className="bg-white h-72 flex flex-col mb-10">
                <img className='object-cover' src={element.attributes.image.data[0].attributes.url} alt="" />
                <Link to={`/shop/${element.attributes.url}`} className='bg-blue-500 text-white w-full hover:bg-blue-600 hover:text-gray-600 duration-200 transition'>show more</Link>
              </SwiperSlide>
        ))}

     
      </Swiper>
    </div>

  )
}

export default SliderContainer