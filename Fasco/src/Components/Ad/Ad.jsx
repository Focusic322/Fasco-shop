import React from 'react';
import Button from '../../Ui/Button';
import PeakyBlinder from '../../Img/People/PeakyBlinder.svg';
import Quality from '../../Img/Logo/Quality.svg';
import Box from '../../Img/Logo/Box.svg';
import Achivment from '../../Img/Logo/Achivment.svg';
import Phone from '../../Img/Logo/Phone.svg';
import { Link } from 'react-router';


export default function Ad() {
  return (
    <>
    <div className="pt-16 relative flex justify-between items-center">
      <div className="relative w-1/2 h-[100%]">
        <img
          src={PeakyBlinder}
          alt="Peaky Blinders Outfit"
          className="w-3/4 mx-auto drop-shadow-lg mt-[87px]"
        />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[110px] left-[350px]">
            <div className="relative flex items-center">
              <div className="w-4 h-4 backdrop-blur-3xl  border-[1px] border-black rounded-full ml-[-2px]"></div>
              <div className="h-[1px] w-[45px] bg-black"></div>
              <div
                className="h-[1px] w-[20px] bg-black"
                style={{
                  transform: 'rotate(45deg)',
                  transformOrigin: 'left center',
                }}
              ></div>
            </div>
            <div className="ml-6 mt-2 bg-white  shadow-white text-black text-sm font-medium px-2 py-1 border-[1px]   shadow-2xl">
              Flat Cap
            </div>
          </div>
          <div className="absolute top-[210px] left-[170px]">
            <div className="relative flex items-center">
              <div 
                className="h-[1px] w-[50px] bg-black"
                style={{
                  transform: 'rotate(-45deg)',
                  transformOrigin: 'left center',
                }}
              ></div>
              <div
                className="absolute -top-9 left-9 h-[1px] w-[70px] bg-black"
              ></div>
              <div className="absolute -top-10 left-28 w-4 h-4 backdrop-blur-3xl  border-[1px] border-black rounded-full ml-[-2px]"></div>
            </div>
            <div className="absolute -left-10 -top-2 mt-2  text-black text-sm px-2 py-1 border-[1px] backdrop-blur-lg">
              Suspender
            </div>
          </div>
          <div className="absolute top-[360px] left-[170px]">
            <div className="relative flex items-center">
              <div 
                className="h-[1px] w-[50px] bg-black"
                style={{
                  transform: 'rotate(-45deg)',
                  transformOrigin: 'left center',
                }}
              ></div>
              <div
                className="absolute -top-9 left-9 h-[1px] w-[70px] bg-black"
              ></div>
              <div className="absolute -top-10 left-28 w-4 h-4 backdrop-blur-3xl  border-[1px] border-black rounded-full ml-[-2px]"></div>
            </div>
            <div className="absolute -left-10 -top-2 mt-2  text-black text-sm px-2 py-1 border-[1px] backdrop-blur-lg">
              Hugo Boss
            </div>
          </div>
          <div className="absolute bottom-[20px] left-[210px]">
            <div className="relative flex items-center">
              <div 
                className="h-[1px] w-[50px] bg-black"
                style={{
                  transform: 'rotate(-45deg)',
                  transformOrigin: 'left center',
                }}
              ></div>
              <div
                className="absolute -top-9 left-9 h-[1px] w-[70px] bg-black"></div>
                <div className="absolute -top-11 left-28 w-4 h-4 backdrop-blur-3xl  border-[1px] border-black rounded-full ml-[-6px]"></div>
            </div>
            <div className="absolute -left-10 -top-2 mt-2  text-black text-sm px-2 py-1 border-[1px] backdrop-blur-lg">
             Santoni
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute bg-black w-[2px] h-[546px] origin-center"
        style={{
          left: '47%',
          transform: 'rotate(15deg)',
        }}
      ></div>
      <div className="relative max-w-[950px] w-[883px] bg-[#DADADA] p-8 text-left -skew-x-[15deg] pl-[90px]">
        <span className="text-gray-500 text-lg skew-x-[15deg]">Women Collection</span>
        <h2 className="text-midNight text-6xl font-medium my-4 skew-x-[15deg]">Peaky Blinders</h2>
        <h3 className="text-black text-lg font-bold underline mb-4 skew-x-[15deg] pl-4">
          DESCRIPTION
        </h3>
        <p className="text-gray-600 text-base mb-6 skew-x-[15deg] pl-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br> Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque <br></br> duis ultrices
          sollicitudin. Lorem ipsum dolor sit amet, consectetur <br></br> adipiscing elit. Scelerisque duis.
        </p>
        <div className="flex items-center mb-6 skew-x-[15deg] pl-14">
          <span className="pr-4 text-lg">Size:</span>
          <button className="bg-black text-white px-4 py-2 rounded-lg hover:opacity-80 transition duration-300">
            M
          </button>
        </div>
        <div className="flex items-center text-black text-2xl font-medium pb-8 skew-x-[15deg] pl-[70px]">
          $100.<p className="text-lg pt-1">00</p>
        </div>
        <div className="skew-x-[15deg] pl-[80px]">
          <Link to='/shop'><Button title={'Buy Now'} /></Link>
        </div>
      </div>
    </div>
    <div className='pt-[72px] flex justify-around'>
      <div className='flex gap-3 hover:opacity-80 duration-300 cursor-pointer'>
        <img src={Quality} alt="" />
        <div>
          <h3 className='text-lg text-midNight font-medium'>High Quality</h3>
          <span>crafted from top materials</span>
        </div>
      </div>
      <div className='flex gap-3 hover:opacity-80 duration-300 cursor-pointer'>
        <img src={Achivment} alt="" />
        <div>
          <h3 className='text-lg text-midNight font-medium'>Warrany Protection</h3>
          <span>Over 2 years</span>
        </div>
      </div>
      <div className='flex gap-3 hover:opacity-80 duration-300 cursor-pointer'>
        <img src={Box} alt="" />
        <div>
          <h3 className='text-lg text-midNight font-medium'>Free Shipping</h3>
          <span>Order over 150 $</span>
        </div>
      </div>
      <div className='flex gap-3 hover:opacity-80 duration-300 cursor-pointer'>
        <img src={Phone} alt="" />
        <div>
          <h3 className='text-lg text-midNight font-medium'>24 / 7 Support</h3>
          <span>Dedicated support</span>
        </div>
      </div>
    </div>
    </>
  );
}
