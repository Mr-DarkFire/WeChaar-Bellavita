import React from 'react'
import NavLogo from "../assets/NavLogo.png"

const Footer = () => {
  return (
    <div className='p-5'>
      <div className='bg-gradient-to-r from-bg-blue to-bg-pink rounded-lg flex min-[1100px]:flex-row flex-col items-center justify-between py-10 px-16'>
        <div className='flex flex-col'>
            <p className='font-lexend text-[2.1rem] text-white mb-4'>We send <span className='font-marko'><i>Great</i>   </span> Emails</p>
            <div className='flex min-[580px]:flex-row flex-col'><input className='border-2 shadow-xl  rounded-full px-2 py-1 text-lg w-full' placeholder='Enter your email'/>
            <button className='min-[580px]:ml-4 mt-2 bg-white rounded-full px-3 py-1 font-medium font-lexend'>Subscribe</button>
            </div>
            <div className='mt-8 flex flex-col justify-center -ml-5'>
                <img src={NavLogo} className='h-20' />
                <img src={NavLogo} className='h-[4.5rem] -scale-y-100 opacity-15 -mt-6' />
            </div>
        </div>
        <div className='flex min-[580px]:flex-row flex-col text-white'>
            <div className="flex flex-col min-[730px]:mx-8 mx-2">
                <p className='font-lexend text-2xl my-5'>Company</p>
                <ul className='font-lexend text-lg pl-2'>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li>T&C</li>
                </ul>
            </div>
            <div className="flex flex-col min-[730px]:mx-8 mx-2">
                <p className='font-lexend text-2xl my-5'>Social</p>
                <ul className='font-lexend text-lg pl-2'>
                    <li>TikTok</li>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Youtube</li>              
                </ul>
            </div>
            <div className="flex flex-col min-[730px]:mx-8 mx-2">
                <p className='font-lexend text-2xl my-5'>Theme</p>
                <ul className='font-lexend text-lg pl-2'>
                    <li>Style Guide</li>
                    <li>Changelog</li>
                    <li>Licenses</li>
                    <li>All Templates</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer