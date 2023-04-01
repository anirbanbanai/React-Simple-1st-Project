import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { ToastContainer, toast } from 'react-toastify';

const Main = () => {
    const [data, setData] = useState([]);
    const [timeValue, setTimevalue] = useState([]);
    const [bokkmark, setBookmarks] = useState([]);
    const [isread , setIsread] = useState(false);

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

        let aarray = [...bokkmark, title]
        setBookmarks(aarray);
        if(isread){
            toast('You allready bookmarklede')
        }
        else{
            setIsread(true)
        }

    }

    // const HandleBookmark = ()=>{
    //     if(isread){
    //         toast('You bare allready as read')
    //     }
    //     else{
    //         // addData(props.AddBookMark);
    //         setIsread(true)
    //     }
    // }


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
            <div className='bg-fuchsia-400 p-6 rounded-xl mt-4'>
                <h2 className='text-3xl font-semibold rounded-xl p-4 bg-stone-200'>Spent time on read : {setTimeTotal} min</h2>
                <div >
                    <h2 className='text-4xl font-bold mt-5 mb-4'>Bookmark Blog : {bokkmark.length}</h2>
                    {
                        bokkmark.map(m => <div className='bg-white p-3  font-bold mb-3 rounded-xl border-2 border-purple-600' key={m.id} >  {m.title} </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Main;