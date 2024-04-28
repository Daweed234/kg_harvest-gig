import React from 'react'
import Image from "../Img/image.jpg"

const Services = () => {
    return (
        <>
            <div className='h-screen'>
                <div className='flex flex-col text-center'>
                    <p className="mt-10 text-4xl font-bold">What We Do</p>
                    <p className=' mt-10'>Lorem ipsum dolor, sit amet  minus reiciendis vitae explicabo  nisi repudiandae fugiat<br /> fugit ratione quia ex adipisci debitis, harum fuga, omnis maxime assumenda!</p>
                </div>
                
            <div className='flex flex-row'>
            <div className='flex flex-col justify-center items-center'>
                    <div className='h-48 w-1/3 mb-32'>
                        <img src={Image} />
                    </div>
                    <div className='flex flex-col bg-blue-600 text-white text-center h-32 w-1/3 justify-center items-center rounded-md'>
                        <p>General Cleaning</p>
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />aliquam! Officiis aut atque sequi quae pariatur sit cum.</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='h-48 w-1/3 mb-32'>
                        <img src={Image} />
                    </div>
                    <div className='flex flex-col bg-blue-600 text-white text-center h-32 w-1/3 justify-center items-center rounded-md'>
                        <p>General Cleaning</p>
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />aliquam! Officiis aut atque sequi quae pariatur sit cum.</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='h-48 w-1/3 mb-32'>
                        <img src={Image} />
                    </div>
                    <div className='flex flex-col bg-blue-600 text-white text-center h-32 w-1/3 justify-center items-center rounded-md'>
                        <p>General Cleaning</p>
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />aliquam! Officiis aut atque sequi quae pariatur sit cum.</p>
                    </div>
                </div>
            </div>

            </div>
        </>
    )
}

export default Services