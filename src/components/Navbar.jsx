import { useEffect } from 'react';

export const Navbar = ({menuOpen, setMenuOpen}) => {
    
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
    }, [menuOpen]);


    return (
    <nav className="fixed top-0 w-full z-40 bg-[#1B262C] border-b border-white/10 shadow-lg">
        <div className='mx-auto px-6'>
            <div className='flex justify-between items-center h-16'>
                <a href='#home' className='font-mon font-bold text-[#F5EFE7]'>OG</a>

                <div className='w-7 h-5 relative cursor-pointer z-40 md:hidden flex items-center justify-center text-[#F5EFE7] text-2xl' onClick={() => setMenuOpen(!menuOpen)}>
                    &#9776;
                </div>

                <div className='hidden md:flex items-center space-x-8'>
                    <a href='#home' className='text-[#F5EFE7] hover:text-[#D8C4B6] transition-colors'>Home</a>
                    <a href='#about' className='text-[#F5EFE7] hover:text-[#D8C4B6] transition-colors'>About</a>
                    <a href='#projects' className='text-[#F5EFE7] hover:text-[#D8C4B6] transition-colors'>Projects</a>
                    <a href='#contact' className='text-[#F5EFE7] hover:text-[#D8C4B6] transition-colors'>Contact</a>
                </div>
            </div>
        </div>
    </nav>
    )
}