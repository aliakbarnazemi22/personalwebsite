import React from 'react'

function WE() {
    const cards = [
        {
            id: 1,
            title: 'internship in iran samaneh company',
            desc: 'time : 3 months'
        },
        {
            id: 2,
            title: 'employment in iran samaneh company',
            desc: 'time : 6 months'
        },
        {
            id: 3,
            title: 'internship in ata technique company',
            desc: 'time : 1 month'
        },
    ]
    return (
        <section className='container mx-auto my-6'>
            <h2 className='text-3xl font-bold text-start ml-3'>
                Work Experiences
            </h2>
            <div className='mt-1 flex items-center flex-wrap'>
                {cards.map((card) => (
                    <div className='w-full md:w-1/2 lg:w-1/3 p-3'>
                        <div id={card.id} className="w-full bg-zinc-700 shadow rounded-lg p-4 text-start min-h-[180px] flex flex-col justify-center gap-8">
                            <h3 className="text-2xl font-bold mt-2 leading-[1.6]">{card.title}</h3>
                            <p className='text-lg font-[500]v text-start'>
                                {card.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default WE