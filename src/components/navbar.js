import React from "react";

const Navbar = () => {
    return(
        <nav className="fixed top-0 left-0 w-full bg-fuchsia-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-3xl font-bold">Rifqiww</h1>
                <div>
                    <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}className="text-gray-300 font-semibold hover:text-white mx-4 transition durasion-300">Home</button>
                    <a href="#about" className="text-gray-300 font-semibold hover:text-white mx-4 transition durasion-300">About</a>
                    <a href="#Projects" className="text-gray-300 font-semibold hover:text-white mx-4 transition durasion-300">Projects</a>
                    <a href="#contact" className="text-gray-300 font-semibold hover:text-white mx-4 transition durasion-300">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar; 