import React from 'react'

function HeroSection() {
    return (
        <section className='w-full xl:h-[100vh] min-h-[115vh] sm:min-h-[140vh] md:min-h-[130vh] xl:min-h-[100vh] md:px-0 px-4 flex xl:flex-row flex-col items-center container mx-auto justify-center gap-12'>
            <img src="images/Profile.webp" alt="" className='rounded-full border-[10px] border-zinc-800 shadow-xl' />
            <div className="xl:w-1/2 w-full">
                <h2 className='text-3xl font-bold'>
                    Aliakbar Nazemi
                </h2>
                <p className='mt-1 font-[200]'>
                    Front end Developer
                </p>

                <p className='mt-4 text-lg font-[300] leading-[1.7]'>
                    <div className="sm:line-clamp-6 line-clamp-3">
                        About Me: Greetings! I'm Aliakbar Nazemi, a passionate 21-year-old front-end web developer hailing from the vibrant land of Iran. I embark on a journey through the ever-evolving digital landscape, weaving my dreams into the fabric of the World Wide Web.
                    </div>
                    <div className="sm:block hidden">
                        <br />
                    </div>
                    <div className="sm:block hidden">
                        My Journey: My fascination with technology ignited at an early age, propelling me towards the captivating realm of web development. As a self-taught enthusiast, I've delved into the intricacies of front-end technologies, mastering the art of crafting visually appealing and seamless user experiences.
                    </div>
                </p>

                <br />

                <a href="/about" className='mt-4'>
                    <button className='p-2 bg-blue-500 rounded-md transition2 scale-100 hover:scale-110 hover:bg-blue-600'>
                        About me
                    </button>
                </a>
            </div>
        </section>
    )
}

export default HeroSection