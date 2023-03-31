import React, { useEffect, useState } from 'react';

const Sidebar = ({bokkmark} ) => {
    const [titlee , getTitle] = useState(bokkmark);
    useEffect(()=>{
        const getTitlefromStrg = localStorage.getItem('old-title');
       getTitle(getTitlefromStrg)
    },[bokkmark])
    return (
        <div >
          
        </div>
    );
};

export default Sidebar;