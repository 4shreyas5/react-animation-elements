import React from 'react';
import img from "../UPI IMG.png";

function Payment(){
    return(
        <div className='ml-[600px]'>
            <img src={img} alt=""></img>
            <p className='text-white font-bold text-2xl ml-28 mt-10'>
                Pay Now!!
            </p>
        </div>
    )
}

export default Payment;