import React,{useState} from 'react'
import { Data } from '../data/Data.js'
export const Food = () => {
    const [restuarants,SetFood] = useState(Data)
    const FilterType = (category)=> {
        SetFood(
            Data.filter((items) => {
                return items.category === category
            })
        )
    }
    const FilterPrice = (price) => {
        SetFood(
            Data.filter((items) => {
                return items.price === price

            }
            )

        )
    }
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12 '>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Restuarants</h1>
        <div className='flex flex-col lg:flex-row justify-between'>
            <div>
                <p className='font-bold text-gray-700'>Filter Types</p>
                <div className='flex justify-between flex-wrap'>
                    <button onClick={() => SetFood(Data)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                    <button onClick={() => FilterType('burger')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burgers</button>
                    <button onClick={() => FilterType('pizza')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
                    <button onClick={() => FilterType('salad')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Salads</button>
                </div>
            </div>
            <div>
                <p className='font-bold text-gray-700'>Filter Price</p>
                <div className='flex justify-between max-w-[390px] w-full'>
                <button onClick={() => FilterPrice('$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$</button>
                <button onClick={() => FilterPrice('$$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$</button>
                <button onClick={() => FilterPrice('$$$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$</button>
                <button onClick={() => FilterPrice('$$$$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$$</button>                
                </div> 
                    
            </div>
        </div>
        {/**Display images */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {restuarants.map((items,index)=> (
                <div className='border shadow-lg hover:scale-105 duration-300 rounded-lg' key={index}>
                    <img src={items.image} alt={items.name} 
                    className='w-full h-[200px] object-cover rounded-t-lg'/>
                    <div className='flex justify-between px-2 py-4'>
                        <p className='font-bold'>{items.name}</p>
                        <p className='font-bold bg-orange-500 text-white p-1 rounded-full'> <span>{items.price}</span></p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
