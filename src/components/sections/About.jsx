export const About = () => {

    const frontEndSkills = ["React", "TailWindCSS", "HTML", "CSS"];
    const backEndSkills = ["NodeJS", "Python", "C++", "Java"];

    return (
        <section  id='about' className='min-h-screen flex items-center justify-center py-20'>

            <div className='max-w-3xl mx-auto px-4'>
                <h2 className='text-3xl font-bold mb-8 text-[#F1EFEC] text-center'>About Me</h2>

                <div className='p-8 rounded-xl border border-[#213555] hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_#3E5879] transition-all'>
                    <p className='text-[#F1EFEC] mb-6'>Passionate develop with expertise in building scalable web applications and creating innovative solutions</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                            <h3 className='text-xl font-bold mb-4'>Frontend</h3>
                            <div className='flex flex-wrap gap-2'>
                                {frontEndSkills.map((tech, key) => (
                                    <span key={key} 
                                          className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_#3E5879] transition cursor-default
                                          '>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                            <h3 className='text-xl font-bold mb-4'>Backend</h3>
                            <div className='flex flex-wrap gap-2'>
                                {backEndSkills.map((tech, key) => (
                                    <span key={key} 
                                          className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_#3E5879] transition cursor-default
                                          '>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
                    <div className='p-6 rounded-xl border border-[#213555] hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_#3E5879] transition-all'>
                        <h3 className='text-xl font-bold mb-4'>Education</h3>
                        <ul className='list-disc list-inside text-[#F1EFEC] space-y-2'>
                            <li>
                                <strong>B.S. in Computer Science </strong> - Wayne State University (2023-2027)
                            </li>
                            <li>
                                <strong>Relevant Coursework:</strong> <br/>Programming and Computation: Python, Problem Solving and Programming, Fundamental
                                                    Structures in Computer Science, Computer Science I, Web Technology, Java Programming, Ethics in Computer Science,
                                                    Computer Science II, Probability and Statistics in Engineering

                            </li>
                        </ul>
                    </div>
                    <div className='p-6 rounded-xl border border-[#213555] hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_#3E5879] transition-all'>
                        <h3 className='text-xl font-bold mb-4'>Work Experience</h3>
                        <div className='space-y-4 text-[#F1EFEC]'>
                            <div>
                                <h4 className='font-semibold'>System Admin Intern at Atlantic Xchange(May - August 2024)</h4>
                                <ul className='list-disc list-inside text-[#F1EFEC] space-y-2'>
                                    <li>Managed the installation, configuration, and maintenance of computer systems, ensuring smooth operations and network performance</li>
                                    <li>Performed software updates, security patches, backups, and user account management to enhance security and system reliability</li>
                                    <li>Provided technical support and troubleshooting for hardware and software issues, minimizing downtime and increasing productivity</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
