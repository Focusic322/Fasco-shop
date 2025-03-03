import React from 'react'

export default function Footer() {
  return (
    <div className='pt-14'>
        <div className='flex items-center justify-between'>
            <div className='pl-8'>
                <h3 className=' text-4xl volkhov-bold'>FASCO</h3>
            </div>
            <ul className='flex text-lg gap-6 pr-8'>
                <li className='link cursor-pointer'>Support Center</li>
                <li className='link cursor-pointer'>Invoicing</li>
                <li className='link cursor-pointer'>Contract</li>
                <li className='link cursor-pointer'>Careers</li>
                <li className='link cursor-pointer'>Blog</li>
                <li className='link cursor-pointer'>FAQ,s</li>
            </ul>
        </div>
        <div className='flex justify-center text-sm font-medium pt-8'>Copyright © 2022 Xpro . All Rights Reseved.</div>
    </div>
  )
}
