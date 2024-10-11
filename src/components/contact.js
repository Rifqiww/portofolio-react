import React from "react";

const Contact = () => {
    return (
        <section id="contact" className="p-20 bg-black">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-8 text-white">Contact Me</h2>
                <p className="text-xl mb-4 text-white">Leave me a message</p>
                <a href="mailto:rifqinabil378@gmail.com" className=" p-5 bg-fuchsia-600 text-white hover:bg-fuchsia-300 hover:text-gray-900 font-bold py-2 rounded-lg shadow-md transition duration-300">
                    Send Mail
                </a>
            </div>
        </section>
    )
}

export default Contact