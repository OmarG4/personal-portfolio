import emailjs from 'emailjs-com';
import { useState } from "react";

export const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            await emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY);
            alert("Message Sent!");
            setFormData({
                name: "",
                email: "",
                message: ""
            });
        } catch (error) {
            alert("Oops! Something went wrong. Please try again");
        }
    };
    
    
    return (
        <section id="contact" className='min-h-screen flex items-center justify-center py-20'>
            <div className='px-4 w-150'>
                <h2 className='text-3xl font-bold mb-8 text-center'>Get In Touch</h2>
                <form className='space-y-6' onSubmit={handleSubmit}>

                    <div className='relative'>
                        <input 
                            type='text' 
                            id='name' 
                            name='name' 
                            required
                            value={formData.name}
                            className='w-full bg-[#1B262C] border border-[#0F4C75] rounded-lg px-4 py-3 text-[#213555] placeholder-[#3E5879]/60 transition-colors duration-300 focus:outline-none focus:border-[#3E5879] focus:bg-[#D4C9BE] focus:ring-2 focus:ring-[#3E5879]/20'
                            placeholder='Name...'
                            onChange={(e) =>
                                setFormData({...formData, name: e.target.value})
                            }
                            />
                    </div>

                    <div className='relative'>
                        <input 
                            type='email' 
                            id='email' 
                            name='email' 
                            required
                            value={formData.email}
                            className='w-full bg-[#1B262C] border border-[#0F4C75] rounded-lg px-4 py-3 text-[#213555] placeholder-[#3E5879]/60 transition-colors duration-300 focus:outline-none focus:border-[#3E5879] focus:bg-[#D4C9BE] focus:ring-2 focus:ring-[#3E5879]/20'
                            placeholder='example@gmail.com'
                            onChange={(e) =>
                                setFormData({...formData, email: e.target.value})
                            }
                            />
                    </div>

                    <div className='relative'>
                        <textarea 
                            id='message' 
                            name='message' 
                            required
                            rows={5}
                            value={formData.message}
                            className='w-full bg-[#1B262C] border border-[#0F4C75] rounded-lg px-4 py-3 text-[#213555] placeholder-[#3E5879]/60 transition-colors duration-300 focus:outline-none focus:border-[#3E5879] focus:bg-[#D4C9BE] focus:ring-2 focus:ring-[#3E5879]/20'
                            placeholder='Your Message...'
                            onChange={(e) =>
                                setFormData({...formData, message: e.target.value})
                            }
                            />
                    </div>

                    <button type='submit'
                            className='w-full bg-blue-500/10 text-blue-500 py-3 px-6 rounded-lg font-medium transition-all hover:-translate-y-1 hover:border-blue-500/20 hover:shadow-[0_2px_8px_#3E5879] cursor-pointer'
                    >                                                                                       
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    )
}