import React from 'react'
import Button from '../../Ui/Button'

export default function Header() {
  return (
    <div className='pt-[52px] container'>
        <div className='flex justify-around items-center'>
            <div>
                <h3 className=' text-5xl volkhov-bold'>FASCO</h3>
            </div>
            <nav className='flex  gap-12 text-lg items-center'>
                <a href='/' className='link'>Home</a>
                <a href='/' className='link'>Deals</a>
                <a href='/' className='link'>New Arrivals</a>
                <a href='/' className='link'>Packages</a>
                <a href='/' className='link'>Sign in</a>
                <a href='/'><Button title='Sign Up' /></a>
            </nav>
        </div>
    </div>
  )
}
