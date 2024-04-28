import React from "react";
import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import { Instagram } from "lucide-react";

const Footer = () => {
    return (
        <>
            <div className=" bg-gray-500 mt-10">
                <div className="text-center justify-center px-5 py-5 text-[#111]">
                    <div>
                        <p className="text-2xl font-bold">KG Harvest</p>
                        <p>Tag line</p>
                    </div>
                    <div>
                        <ul className="flex flex-row justify-center items-center gap-10">
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="flex flex-row text-center justify-center">
                        <Facebook />
                        <Twitter />
                        <Instagram />
                    </div>
                    <div>
                        <p>
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
