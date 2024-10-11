import React from "react";
import profile from "../Assets/pfp.jpg"

const About = () => {
    return (
        <section id="about" className="bg-gradient-to-b from-black via-gray-500 to-fuchsia-500">
            <div className="container mx-auto text-center px-6">
                <h2 className="text-4xl font-bold pt-20 mb-8 text-white neon-text">
                    About Me
                </h2>
                <div className="flex flex-col items-center mb-12">
                    <img src={`${profile}`} alt="Profile gwecj" className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg"/>
                    <p className="text-lg text-white mb-2">Just an Ordinary Student</p>
                    <p className="text-lg text-white font-semibold">"There is always one more bug to fix"</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-fuchsia-200 transition-colors duration-300">
                        <h3 className="text-2xl font-bold mb-4 text-fuchsia-500">IoT</h3>
                        <p className="gray-700 mb-4">I am a student from SMKN 8 SEMARANG</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-fuchsia-200 transition-colors duration-300">
                        <h3 className="text-2xl font-bold mb-4 text-fuchsia-500">Programming Language</h3>
                        <p className="gray-700 mb-4">I understand several programming languages ​​such as Java, Java Script, Tailwind, Dart</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-fuchsia-200 transition-colors duration-300">
                        <h3 className="text-2xl font-bold mb-4 text-fuchsia-500">Follow Me</h3>
                        <p className="gray-700 ">Instagram : @Its_Rifqi</p>
                        <p className="gray-700 ">Github : @Rifqiww</p>
                    </div>
                </div>
                <p className="text-lg text-white mt-10">
                    I also do several things to entertain myself, such as being a content creator
                </p>
            </div>
        </section>
    )
}

export default About