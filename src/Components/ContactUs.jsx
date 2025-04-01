import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faClock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const contact = [
    { id: 1, title: "Phone Number", detail: "9801785849, 7004386572", icon: faPhone },
    { id: 2, title: "Email Address", detail: "dbmvidyamandir1@gmail.com", icon: faEnvelope },
    { id: 3, title: "Office Hour", detail: "Monday to Saturday: 8.30am – 03.00pm", icon: faClock }
];

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://dbm-vidya-mandir-backend.vercel.app/api/contact', formData);
            toast.success(response.data.message || 'Form submitted successfully!');
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch (error) {
            toast.error('Error submitting the form. Please try again.');
        }
    };

    return (
        <div className="w-full min-h-screen bg-[#FBF9F0] flex flex-col items-center">
            <ToastContainer position="top-right" autoClose={3000} />
            <h1 className='text-3xl md:text-5xl font-semibold text-[#081646] mt-8 md:mt-12'>Contact Us</h1>
            
            <div className="w-full min-h-auto rounded-t-[60px] md:rounded-t-[100px] flex flex-col md:flex-row items-center bg-[#ffffff] mt-8 md:mt-20 p-4 md:p-6">
                <div className="w-full h-auto p-10 flex flex-wrap justify-center gap-6">
                    {contact.map((contact) => (
                        <div key={contact.id} className="bg-[#F7F9FC] border rounded-2xl shadow-lg w-72 md:w-80 p-6 text-center flex flex-col items-center">
                            <div className="w-16 h-16 bg-[#FF6464] flex items-center justify-center rounded-full">
                                <FontAwesomeIcon icon={contact.icon} className="text-white text-2xl" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold text-[#081646] mt-4">{contact.title}</h3>
                            <p className="text-gray-600 text-md mt-2">{contact.detail}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full h-auto p-10 bg-[#ffcf55] rounded-t-[60px] md:rounded-t-[100px]">
                <h2 className="text-2xl md:text-4xl font-semibold text-center text-[#081646] mb-6">Get In Touch</h2>
                <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg">
                    <div className="mb-4">

                        <input 
                            type="text" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="w-full p-3 border rounded-md" 
                            required 
                        />
                    </div>
                    <div className="mb-4">
    
                        <input 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full p-3 border rounded-md" 
                            required 
                        />
                    </div>
                    <div className="mb-4">
    
                        <input 
                            type="text" 
                            name="phone" 
                            value={formData.phone} 
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                            className="w-full p-3 border rounded-md" 
                            required 
                        />
                    </div>
                    <div className="mb-4">
            
                        <textarea 
                            name="message" 
                            value={formData.message} 
                            onChange={handleChange}
                            placeholder="Type your message here..."
                            className="w-full p-3 border rounded-md" 
                            required 
                        />
                    </div>
                    <button type="submit" className="w-full bg-[#ff6464] text-white py-3 rounded-md hover:bg-red-500 cursor-pointer">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
