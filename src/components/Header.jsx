import React, { useState } from 'react'

function Header() {
    const [menu, setMenu] = useState(false);

    return (
        <div className='fixed top-3 w-full px-4 z-50'>
            <header className='container mx-auto p-4 bg-zinc-800 rounded-lg hidden lg:flex items-center justify-between shadow-2xl'>
                <h2 className='text-xl font-bold'>
                    Aliakbar Nazemi
                </h2>
                <div className="flex gap-6 items-center">
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
            </header>

            <header className='container mx-auto p-4 bg-zinc-800 rounded-lg flex lg:hidden items-center justify-between'>
                <h2 className='text-xl font-bold'>
                    Aliakbar Nazemi
                </h2>
                <div className="flex gap-6 items-center">
                    {menu === true ? <span className='cursor-pointer transition' onClick={() => setMenu(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                        </svg>
                    </span> : <span className='cursor-pointer transition' onClick={() => setMenu(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                        </svg>
                    </span>}
                </div>
            </header>

            {menu === true ? <header className='w-full bg-zinc-700 mt-4 transition rounded-lg p-4 flex flex-col gap-4'>
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
            </header> : <header></header>}
        </div>

    )
}

export default Header