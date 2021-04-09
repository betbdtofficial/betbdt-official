import React, { useEffect } from 'react';

const Testapi = () => {
    useEffect(() =>{
        fetch("https://betboki.com/home/get_all_data")
        .then(response => response.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Testapi;