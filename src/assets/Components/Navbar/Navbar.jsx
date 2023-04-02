import React, { useState } from 'react';
import Link from '../link/Link';
import { XMarkIcon, Bars3Icon, RadioIcon } from '@heroicons/react/24/solid'


const Navbar = () => {

    const [open, setOpen] = useState(false);

    const redus = [
        {
            name: 'Anirban',
            id: 1,
            place: "Bangladesh"
        },
        {
            name: 'Arpon',
            id: 2,
            place: "Bangladesh"
        },
        {
            name: 'Joya',
            id: 3,
            place: "Bangladesh"
        },
        {
            name: 'Mou',
            id: 4,
            place: "Bangladesh"
        },
        {
            name: 'Kokil',
            id: 5,
            place: "Butan"
        },
        {
            name: 'Laluli',
            id: 6,
            place: "Npal"
        },
    ]

    return (
        <nav className='bg- bg-purple-400'>
            <div className='md:hidden' onClick={() => setOpen(!open)}>
                <span >{
                open === true ? 
                <XMarkIcon className='h-6' /> : 
                <Bars3Icon className="h-6 w-6 text-purple-800"
                 />
                }</span>
            </div>
            <ul className={`md:flex duration-500 absolute md:static pl-4 pb-4 bg-red-400 ${open ? 'top-6' : '-top-40'} md:pt-4`}>
                {
                    redus.map(redu => <Link
                        key={redu.id}
                        redu={redu}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;