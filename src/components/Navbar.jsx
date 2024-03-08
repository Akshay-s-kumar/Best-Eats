import React,{useState} from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import {BsFillCartFill, BsFillSaveFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {MdFavorite,MdHelp} from 'react-icons/md'
import {FaUserFriends,FaWallet} from 'react-icons/fa'

export const Navbar = () => {
  const [Nav,SetNav] = useState(false)
  return (
    <div className= 'max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      {/*Nav Bar */}
      <div className='flex items-center'>
        <div onClick={()=> SetNav(!Nav)} className="cursor-pointer">
            <AiOutlineMenu  size={30}/>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
         <span className="font-bold">BEST EATS</span>
        </h1>

      </div>
      {/**Search Bar*/}
      <div className='bg-gray-200 rounded-full hidden md:flex  items-center px-2  w-[200px] sm:w-[400px] lg:w-[500px] '>
        <AiOutlineSearch size={20}/>
        <input className='bg-transparent p-2  w-full focus:outline-none' type="text" placeholder='Search Restuarants' />
      </div>
      <button className=' hidden md:flex rounded-full bg-black text-white  w-[150px] items-center py-2'>
        <MdFavorite size={20} className='mr-2'/>Favorites
      </button>
      {/**Mobile Menu */}
      {/**Overlay */}
      {Nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>:' '}
      
      {/**Side Drawer Menu */}
      <div className={Nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300': 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
        <AiOutlineClose onClick={()=> SetNav(!Nav)} className='absolute right-4 top-4 cursor-pointer' size={30}/>
      <h2 className='text-2xl p-4'> <span className='font-bold'>BEST EATS</span></h2>
      <nav>
        <ul className='flex flex-col p-4 text-gray-500'>
          <li className='text-xl py-4 flex'> <TbTruckDelivery size={25} className='mr-4 ml-2'/>Orders</li>
          <li className='text-xl py-4 flex'> <MdFavorite size={25} className='mr-4 ml-2'/>Favorites</li>
          <li className='text-xl py-4 flex'> <FaWallet size={25} className='mr-4 ml-2'/>Wallet</li>
          <li className='text-xl py-4 flex'> <MdHelp size={25} className='mr-4 ml-2'/>Help</li>
          <li className='text-xl py-4 flex'> <FaUserFriends size={25} className='mr-4 ml-2'/>Invite Friends</li>
        </ul>
      </nav>
      </div>
    </div>
  )
}
