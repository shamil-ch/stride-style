import Button from "../Components/Button"
import { shoe8 } from "../assets/images"

const SuperQuality = () => {
  return (
    <section id="about-us" 
      className="flex justify-between items-centermax-lg:flex-col gap-10 w-full max-container">

        <div className="flex flex-1 flex-col">
        
        <h2 className="font-palanquin text-4xl capitalize
                font-bold lg:max-w-lg">
                  We Provide You
                  &nbsp;                  
                <span className="text-coral-red inline-block mt-3"> 
                  Super</span> 
                  <span className="text-coral-red inline-block mt-3"> 
                  Quality</span>  Shoes
              </h2>

              <p className="mt-4 lg:max-w-lg info-text">
              Discover unparalleled craftsmanship and durability at our shoe haven.
              Elevate your style with superlative quality footwear, 
              meticulously designed for comfort and lasting impressions. 
              Step into excellence with every pair.
              </p>

              <p className="mt-6 lg:max-w-lg info-text">
              Our commitment to precision and excellence guarantees your contentment.              
              </p>
              <div className="mt-11">

              <Button label="View Details"/>
              </div>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <img 
            src={shoe8}
            alt="shoe"
            width={570}
            height={522}
            className="object-contain"
          />

        </div>

    </section>  
  )
}

export default SuperQuality