import React from 'react'

export const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      <div className='max-h-[500px] relative'>
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/41 flex flex-col justify-center' >
          < h1 className='px4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold' >The < span  className='text-orange-500' >Best</span></h1>
          < h1 className='px4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold' > < span className='text-orange-500' >Food </ span >Recomendations</h1>
        </div>
        <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/842545/pexels-photo-842545.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
      </div>
    </div>
  )
}
