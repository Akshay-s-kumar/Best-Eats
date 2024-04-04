import React, { useState, useEffect } from 'react';
import { flattenedData } from '../data/rsts';

export const Food = () => {
  const [restaurants, setRestaurants] = useState(flattenedData);
  const [filteredRestaurants, setFilteredRestaurants] = useState(flattenedData);

  const filterRestaurants = (location) => {
    const filteredData = restaurants.filter((item) => item.location === location);
    setFilteredRestaurants(filteredData);
  };

  useEffect(() => {
    setFilteredRestaurants(restaurants);
  }, [restaurants]);

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12 '>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Restaurants</h1>
      <div className='flex flex-col lg:flex-row justify-between'>
        <div>
          <p className='font-bold text-gray-700'>Filter Types</p>
          <div className='flex justify-between flex-wrap'>
            <button onClick={() => setFilteredRestaurants(flattenedData)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
            <button onClick={() => filterRestaurants('Kozhikode')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Kozhikode</button>
            <button onClick={() => filterRestaurants('Bangalore')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Bangalore</button>
            <button onClick={() => filterRestaurants('Kochi')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Kochi</button>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {filteredRestaurants.map((item, index) => (
          <div className='border shadow-lg hover:scale-105 duration-300 rounded-lg' key={index}>
            <img src={item.photoUrl} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg' />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
