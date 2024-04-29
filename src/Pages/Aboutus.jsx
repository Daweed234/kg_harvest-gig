import React from 'react'
import Navbar from '../Components/Navbar'
import Image from '../Img/image.jpg'
import Footer from "../Components/Home/Footer"

function Aboutus() {
    return (
        <>
            <Navbar />
            <div>
                <div className=''>
                    <div>
                        <p className='text-4xl flex text-center justify-center items-center min-h-screen'>About Us</p>

                    </div>
                    <div className='flex justify-center gap-56 mb-36'>
                        <p className='font-bold text-4xl'>Our Mission</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt <br />
                            soluta ea iure fugit. Aliquam perspiciatis, repudiandae <br />
                            quis id illum doloremque pariatur, tempora sed  ex <br />
                            obcaecati placeat modi accusantium consectetur veniam <br />
                            .Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br />
                            Incidunt soluta ea iure fugit. Aliquam perspiciatis, repudiandae <br />
                            quis id illum doloremque pariatur, tempora sed  ex <br />
                            obcaecati placeat modi accusantium consectetur veniam.Lorem <br />
                            ipsum dolor sit,amet consectetur adipisicing elit. Incidunt <br />
                            soluta ea iure fugit. Aliquam perspiciatis, repudiandae <br />
                            quis id illum doloremque pariatur, tempora sed  ex <br />
                            obcaecati placeat modi accusantium consectetur veniam.</p>

                    </div>
                    <div className='flex justify-center gap-56  mb-36'>
                        <p className='font-bold text-4xl'>Our Vision</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt <br />
                            soluta ea iure fugit. Aliquam perspiciatis, repudiandae <br />
                            quis id illum doloremque pariatur, tempora sed  ex <br />
                            obcaecati placeat modi accusantium consectetur veniam <br />
                            .Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br />
                            Incidunt soluta ea iure fugit. Aliquam perspiciatis, repudiandae <br />
                            quis id illum doloremque pariatur, tempora sed  ex <br />
                            obcaecati placeat modi accusantium consectetur veniam.Lorem <br />
                            ipsum dolor sit,amet consectetur adipisicing elit. Incidunt <br />
                            soluta ea iure fugit. Aliquam perspiciatis, repudiandae <br />
                            quis id illum doloremque pariatur, tempora sed  ex <br />
                            obcaecati placeat modi accusantium consectetur veniam.</p>

                    </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div>
                        <div>
                            <p className='font-bold text-4xl mb-20'>Meet our leaders</p>
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            <img src={Image} alt="" />
                            <div className='text-center w-full h-full px-4 py-6 rounded-lg shadow-xl'>
                                <p className='font-bold text-lg'>Kabagema Celestin</p>
                                <p>Founder and CEO</p>
                            </div>
                        </div><div>
                            <img src={Image} alt="" />
                            <div className='text-center w-full h-full px-4 py-6 rounded-lg shadow-xl'>
                                <p className='font-bold text-lg'>Kabagema Celestin</p>
                                <p>Founder and CEO</p>
                            </div>
                        </div><div>
                            <img src={Image} alt="" />
                            <div className='text-center w-full h-full px-4 py-6 rounded-lg shadow-xl'>
                                <p className='font-bold text-lg'>Kabagema Celestin</p>
                                <p>Founder and CEO</p>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Aboutus