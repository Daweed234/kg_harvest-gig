import React from 'react'
import Navbar from '../Components/Navbar'

function Services() {
  return (
    <>
      <Navbar />
      <div>
        <div>
          <p className='text-4xl flex text-center justify-center items-center mb-10 mt-24'>Services</p>
          <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error assumenda sit quas eaque omnis accusamus <br />
            magnam, quod tempora voluptas blanditiis? Doloribus voluptatem eligendi commodi ad nam officia ex, officiis distinctio?</p>
        </div>
        <div className="flex flex-col">
        <div className='flex flex-row gap-9 m-7'>
            <div className=' w-full px-4 py-6 rounded-lg bg-blue-300 shadow-xl'>
              <p>General Cleaning</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Magnam consequatur tenetur minus nisi officiis, veritatis quas </p>
            </div>
            <div className=' w-full px-4 py-6 rounded-lg bg-blue-300 shadow-xl'>
              <p>Mopping</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Magnam consequatur tenetur minus nisi officiis, veritatis quas </p>
            </div>
            <div className=' w-full px-4 py-6 rounded-lg bg-blue-300 shadow-xl'>
              <p>Sweeping</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Magnam consequatur tenetur minus nisi officiis, veritatis quas </p>
            </div>
          </div>
          <div className='flex flex-row gap-9 m-7'>
            <div className=' w-full px-4 py-6 rounded-lg bg-blue-300 shadow-xl'>
              <p>Laundry</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Magnam consequatur tenetur minus nisi officiis, veritatis quas </p>
            </div>
            <div className=' w-full px-4 py-6 rounded-lg bg-blue-300 shadow-xl'>
              <p>Sanitizaton</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Magnam consequatur tenetur minus nisi officiis, veritatis quas </p>
            </div>
            <div className=' w-full px-4 py-6 rounded-lg bg-blue-300 shadow-xl'>
              <p>Deep Cleaning</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Magnam consequatur tenetur minus nisi officiis, veritatis quas </p>
            </div>
          </div>
          <div className='flex flex-row gap-9 m-7'>
            <div className=' w-full px-4 py-6 rounded-lg bg-blue-300 shadow-xl'>
              <p>Garden Maintainance</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Magnam consequatur tenetur minus nisi officiis, veritatis quas </p>
            </div>
            <div className=' w-full px-4 py-6 rounded-lg bg-blue-300 shadow-xl'>
              <p>Hygiene technique training</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Magnam consequatur tenetur minus nisi officiis, veritatis quas </p>
            </div>
            <div className=' w-full px-4 py-6 rounded-lg bg-blue-300 shadow-xl'>
              <p>Groundskeeping</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Magnam consequatur tenetur minus nisi officiis, veritatis quas </p>
            </div>
          </div>
          <div className='flex flex-row gap-9 m-7'>
            <div className=' w-full px-4 py-6 rounded-lg bg-blue-300 shadow-xl'>
              <p>Dusting</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Magnam consequatur tenetur minus nisi officiis, veritatis quas </p>
            </div>
            <div className=' w-full px-4 py-6 rounded-lg bg-blue-300 shadow-xl'>
              <p>Trash Removal</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Magnam consequatur tenetur minus nisi officiis, veritatis quas </p>
            </div>
            <div className=' w-full px-4 py-6 rounded-lg bg-blue-300 shadow-xl'>
              <p>Vacuming</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Magnam consequatur tenetur minus nisi officiis, veritatis quas </p>
            </div>
          </div>
          <div className='flex flex-row gap-9 m-7'>
            <div className=' w-[420px] px-4 py-6 rounded-lg bg-blue-300 shadow-xl'>
              <p>Landscaping care</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Magnam consequatur tenetur minus nisi officiis, veritatis quas </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services