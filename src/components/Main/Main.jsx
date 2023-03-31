import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Sidebar from '../Sidebar/Sidebar';

const Main = () => {
    const [data, setData] = useState([]);
    const [timeValue, setTimevalue] = useState([]);
    const [bokkmark, setBookmarks] = useState([])
    useEffect(() => {
        fetch('pub.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    const AddButton = (time) => {
        const newTime = [...timeValue, time];
        setTimevalue(newTime);
    };

    let setTimeTotal = 0;
    for (let time of timeValue) {
        setTimeTotal = setTimeTotal + parseInt(time);
    };


    const AddBookMark = (title) => {
        setBookmarks([...bokkmark, title])


    }
    console.log(bokkmark)
    const newtt = [...bokkmark];
    // console.log(newtt)

    return (
        <div className='grid md:grid-cols-3 gap-4'>
            <div className='md:col-span-2 '>
                {
                    data.map(value => <Cart
                        key={value.id}
                        AddButton={AddButton}
                        AddBookMark={AddBookMark}
                        myValue={value}
                    ></Cart>)
                }
            </div>
            <div className='bg-slate-300 p-6 rounded-xl mt-4'>
                <h2 className='text-3xl font-semibold rounded-xl p-4 bg-stone-200'>Spent time on read : {setTimeTotal} min</h2>
                <div >
                    <h2 className='text-4xl font-bold mt-5 mb-4'>Bookmark Blog : {}</h2>
{
    bokkmark.map(m=> <div className='bg-yellow-300 p-3  font-bold mb-3 rounded-xl border-2 border-purple-600' key={m.id} >  {m.title} </div> )
}
                    {/* <Sidebar bokkmark={bokkmark}></Sidebar> */}
                </div>
            </div>
        </div>
    );
};

export default Main;