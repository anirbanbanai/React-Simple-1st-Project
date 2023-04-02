import React, { useEffect, useState } from 'react';
import PriceCard from '../Components/priceCard/PriceCard';

const Pricelist = () => {
    const [prices, setPrices] = useState([]);
    useEffect(() => {
        fetch('price.json')
            .then(res => res.json())
            .then(data => setPrices(data))
    }, [])
    return (
        <div>
            <h2 className='text-4xl bg-purple-400 p-4 text-purple-700 font-semibold'>Awesome Affordablr price</h2>
            <div className='grid md:grid-cols-3'>
                {
                    prices.map(price => <PriceCard
                        key={price.id}
                        price={price}
                    ></PriceCard>)
                }
            </div>
        </div>
    );
};

export default Pricelist;