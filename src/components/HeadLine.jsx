import React from 'react'
import { flattenedData } from '../data/rsts';


export const HeadLine = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Kozhikode's Best</p>
                <p className='px-2'>Authentic cuisines</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 font-semibold'>Explore now</button>
            </div>
            <img className='rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover' src="https://images.pexels.com/photos/4768966/pexels-photo-4768966.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        </div>
        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Bangalore culinary delights</p>
                <p className='px-2'>Delectable Destinations</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 font-semibold'>Explore now</button>
            </div>
            <img className='rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover' src="https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Flavours of Kochi</p>
                <p className='px-2'>Explore the Menu Today</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 font-semibold'>Explore now</button>
            </div>
            <img className='rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover' src="https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        </div>
    </div>
  )
}
