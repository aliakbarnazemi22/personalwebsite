import React from 'react'

function MyProjects() {
    const cards = [
        {
            id: 1,
            title: 'revayate farda website',
            desc: 'when i was worked on iran samaneh',
            link:'https://revayatefarda.ir'
        },
        {
            id: 2,
            title: 'eghtesade moaser website',
            desc: 'when i was worked on iran samaneh',
            link:'https://eghtesademoaser.ir'
        },
        {
            id: 3,
            title: 'My Persoanl website',
            desc: 'Designing my personal website using React and Tailwind for styling the site.',
            link:'https://aliakbarnazemi.ir'
        },
    ]
    return (
        <section className='container mx-auto my-6'>
            <div className="flex justify-between items-center">
                <h2 className='text-3xl font-bold text-start ml-3'>
                    My Projects
                </h2>

                <a href="/projects" className='text-lg font-[300] flex items-center gap-2 mr-3'>
                    more projects
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                </a>
            </div>
            <div className='mt-1 flex items-center flex-wrap'>
                {cards.map((card) => (
                    <div className='w-full md:w-1/2 lg:w-1/3 p-3'>
                        <div id={card.id} className="w-full bg-zinc-700 shadow rounded-lg p-4 text-start min-h-[180px] flex flex-col justify-center gap-4">
                            <h3 className="text-2xl font-bold mt-2 leading-[1.6]">{card.title}</h3>
                            <p className='text-lg font-[500]v text-start line-clamp-1'>
                                {card.desc}
                            </p>
                            <div>
                                <a href={card.link} target='_blank' rel='norefferer'>
                                    <button className='p-3 bg-zinc-800 rounded-lg'>
                                        show project
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default MyProjects