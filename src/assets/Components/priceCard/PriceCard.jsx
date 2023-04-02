import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({price}) => {
    return (
        <div className='bg-red-200 grid  mr-4 rounded-xl p-3 mt-4' >
            <h2 className='text-4xl font-extrabold text-center text-purple-600'>{price.price} <span className='text-2xl text-black'>/mon</span></h2>
            <h2 className='text-3xl text-center  font-semibold'>{price.name}</h2>
           <div className=''>
            <p className='text-2xl font-semibold'>Feature</p>
           {
                price.features.map(m => <Feature key={m.id} feature={m}></Feature>)
            }
           </div>
           <button className='bg-green-500 mt-auto w-full py-2 rounded-xl font-bold'>Buy Now</button>
          
        </div>
    );
};

export default PriceCard;