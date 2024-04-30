import React from "react";
import Image from "../../Img/image.jpg";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <section id="About">
             <div className="h- ml-12">
            <p className="flex justify-center items-center mt-10 text-4xl font-bold">About Us</p>
            <div className="mt-10">
                <div className="flex flex-row gap-32">
                    <div className="flex flex-col">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
                            <br /> eveniet fuga atque, minus dolorem iste recusandae
                            perspiciatis temporibus ullam officia
                            <br />
                            excepturi nobisaccusantium dolore accusamus nisi, cumque dicta
                            blanditiis
                            <br />
                            laborum? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            <br />
                            Molestiae eveniet fuga atque,minus dolorem iste recusandae
                            perspiciatis
                            <br />
                            temporibus ullam officia excepturi nobis accusantium dolore
                            accusamus nisi,
                            <br /> cumque dicta blanditiis laborum?
                        </p>
                        <Link to='/Aboutus'> 
                        <button className="px-9 py-3 bg-blue-500 text-white rounded-lg hover:-translate-y-3 hover:bg-blue-600 duration-300 mt-10">About Us</button>
                        </Link>
                                            </div>
                    <div>
                        <div className="flex flex-row">
                            <img className="w-56 h-5/6 rounded-l-full" src={Image} alt="" />
                            <img className="w-56 h-5/6" src={Image} alt="" />
                        </div>
                        <div className="flex flex-row">
                            <img className="w-56 h-5/6" src={Image} alt="" />
                            <img className="w-56 h-5/6" src={Image} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </section>
    );
};

export default About;
