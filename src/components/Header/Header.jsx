import React from 'react';

const Header = () => {
    return (
        <div className='bg-lime-300 rounded-xl p-2 pl-5 pr-5 flex justify-between items-center'>
            <h3 className='text-4xl font-semibold'>Knowledge Cafe</h3>
            
                <img className='w-[80px] h-[80px] rounded-full' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
            
        </div>
    );
};

export default Header;