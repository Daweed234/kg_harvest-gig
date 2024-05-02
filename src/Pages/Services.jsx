import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Home/Footer'
// import { Mop } from 'react-lucide';
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
              <p className='font-bold text-lg mb-3'>General Cleaning</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Magnam consequatur tenetur minus nisi officiis, veritatis quas </p>
            </div>
            <div className=' w-full px-4 py-6 rounded-lg bg-blue-300 shadow-xl'>
              <p className='font-bold text-lg mb-3'>Mopping</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Magnam consequatur tenetur minus nisi officiis, veritatis quas </p>
            </div>
            <div className=' w-full px-4 py-6 rounded-lg bg-blue-300 shadow-xl'>
              {/* <Mop /> */}
              <p className='font-bold text-lg mb-3'>Sweeping</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Magnam consequatur tenetur minus nisi officiis, veritatis quas </p>
            </div>
          </div>
          <div className='flex flex-row gap-9 m-7'>
            <div className=' w-full px-4 py-6 rounded-lg bg-blue-300 shadow-xl'>
              <p className='font-bold text-lg mb-3'>Laundry</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Magnam consequatur tenetur minus nisi officiis, veritatis quas </p>
            </div>
            <div className=' w-full px-4 py-6 rounded-lg bg-blue-300 shadow-xl'>
              <p className='font-bold text-lg mb-3'>Sanitizaton</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Magnam consequatur tenetur minus nisi officiis, veritatis quas </p>
            </div>
            <div className=' w-full px-4 py-6 rounded-lg bg-blue-300 shadow-xl'>
              <p className='font-bold text-lg mb-3'>Deep Cleaning</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Magnam consequatur tenetur minus nisi officiis, veritatis quas </p>
            </div>
          </div>
          <div className='flex flex-row gap-9 m-7'>
            <div className=' w-full px-4 py-6 rounded-lg bg-blue-300 shadow-xl'>
              <p className='font-bold text-lg mb-3'>Garden Maintainance</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Magnam consequatur tenetur minus nisi officiis, veritatis quas </p>
            </div>
            <div className=' w-full px-4 py-6 rounded-lg bg-blue-300 shadow-xl'>
              <p className='font-bold text-lg mb-3'>Hygiene technique training</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Magnam consequatur tenetur minus nisi officiis, veritatis quas </p>
            </div>
            <div className=' w-full px-4 py-6 rounded-lg bg-blue-300 shadow-xl'>
              <p  className='font-bold text-lg mb-3'>Groundskeeping</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Magnam consequatur tenetur minus nisi officiis, veritatis quas </p>
            </div>
          </div>
          <div className='flex flex-row gap-9 m-7'>
            <div className=' w-full px-4 py-6 rounded-lg bg-blue-300 shadow-xl'>
              <p className='font-bold text-lg mb-3'>Dusting</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Magnam consequatur tenetur minus nisi officiis, veritatis quas </p>
            </div>
            <div className=' w-full px-4 py-6 rounded-lg bg-blue-300 shadow-xl'>
              <p className='font-bold text-lg mb-3'>Trash Removal</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Magnam consequatur tenetur minus nisi officiis, veritatis quas </p>
            </div>
            <div className=' w-full px-4 py-6 rounded-lg bg-blue-300 shadow-xl'>
              <p className='font-bold text-lg mb-3'>Vacuming</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Magnam consequatur tenetur minus nisi officiis, veritatis quas </p>
            </div>
          </div>
          <div className='flex flex-row gap-9 m-7'>
            <div className=' w-[420px] px-4 py-6 rounded-lg bg-blue-300 shadow-xl'>
              <p className='font-bold text-lg mb-3'>Landscaping care</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Magnam consequatur tenetur minus nisi officiis, veritatis quas </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Services