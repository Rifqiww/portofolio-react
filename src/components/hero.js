import React from "react";
import cover from '../Assets/cover.jpg';

const Hero = () => {
    return (
        <section className="bg-cover bg-center h-screen text-white"
        style={{backgroundImage:`url(${cover})`}}
        >
            <div className="bg-black bg-opacity-60 h-full flex flex-col justify-center items-center text-center p-6">
                <h2 className="text-5xl font-bold mb-4">Hello I'm Rifqiww</h2>
                <p className="text-2xl mb-8 text-progressive text-fuchsia-300">Software Developer</p>
                <a href="#Projects" className="bg-fuchsia-600 text-white hover:bg-fuchsia-300 hover:text-gray-900 font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300" >
                    Check This Out
                </a>
            </div>
            
        </section>
        
    )
}

export default Hero 