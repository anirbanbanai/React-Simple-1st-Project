import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

const Main = () => {
    const [data, setData] = useState([]);
    const [timeValue , setTimevalue] = useState([])
    useEffect(() => {
        fetch('pub.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

   const AddButton =(time)=>{
    const newTime = [...timeValue , time];
    setTimevalue(newTime);
   };

   let ttmm = 0;
   for(let time of timeValue){
         ttmm = ttmm + parseInt(time);
         console.log(ttmm)
   }

    return (
        <div className='grid grid-cols-3 gap-4'>
            <div className='col-span-2 '>
                {
                    data.map(value => <Cart key={value.id} AddButton={AddButton} myValue={value}></Cart>)
                }
            </div>
            <div className='bg-purple-400 sticky top-0'>
                <h2 className='text-3xl font-semibold'>Spent time on read : {ttmm} min</h2>
                <h2 className='text-4xl font-bold'>Bookmark Blog : {}</h2>
            </div>
        </div>
    );
};

export default Main;