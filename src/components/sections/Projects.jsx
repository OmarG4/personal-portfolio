
export const Projects = () => {

    return (
        <section id='projects' className='min-h-screen flex items-center justify-center py-20'>

            <div className='max-w-5xl mx-auto ps-4'>
                <h2 className='text-3xl font-bold mb-8 text-center'>Projects</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                    <div className='p-6 rounded-xl border border-[#213555] hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_#3E5879] transition-all'>
                        <h3 className='text-xl font-bold mb-2'>PC Builder</h3>
                        <p className='mb-4'>Developed a web application to provide custom PC build recommendations with real-time pricing and inventory data.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Node.js", "SQL", "RESTful APIs", "Express.js"].map((tech, key) => (
                                <span key={key} 
                                    className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_#3E5879] transition cursor-default
                                    '>
                                  {tech}
                              </span>
                            ))}
                        </div>

                        <div className='flex justify-between items-center'>
                            <a href='' className='hover:text-blue-300 transition-colors my-4'> View Project &rarr; </a>
                        </div>
                    </div>

                    <div className='p-6 rounded-xl border border-[#213555] hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_#3E5879] transition-all'>
                        <h3 className='text-xl font-bold mb-2'>UFC Discord Bot</h3>
                        <p className='mb-4'>Created a Discord bot that provides real-time MMA fighter stats through custom user commands and live data integration.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Python", "Discord.py", "SQL", "RESTful APIs"].map((tech, key) => (
                                <span key={key} 
                                    className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_#3E5879] transition cursor-default
                                    '>
                                  {tech}
                              </span>
                            ))}
                        </div>

                        <div className='flex justify-between items-center'>
                            <a href='' className='hover:text-blue-300 transition-colors my-4'> View Project &rarr; </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}