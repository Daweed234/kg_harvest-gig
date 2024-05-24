import React from "react";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Man from "../Img/Man.jpeg";
import Footer from "../Components/Home/Footer";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import Bg from "../Img/Bg.jpeg";
import Water from "../Img/water.jpeg";

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="w-full">
                <div>
                    <div className="flex flex-col ml-12 mt-16">
                        <p className="text-[64px] sm:text-[40px] font-medium">
                            Get Your Stuff <br />
                            Area Cleaned
                        </p>
                        <div className=" flex flex-row gap-2 mt-5">
                            <button className="px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg hover:-translate-y-3 duration-300">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-center md:gap-20 gap-52 bg-blue-500 h-36 mt-36">
                    <div className="flex gap-52 md:grid md:gap-4">
                        <div className=" justify-start flex flex-col items-center">
                            <p className="text-white font-medium text-2xl">870</p>
                            <p className="text-white">Workers</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="text-white font-medium text-2xl">100+</p>
                            <p className="text-white">Companies</p>
                        </div>
                    </div>
                    <div className="flex gap-52 md:grid md:gap-4">
                        <div className="flex flex-col items-center">
                            <p className="text-white font-medium text-2xl">1</p>
                            <p className="text-white">Headquater</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="text-white font-medium text-2xl">3</p>
                            <p className="text-white">Admins</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-12 py-10">
                {/* Left */}

                <div>{/* <img src={ } alt="" /> */}</div>

                {/* Right */}
            </div>

            <div className="flex gap-32 md:gap-10 md:flex-col">
                <div>
                    <img
                        src={Water}
                        className=" w-96 h-96 ml-32 md:ml-8 md:w-72 md:h-72 rounded-xl"
                        alt=""
                    />
                </div>
                <div className="">
                    <p className="font-semibold px-12 text-3xl">Who we are</p>
                    <p className="text-sm py-8 px-12">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                        itaque <br />
                        amet magnam et accusamus fugiat aliquid adipisci beatae excepturi
                        sit.
                        <br />
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                        itaque <br />
                        amet magnam et accusamus fugiat aliquid adipisci beatae excepturi
                        sit.
                        <br />
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                        itaque <br />
                        minima sapiente natus, earum inventore quis, necessitatibus hic aut,
                        id <br />
                        amet magnam et accusamus fugiat aliquid adipisci beatae excepturi
                        sit.
                        <br />
                    </p>
                </div>
            </div>

            <div className="flex md:flex-col md:gap-10 md: gap-32 px-24 mt-20 mb-20">
                <div className="">
                    <p className="font-semibold px-12 text-3xl">What we offer</p>
                    <p className="text-sm py-8 px-12">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                        itaque <br />
                        amet magnam et accusamus fugiat aliquid adipisci beatae excepturi
                        sit.
                        <br />
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                        itaque <br />
                        amet magnam et accusamus fugiat aliquid adipisci beatae excepturi
                        sit.
                        <br />
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                        itaque <br />
                        minima sapiente natus, earum inventore quis, necessitatibus hic aut,
                        id <br />
                        amet magnam et accusamus fugiat aliquid adipisci beatae excepturi
                        sit.
                        <br />
                    </p>
                </div>
                <div>
                    <img src={Water} className=" w-96 h-96 rounded-xl" alt="" />
                </div>
            </div>

            <div className="flex flex-col justify-center items-center mb-32">
                <div>
                    <div>
                        <p className="font-semibold text-2xl mb-3 mt-10 px-10">
                            Meet our leaders
                        </p>
                        <p className="text-sm mb-10">
                            Lor At et officia beatae ipsa, quidem <br />
                            dicta voluptates, volu dolorum error?
                        </p>
                    </div>
                </div>
                <div className="flex gap-10">
                    <div className="grid gap-4 items-center">
                        <img
                            className="w-56 h-56 border-slate-300 border-4 rounded-full"
                            src={Man}
                            alt=""
                        />
                        <div className="text-center w-72 h-20 rounded-lg bg-blue-300 shadow-md hover:shadow-2xl duration-300">
                            <p className="font-bold text-base mt-3">Kabagema Celestin</p>

                            <p>Founder and CEO</p>
                        </div>
                    </div>
                    <div className="grid gap-4 items-center">
                        <img
                            className="w-56 h-56 border-slate-300 border-4 rounded-full"
                            src={Man}
                            alt=""
                        />
                        <div className="text-center w-72 px-4 py-6 rounded-lg shadow-md hover:shadow-2xl duration-300 bg-blue-300">
                            <p className="font-bold text-base">Kabagema Celestin</p>
                            <p>Founder and CEO</p>
                        </div>
                    </div>
                    <div className="grid gap-4 items-center">
                        <img
                            className="w-56 h-56 border-slate-300 border-4 rounded-full"
                            src={Man}
                            alt=""
                        />
                        <div className="text-center w-72 px-4 py-6 rounded-lg bg-blue-300 shadow-md hover:shadow-2xl duration-300">
                            <p className="font-bold text-base">Kabagema Celestin</p>
                            <p>Founder and CEO</p>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>

            <div>
                <div>
                    <p className="text-4xl flex text-center justify-center items-center mb-10 mt-24">
                        Services
                    </p>
                    <p className="text-center">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
                        assumenda sit quas eaque omnis accusamus <br />
                        magnam, quod tempora voluptas blanditiis? Doloribus voluptatem
                        eligendi commodi ad nam officia ex, officiis distinctio?
                    </p>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row gap-9 m-7">
                        <div className=" w-full px-4 py-6 rounded-lg bg-blue-300 shadow-xl">
                            <p className="font-bold text-lg mb-3">General Cleaning</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.Magnam
                                consequatur tenetur minus nisi officiis, veritatis quas{" "}
                            </p>
                        </div>
                        <div className=" w-full px-4 py-6 rounded-lg bg-blue-300 shadow-xl">
                            <p className="font-bold text-lg mb-3">Mopping</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.Magnam
                                consequatur tenetur minus nisi officiis, veritatis quas{" "}
                            </p>
                        </div>
                        <div className=" w-full px-4 py-6 rounded-lg bg-blue-300 shadow-xl">
                            {/* <Mop /> */}
                            <p className="font-bold text-lg mb-3">Sweeping</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.Magnam
                                consequatur tenetur minus nisi officiis, veritatis quas{" "}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-9 m-7">
                        <div className=" w-full px-4 py-6 rounded-lg bg-blue-300 shadow-xl">
                            <p className="font-bold text-lg mb-3">Laundry</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.Magnam
                                consequatur tenetur minus nisi officiis, veritatis quas{" "}
                            </p>
                        </div>
                        <div className=" w-full px-4 py-6 rounded-lg bg-blue-300 shadow-xl">
                            <p className="font-bold text-lg mb-3">Sanitizaton</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.Magnam
                                consequatur tenetur minus nisi officiis, veritatis quas{" "}
                            </p>
                        </div>
                        <div className=" w-full px-4 py-6 rounded-lg bg-blue-300 shadow-xl">
                            <p className="font-bold text-lg mb-3">Deep Cleaning</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.Magnam
                                consequatur tenetur minus nisi officiis, veritatis quas{" "}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-9 m-7">
                        <div className=" w-full px-4 py-6 rounded-lg bg-blue-300 shadow-xl">
                            <p className="font-bold text-lg mb-3">Garden Maintainance</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.Magnam
                                consequatur tenetur minus nisi officiis, veritatis quas{" "}
                            </p>
                        </div>
                        <div className=" w-full px-4 py-6 rounded-lg bg-blue-300 shadow-xl">
                            <p className="font-bold text-lg mb-3">
                                Hygiene technique training
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.Magnam
                                consequatur tenetur minus nisi officiis, veritatis quas{" "}
                            </p>
                        </div>
                        <div className=" w-full px-4 py-6 rounded-lg bg-blue-300 shadow-xl">
                            <p className="font-bold text-lg mb-3">Groundskeeping</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.Magnam
                                consequatur tenetur minus nisi officiis, veritatis quas{" "}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-9 m-7">
                        <div className=" w-full px-4 py-6 rounded-lg bg-blue-300 shadow-xl">
                            <p className="font-bold text-lg mb-3">Dusting</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.Magnam
                                consequatur tenetur minus nisi officiis, veritatis quas{" "}
                            </p>
                        </div>
                        <div className=" w-full px-4 py-6 rounded-lg bg-blue-300 shadow-xl">
                            <p className="font-bold text-lg mb-3">Trash Removal</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.Magnam
                                consequatur tenetur minus nisi officiis, veritatis quas{" "}
                            </p>
                        </div>
                        <div className=" w-full px-4 py-6 rounded-lg bg-blue-300 shadow-xl">
                            <p className="font-bold text-lg mb-3">Vacuming</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.Magnam
                                consequatur tenetur minus nisi officiis, veritatis quas{" "}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-9 m-7">
                        <div className=" w-[420px] px-4 py-6 rounded-lg bg-blue-300 shadow-xl">
                            <p className="font-bold text-lg mb-3">Landscaping care</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.Magnam
                                consequatur tenetur minus nisi officiis, veritatis quas{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center items-center justify-center mt-32 mb-20">
                <p className="text-2xl font-bold">CONTACT US</p>
                <p className="text-sm mt-10">
                    {" "}
                    amet consectetur, adipisicing elit. Exercitationem ut repellat beatae
                    numquam aut <br /> veniam officia architecto quis eos eaque? Totam
                    cumque, sit a consequuntur magni molestias?{" "}
                </p>
            </div>
            <div className="flex justify-center items-center gap-10 mt-12">
                <div className="flex flex-col items-center justify-center px-4 py-5 rounded-lg mt-5 shadow-md hover:shadow-2xl duration-300">
                    <FiMapPin className=" text-6xl" />
                    <p className="font-bold mt-2">Visit Us</p>
                    <p className="text-[12px] mt-2 mb-1 text-center">
                        Lorem ipsum dolor sit elit. At, enim <br />
                        Lorem ipsum dolor sit a <br />
                    </p>
                    <p className="text-sm font-semibold text-blue-500">
                        Remera-Kisimenti-Kigali
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center px-4 py-5 rounded-lg mt-5 shadow-md hover:shadow-2xl duration-300">
                    <FiPhone className="text-6xl" />
                    <p className="font-bold mt-2">Call Us</p>
                    <p className="text-[12px] mt-2 mb-1 text-center">
                        Lorem ipsum dolor sit elit. At, enim <br />
                        Lorem ipsum dolor sit a <br />
                    </p>
                    <p className="text-sm font-semibold text-blue-500">
                        +250 788 301 879
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center px-4 py-5 rounded-lg mt-5 shadow-md hover:shadow-2xl duration-300">
                    <FiMail className=" text-6xl" />
                    <p className="font-bold mt-2">Mail Us</p>
                    <p className="text-[12px] mt-2 mb-1 text-center">
                        Lorem ipsum dolor sit elit. At, enim <br />
                        Lorem ipsum dolor sit a <br />
                    </p>
                    <p className="text-sm font-semibold text-blue-500">
                        kgharvestcoltd@gmail.com
                    </p>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Home;
