import React from 'react'
import Navbar from '../Components/Navbar'
import Image from '../Img/image.jpg'
// import { Facebook } from "lucide-react";
import Footer from '../Components/Home/Footer'
// import { Twitter } from "lucide-react";
// import { Instagram } from "lucide-react";

function Aboutus() {
    return (
        <>
            <Navbar />
            <div>
                <div className=''>
                    <div>
                        <p className='text-4xl flex text-center justify-center items-center mb-10 mt-64'>About Us</p>
                        <p className='text-center mb-32'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error assumenda sit quas eaque omnis accusamus <br />magnam, quod tempora voluptas blanditiis? Doloribus voluptatem eligendi commodi ad nam officia ex, officiis distinctio?</p>
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
                    <div className='flex justify-center gap-56 mb-36'>
                        <p className='font-bold text-4xl'>Our Profile</p>
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
                <div className='flex flex-col justify-center items-center mb-32'>
                    <div>
                        <div>
                            <p className='font-bold text-4xl mb-20'>Meet our leaders</p>
                        </div>
                    </div>
                    <div className="flex gap-10">
                        <div>
                            <img src={Image} alt="" />
                            <div className='text-center w-full px-4 py-6 rounded-lg bg-blue-300 shadow-xl'>
                                <p className='font-bold text-lg'>Kabagema Celestin</p>
                                <p>Founder and CEO</p>
                            </div>
                        </div>
                        <div>
                            <img src={Image} alt="" />
                            <div className='text-center w-full px-4 py-6 rounded-lg bg-blue-300 shadow-xl'>
                                <p className='font-bold text-lg'>Kabagema Celestin</p>
                                <p>Founder and CEO</p>
                            </div>
                        </div>
                        <div>
                            <img src={Image} className='' alt="" />
                            <div className='text-center w-full px-4 py-6 rounded-lg bg-blue-300 shadow-xl'>
                                <p className='font-bold text-lg'>Kabagema Celestin</p>
                                <p>Founder and CEO</p>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <Footer />

            </div>
        </>
    )
}

export default Aboutus