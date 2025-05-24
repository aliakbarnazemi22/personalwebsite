import React from 'react'

function Projects() {
  const cards = [
    {
      id: 1,
      title: 'revayate farda website',
      desc: 'when i was worked on iran samaneh',
      link: 'https://revayatefarda.ir'
    },
    {
      id: 2,
      title: 'eghtesade moaser website',
      desc: 'when i was worked on iran samaneh',
      link: 'https://eghtesademoaser.ir'
    },
    {
      id: 3,
      title: 'My Persoanl website',
      desc: 'Designing my personal website using React and Tailwind for styling the site.',
      link: 'https://aliakbarnazemi.ir'
    },
    {
      id: 4,
      title: 'Aroosak kadeh website',
      desc: 'my freelance project and designing with wordpress and elementor',
      link: 'https://aroosakkadeh.ir'
    },
    {
      id: 5,
      title: 'Redesigning the Nike website.',
      desc: 'Redesigning the Nike website, specifically the homepage, using React and Tailwind for styling, and making it fully responsive.',
      link: 'https://github.com/aliakbarnazemi22/nike'
    }
  ]
  return (
    <div>
      <div className='md:px-0 px-4 container mx-auto mt-24 md:mt-32'>
        <section className='container mx-auto my-6'>
          <div className="flex justify-between items-center">
            <h2 className='text-3xl font-bold text-start ml-3'>
              My Projects
            </h2>
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
      </div>
    </div>)
}

export default Projects