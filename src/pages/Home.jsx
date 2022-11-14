
import SliderContainer from '../components/SliderContainer.jsx'
import ItemOfferContainer from '../components/ItemOfferContainer.jsx'
import PopularCategory from '../components/PopularCategory.jsx'
import Hero from '../components/Hero.jsx'

const Home = () => {
  return (
    <div>
        <Hero/>
        <h2 className='font-bold text-center text-2xl my-5'>Most Viewed Products</h2>
        <SliderContainer/>
        <h2 className='font-bold text-center text-2xl my-5'>Popular Categories</h2>
        <PopularCategory/>
        <h2 className='font-bold text-center text-2xl my-5'>Discount Products</h2>
        <ItemOfferContainer/>
    </div>
  )
}

export default Home