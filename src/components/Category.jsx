import useProduct from "../hook/useProduct.jsx"
import Categories from "./Categories.jsx";
import Spinner from './Spinner.jsx';

const Category = () => {
  const {categories, loading} = useProduct()

  if(loading) return <div className='flex items-center justify-center'><Spinner/></div>
  return (
    <section className="container px-5 py-20 mx-auto -mt-8">

      <div className="flex flex-wrap w-full mb-5 flex-col items-center text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Our Categories</h1>
      </div>

      <div className="grid md:grid-cols-2 md:gap-2 lg:flex lg:flex-row justify-center container">
      {categories.map(item => (
        <Categories
        key={item.id}
        item={item}
        />
      ))}
      </div>

    </section>
  )
}

export default Category