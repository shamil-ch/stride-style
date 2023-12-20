import { offer } from "../assets/images"
import Button from "../Components/Button"
import { arrowRight } from "../assets/icons"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} width={773} height={687}
          className="object-contain w-full"
        />

      </div>

      <div className="flex flex-1 flex-col">
        
        <h2 className="font-palanquin text-4xl capitalize
                font-bold lg:max-w-lg">
                  Unlock Your
                  &nbsp;                  
                <span className="text-coral-red inline-block mt-3"> 
                Exclusive Deals</span> Now
              </h2>

              <p className="mt-4 lg:max-w-lg info-text">
              Indulge in exclusive savings! Elevate your shopping experience with our special offer. 
              Quality meets affordability for a unique blend of style and savings.
               Limited time, exceptional value
              </p>

              <p className="mt-6 lg:max-w-lg info-text">
              Embark on a journey of possibilities, surpassing expectations.
               Your unique desires find fulfillment with us            
               
                </p>

              <div className="mt-11 flex flex-wrap gap-4">
              
              <div>
              <Button label="Shop Now"
               iconURL={arrowRight}
               />
              </div>

            <div>
              <Button 
                  label="Learn more" 
                  backgroundColor="bg-white"
                  borderColor="border-slate-gray"
                  textColor="text-slate-gray"
              />
            </div>

              </div>

        </div>
      
    </section>
  )
}

export default SpecialOffer