import React from 'react'
import Navbar from '../Components/Navbar'
import { FiMail } from 'react-icons/fi'
import Footer from '../Components/Home/Footer'

const Contact = () => {
  return (<>
    <Navbar />
    <div className='text-center items-center justify-center mt-32 mb-20'>
      <p className='text-2xl font-bold'>CONTACT US</p>
      <p className='text-sm mt-10'> amet consectetur, adipisicing elit. Exercitationem ut repellat beatae numquam aut <br /> veniam officia architecto quis eos eaque? Totam cumque, sit a consequuntur magni molestias? </p>
    </div>
      <div className='flex justify-center items-center gap-10 mt-12'>

      <div className='flex flex-col items-center justify-center px-4 py-5 rounded-lg mt-5 shadow-2xl'>
          <FiMail className=' text-6xl'/>
          <p className='font-bold mt-2'>Visit Us</p>
          <p className='text-[12px] mt-2 mb-1 text-center'>
          Lorem ipsum dolor sit elit. At, enim <br />Lorem ipsum dolor sit a <br />
          </p>
          <p className='text-sm font-semibold text-blue-500'>Remera-Kisimenti-Kigali</p>
        </div>
        <div className='flex flex-col items-center justify-center px-4 py-5 rounded-lg mt-5 shadow-2xl'>
          <FiMail className=' text-6xl'/>
          <p className='font-bold mt-2'>Call Us</p>
          <p className='text-[12px] mt-2 mb-1 text-center'>
          Lorem ipsum dolor sit elit. At, enim <br />Lorem ipsum dolor sit a <br />
          </p>
          <p className='text-sm font-semibold text-blue-500'>+250 788 301 879</p>
        </div>
        <div className='flex flex-col items-center justify-center px-4 py-5 rounded-lg mt-5 shadow-2xl'>
          <FiMail className=' text-6xl'/>
          <p className='font-bold mt-2'>Mail Us</p>
          <p className='text-[12px] mt-2 mb-1 text-center'>
          Lorem ipsum dolor sit elit. At, enim <br />Lorem ipsum dolor sit a <br />
          </p>
          <p className='text-sm font-semibold text-blue-500'>kgharvestcoltd@gmail.com</p>
        </div>
      </div>
      <Footer />
  </>
  )
}

export default Contact