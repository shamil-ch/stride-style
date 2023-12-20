import { products } from '../constants';
import PopularProductCard from '../Components/PopularProductCard';

const PopularProducts = () => {
  return (
    <section id="products" 
    className='max-container max-sm:mt-12 '>

      <div className='flex flex-col justify-start gap-5'>

      <h2 className='text-4xl font-palanquin font-bold'>
        Top <span className='text-coral-red'>Trending</span> Picks</h2>

      <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
        Explore Stripes Chic Choe Collection:Crafted with premium materials,combining comfort and style for a confident, fashionable stride
      </p>

      </div>

      <div className='mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14'>
          {products.map ((product) => (
            <PopularProductCard key={product.name} {...product} />
          ))}
      </div>

    </section>
    )
}

export default PopularProducts