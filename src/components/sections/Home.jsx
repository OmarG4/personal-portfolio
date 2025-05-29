import { motion } from "framer-motion";

export const Home = () => {

    return (
    <motion.section
        id="home"
        className='min-h-screen flex items-center justify-center relative'
        initial={{ opacity: 0, y: 30 }}                // start hidden + slightly down
        whileInView={{ opacity: 1, y: 0 }}             // animate to visible + up
        viewport={{ once: true, amount: 0.2 }}         // trigger when 20% visible, only once
        transition={{ duration: 0.6, ease: 'easeOut' }} // tweak timing & easing
      >
            <div className="text-center z-10 px-4">

                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Hi, Im Omar Ghabbour</h1>
                
                <p className='text-lg mb-8 max-w-lg mx-auto'>
                    I'm a passionate web developer with a knack for creating dynamic and responsive web applications. 
                    I love coding and am always eager to learn new technologies.
                </p>

                <div className='flex justify-center space-x-4'>
                    <a href="#projects" className='bg-blue-500 text-white py-3 px-6 rounder font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_#3E5879]'>
                        View Projects
                    </a>
                    <a href="#contact" className='border border-blue-500/50 text-blue-500 py-3 px-6 rounder font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_#3E5879] hover:bg-blue-500/10'>
                        Contact Me
                    </a>
                </div>

            </div>
    </motion.section>
    )
}
