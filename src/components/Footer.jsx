import React from 'react'

function Footer() {
    return (
        <footer className='w-full bg-zinc-800 shadow-2xl py-6 mt-[80px]'>
            <div className="container mx-auto px-4 md:px-0">
                <div className="flex justify-between flex-col lg:flex-row gap-8 lg:gap-0">
                    <div className="div lg:w-[80%] w-full">
                        <h2 className='text-3xl font-bold'>
                            Aliakbar Nazemi
                        </h2>
                        <p className='mt-1 font-[300]'>
                            Front end Developer
                        </p>

                        <p className="mt-4 font-[200] leading-[2] pr-6">
                            © 2024 Ali Akbar Nazemi. All rights reserved.
                            All content on this website, including text, images, graphics, and design, is the exclusive property of Ali Akbar Nazemi and is protected under international copyright laws. Unauthorized reproduction, distribution, or modification of any material without prior written permission is strictly prohibited. For inquiries regarding the use of content, please contact the owner.
                            This website is for personal and non-commercial use only. By accessing this site, you agree to comply with all applicable copyright regulations.
                        </p>
                    </div>
                    <div className="w-full lg:w-[60%]">
                        <h4 className='text-3xl font-bold'>
                            Services
                        </h4>
                        <div className="flex flex-col gap-[10px] mt-4">
                            <a href="/" className='text-lg font-[400]'>
                                Home
                            </a>
                            <a href="/about" className='text-lg font-[400]'>
                                About
                            </a>
                            <a href="/skills" className='text-lg font-[400]'>
                                Skills
                            </a>
                            <a href="/projects" className='text-lg font-[400]'>
                                Projects
                            </a>
                            <a href="/contacts" className='text-lg font-[400]'>
                                Contacts
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer