// import React from 'react'
// import Image from "../Img/image.jpg"

// const Services = () => {
//     return (
//         <>
//             <div className='h-screen'>
//                 <div className='flex flex-col text-center'>
//                     <p className="mt-10 text-4xl font-bold">What We Do</p>
//                     <p className=' mt-10'>Lorem ipsum dolor, sit amet  minus reiciendis vitae explicabo  nisi repudiandae fugiat<br /> fugit ratione quia ex adipisci debitis, harum fuga, omnis maxime assumenda!</p>
//                 </div>
                
//             <div className='flex flex-row'>
//             <div className='flex flex-col justify-center items-center'>
//                     <div className='h-48 w-1/3 mb-32'>
//                         <img src={Image} />
//                     </div>
//                     <div className='flex flex-col bg-blue-600 text-white text-center h-32 w-1/3 justify-center items-center rounded-md'>
//                         <p>General Cleaning</p>
//                         <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />aliquam! Officiis aut atque sequi quae pariatur sit cum.</p>
//                     </div>
//                 </div>
//                 <div className='flex flex-col justify-center items-center'>
//                     <div className='h-48 w-1/3 mb-32'>
//                         <img src={Image} />
//                     </div>
//                     <div className='flex flex-col bg-blue-600 text-white text-center h-32 w-1/3 justify-center items-center rounded-md'>
//                         <p>General Cleaning</p>
//                         <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />aliquam! Officiis aut atque sequi quae pariatur sit cum.</p>
//                     </div>
//                 </div>
//                 <div className='flex flex-col justify-center items-center'>
//                     <div className='h-48 w-1/3 mb-32'>
//                         <img src={Image} />
//                     </div>
//                     <div className='flex flex-col bg-blue-600 text-white text-center h-32 w-1/3 justify-center items-center rounded-md'>
//                         <p>General Cleaning</p>
//                         <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />aliquam! Officiis aut atque sequi quae pariatur sit cum.</p>
//                     </div>
//                 </div>
//             </div>

//             </div>
//         </>
//     )
// }

// export default Services










import React from 'react';
import Image from "../Img/image.jpg";

const Services = () => {
    return (
        <div className='h-screen bg-gray-200 flex flex-row justify-center items-center'>
            <div className='text-center'>
                <p className="text-4xl font-bold">What We Do</p>
                <p className='mt-4 text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus reiciendis vitae <br />explicabo nisi repudiandae fugiat fugit ratione quia ex adipisci debitis, harum fuga, omnis maxime assumenda!</p>
                <button className="px-5 py-3 bg-blue-500 text-white rounded-lg hover:-translate-y-3 hover:bg-blue-600 duration-300 mt-10">Learn More</button>
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
                <img src={Image} alt={title} className='w-full h-full object-cover rounded-md' />
            </div>
            <div>
                <p className='text-xl font-semibold mb-2'>{title}</p>
                <p className='text-sm'>{description} </p>
            </div>
        </div>
    );
};

export default Services;
