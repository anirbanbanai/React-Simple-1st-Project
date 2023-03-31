import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faCoffee } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    const { name, id, img, img2, time, title } = props.myValue;
    const { AddButton, AddBookMark } = props;
    return (
        <div className='p-3 text-start rounded-xl border-2 m-2 border-red-400'>
            <img className='w-4/4 rounded-xl' src={img} alt="" />
            <div className='flex justify-between'>
                <div className='flex justify-between'>
                    <img className='w-[65px] h-[65px] mt-4 rounded-full' src={img2} alt="" />
                    <div>
                        <h3 className='text-2xl ml-2 mt-3 font-semibold'>{name}</h3>
                        <h3 className='font-bold ml-2 mt-2'>March 14 (4 days ago)</h3>
                    </div>
                </div>
                <div className='flex mt-2 gap-1'>
                    <h2 className='font-bold mt-5 '>{time} min read  </h2>
                    <button  onClick={() => AddBookMark(props.myValue)}>
                        <div className='flex gap-1'>
                            <svg className='w-[20px] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" /></svg>

                        </div>
                    </button>
                </div>
            </div>
            <h2 className='text-3xl font-semibold mb-3 mt-11
            '>How to get your first job as a self- <br /> taught programmer</h2>
            <h1>#Begginer #Programing</h1>
            <button onClick={() => AddButton(time)} className='text-blue-700 underline' >Marks as read </button>
        </div>
    );
};

export default Cart;