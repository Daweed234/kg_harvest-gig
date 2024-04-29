import React from "react";
import { MoveRight } from "lucide-react";

const Home = () => {
    return (
        <>
            <div className=" h- w-full ">
                <div className="flex flex-col ml-12 mt-16">
                    <p className="text-[64px] font-medium">
                        Get Your Stuff <br />
                        Area Cleaned
                    </p>
                    <p></p>
                    <div className=" flex flex-row gap-2 mt-5">
                        <button className="px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg hover:-translate-y-3 duration-300">
                            Contact Us
                        </button>
                        <div className="hover:-translate-y-3 duration-300 flex flex-row">
                            <button className="px-5 py-3 text-black rounded-lg ">
                                What we offer
                            </button>
                            <MoveRight className="mt-3 w-6" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-center gap-52 bg-blue-500 h-36 mt-36">
                <div className="flex flex-col items-center">
                        <p className="text-white font-medium text-2xl">870</p>
                        <p className="text-white">Workers</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-white font-medium text-2xl">100+</p>
                        <p className="text-white">Companies</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-white font-medium text-2xl">1</p>
                        <p className="text-white">Headquaters</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-white font-medium text-2xl">3</p>
                        <p className="text-white">Admins</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
