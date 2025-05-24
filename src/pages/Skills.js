import React from 'react'

function Skills() {
    const cards = [
        {
            id: 1,
            title: "HTML - CSS",
            value: 100
        },
        {
            id: 2,
            title: "Bootstrap CSS",
            value: 100
        },
        {
            id: 3,
            title: "Tailwind CSS",
            value: 100
        },
        {
            id: 4,
            title: "Java Script",
            value: 95
        },
        {
            id: 5,
            title: "React JS",
            value: 95
        },
        {
            id: 6,
            title: "Next JS",
            value: 95
        },
        {
            id: 7,
            title: "Swiper JS",
            value: 100
        },
        {
            id: 8,
            title: "Type Script",
            value: 70
        },
        {
            id: 9,
            title: "Git",
            value: 60
        }
    ];
    return (
        <div>
            <div className='md:px-0 px-4 container mx-auto mt-24 mb-8'>
                <h2 className='ml-3 text-3xl font-bold text-start'>
                    My Skills
                </h2>

                <div className='mt-1 flex items-center flex-wrap'>
                    {cards.map((card) => (
                        <div className='w-full md:w-1/2 lg:w-1/3 p-3'>
                            <div id={card.id} className="w-full bg-zinc-700 shadow rounded-lg p-4 text-center min-h-[180px] flex items-center flex-col justify-center gap-4">
                                <h3 className="text-2xl font-bold mt-2">{card.title}</h3>

                                <div className="relative w-[90%] h-[15px] bg-zinc-800 rounded-full">
                                    <div className="absolute h-full bg-white rounded-lg top-0 left-0" style={{ width: card.value + '%' }}></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills