import React from 'react'
import Man1 from '../../Img/People/Man1.svg'
import Man2 from '../../Img/People/Man2.svg'
import Group from '../../Img/People/Group.svg'
import Duet from '../../Img/People/Duet.svg'
import Button from '../../Ui/Button'
import Chanel from '../../Img/Logo/Chanel.svg'
import LouisVuitton from '../../Img/Logo/LouisVuitton.svg'
import Prada from '../../Img/Logo/Prada.svg'
import CalvinKlein from '../../Img/Logo/CalvinKlein.svg'
import Denim from '../../Img/Logo/Denim.svg'
import { Link } from 'react-router-dom'
export default function Shop() {
  return (
    <>
        <div className=' pt-[131px] flex justify-between items-center'>
            <Link to="/shop" className='bg-lightGray w-[392px] h-[790px] pt-[220px]'>
                <img src={Man1} alt="" />
            </Link>
        <div>
            <Link to="/shop" className='hover:opacity-85 duration-700'><img src={Group} alt="" /></Link>
            <div className='grid justify-center items-center'>
                <h2 className='text-7xl font-medium'>ULTIMATE</h2>
                <h1 className='sale text-9xl text-white flex justify-center pb-6'>SALE</h1>
                <p className='flex justify-center text-lg pb-6'>NEW COLLECTION</p>
                <Link to="/shop" className='flex justify-center pb-6'><Button title={'SHOP NOW'}/></Link>
            </div>
            <Link to="/shop" className='hover:opacity-85 duration-700'><img src={Duet} alt="" /></Link>
        </div>
            <Link to="/shop" className='bg-lightGray w-[392px]  h-[790px] pt-[220px] flex justify-center'>
                <img src={Man2} alt="" />
            </Link>
        </div>
        <ul className='pt-[150px] flex justify-between items-center '>
            <li className='pl-6 hover:opacity-85 duration-500'><img src={Chanel} alt="" /></li>
            <li className='hover:opacity-85 duration-500'><img src={LouisVuitton} alt="" /></li>
            <li className='hover:opacity-85 duration-500'><img src={Prada} alt="" /></li>
            <li className='hover:opacity-85 duration-500'><img src={CalvinKlein} alt="" /></li>
            <li className='pr-6 hover:opacity-85 duration-500'><img src={Denim} alt="" /></li>
        </ul>
    </>
  )
}
