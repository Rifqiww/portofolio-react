import React from "react";
import porto from "../Assets/porto.png";
import porto2 from "../Assets/porto2.png";
import porto3 from "../Assets/porto3.png";

const Projects = () => {
    return (
        <section id="Projects" className="py-20 bg-gradient-to-b from-fuchsia-500 via-gray-300 to-black">
            <div className="container mx-auto text-center">
                <h1 className="text-3xl font-bold mb-8 text-gray-800">My Project</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-5">
                    <div className="bg-gray-100 p-4 rounded">
                        <img src={porto} alt="projek1" className="w-full h-48 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold mb-2">Kunti Jump</h3>
                        <p className="text-gray-700">This website explains the game that I made with my developer team RAWRR GAMEDEV when I was in grade 10</p>

                    </div>

                    <div className="bg-gray-100 p-4 rounded">
                        <img src={porto2} alt="projek2" className="w-full h-48 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold mb-2">TukangKita.com</h3>
                        <p className="text-gray-700">Website about hiring construction workers to build a house</p>
                    </div>
        
                    <div className="bg-gray-100 p-4 rounded">
                        <img src={porto3} alt="projek3" className="w-full h-48 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold mb-2">BPR ARTO MORO</h3>
                        <p className="text-gray-700">Website and mobile application for transactions at BPR ARTO MORO bank</p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Projects