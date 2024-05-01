import React from 'react';
// import Image from "../../Img/image.jpg";
import { Link } from 'react-router-dom';
import General from '../../Img/General.jpeg'
const Services = () => {
    return (
        <div className='h-screen bg-gray-200 flex flex-row justify-center items-center'>
            <div className='text-center'>
    <p className="text-4xl font-bold">What We Do</p>
    <p className='mt-4 text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus reiciendis vitae <br />explicabo nisi repudiandae fugiat fugit ratione quia ex adipisci debitis, harum fuga, omnis maxime assumenda!</p>
    <Link to='/services'> 
    <button className="px-5 py-3 bg-blue-500 text-white rounded-lg hover:-translate-y-3 hover:bg-blue-600 duration-300 mt-10">Learn More</button>
    </Link>
            </div>
            <div className='flex flex-wrap justify-center items-center mt-8'>
    <ServiceCard title="General Cleaning" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam! Officiis aut atque sequi quae pariatur sit cum." />
    <ServiceCard title="Deep Cleaning" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam! Officiis aut atque sequi quae pariatur sit cum." />
    <ServiceCard title="Window Cleaning" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam! Officiis aut atque sequi quae pariatur sit cum." />
            </div>
        </div>
    );
};
    
const ServiceCard = ({ title, description }) => {
    return (
        <div className='flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-6 m-4'>
            <div className='w-20 h-20 mb-4'>
    <img src={General} alt={title} className='w-full h-full object-cover rounded-md' />
            </div>
            <div>
    <p className='text-xl font-semibold mb-2'>{title}</p>
    <p className='text-sm'>{description} </p>
            </div>
        </div>
    );
};

export default Services;
