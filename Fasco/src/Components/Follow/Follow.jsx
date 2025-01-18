import React from 'react'
import Coat from './../../Img/People/Coat.svg';
import Sweater from './../../Img/People/Sweater.svg';
import Snickers from './../../Img/People/Snickers.svg';
import Shirt from './../../Img/People/Shirt.svg';
import Dress from './../../Img/People/Dress.svg';
import Blazer from './../../Img/People/Blazer.svg';


export default function Follow() {
  return (
    <div className='pt-[150px]'>
        <div>
            <div className='grid justify-center'>
                <h2 className='flex justify-center text-4xl font-medium pb-6'>Follow Us On Instagram</h2>
                <p className='flex justify-center pb-16 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis <br /> ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>
            </div>
            <div className='flex'>
                <img src={Coat} alt="" className='hover:scale-95 duration-500'/>
                <img src={Sweater} alt="" className='hover:scale-95 duration-500'/>
                <img src={Snickers} alt="" className='hover:scale-95 duration-500'/>
                <img src={Shirt} alt="" className='hover:scale-95 duration-500'/>
                <img src={Dress} alt="" className='hover:scale-95 duration-500'/>
                <img src={Blazer} alt="" className='hover:scale-95 duration-500'/>
            </div>
        </div>
    </div>
  )
}
