import React from 'react';

const FAQ = () => {
    return (
        <div className='mt-6'>
            <h2 className='text-4xl font-bold mb-3'> FAQ</h2>
            <div className='bg-orange-300 p-3 border-2 mb-4 border-red-500 rounded-xl'>
            <h2 className='text-3xl font-semibold'>Q1. What the differrent beetwen Props vs State?</h2>
            <h2 className='text-2xl font-bold'>Ans : Props are not changeble but state is changeble</h2>
            </div>
            <div className='bg-purple-400 p-3 mb-4 border-2 border-red-500 rounded-xl'>
                <h2 className='text-3xl font-semibold'>Q2. How does useState work?</h2>
                <h2 className='text-2xl font-bold'> Ans : useState is a React hook that allows you to add state to a functional components.</h2>
            </div>
            <div className='bg-green-400 p-3 mb-4 border-2 border-red-500 rounded-xl'>
                <h2 className='text-3xl font-semibold'>Q3. What the purpose of useEffect other than fetching data?</h2>
                <h2 className='font-bold text-2xl'>Ans : When we need dependency effecct we use useEffect.</h2>
            </div>
            <div className='bg-sky-400 p-3 border-2 border-red-500 rounded-xl'>
                <h2 className='text-3xl font-semibold'>Q4. How does React work?</h2>
                <h2 className='text-2xl font-bold'>Ans : React is a JavaScript library. It divides the UI into isolated reusable pieces of code known as components.</h2>
            </div>
            
        </div>
    );
};

export default FAQ;