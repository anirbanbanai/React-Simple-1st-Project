import React from 'react';
import {CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = ({feature}) => {
    return (
        <div className='flex'>
            <CheckCircleIcon className='h-6 text-green-700' />
            <span className='pl-2'>{feature}</span>
        </div>
    );
};

export default Feature;