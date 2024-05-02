import React from "react";
import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import { Instagram } from "lucide-react";

const Footer = () => {
    return (
        <>
            <div className=" bg-[#fff] shadow-xl  mt-10">
                <div className="text-center justify-center px-5 py-5 text-[#000]">
                    <div>
                        <p className="text-2xl font-bold hover:text-[#cacaca]">KG Harvest</p>
                        <p className=" hover:text-[#cacaca]">Tag line</p>
                    </div>
                    <div>
                        <ul className="flex flex-row justify-center items-center gap-10">
                            <li className=" hover:text-[#cacaca]">Home</li>
                            <li className=" hover:text-[#cacaca]">About</li>
                            <li className=" hover:text-[#cacaca]">Services</li>
                            <li className=" hover:text-[#cacaca]">Contact</li>
                        </ul>
                    </div>
                    <div className="flex flex-row text-center justify-center gap-5">
                       <Facebook className="hover:text-[#cacaca] hover:cursor-pointer" />
                        <Twitter className="hover:text-[#cacaca] hover:cursor-pointer" />
                        <Instagram className="hover:text-[#cacaca] hover:cursor-pointer" />
                    </div>
                    <div>
                        <p className=" hover:text-[#cacaca]">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
                            animi aliquam, <br /> sequi voluptatum eveniet ipsam ducimus, ea
                            iure aperiam quo asperiores doloremque dolore?
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
