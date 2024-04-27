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
                <div>
                    <img src={Image}/>
                </div>
            </div>
        </>
    )
}

export default Services