import React from 'react';

const Link = ({redu}) => {
    return (
        <li className='mr-12 hover:bg-yellow-500'>
            <a href="">{redu.name}</a>
        </li>
    );
};

export default Link;