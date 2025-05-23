import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function MySkills() {
    const cards = [
        {
            id: 1,
            title: "HTML - CSS",
            value: 100
        },
        {
            id: 2,
            title: "JS",
            value: 95
        },
        {
            id: 3,
            title: "React JS",
            value: 95
        },
        {
            id: 4,
            title: "Tailwind CSS",
            value: 100
        }
    ];
    return (
        <section className='my-4 container mx-auto px-4 sm:px-0'>
            <div className="flex justify-between items-center">
                <h2 className='text-3xl font-bold text-start'>
                    My Skills
                </h2>

                <a href="/skills" className='text-lg font-[300] flex items-center gap-2'>
                    more skills
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                </a>
            </div>
            <br />
            <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                {cards.map((card) => (
                    <SwiperSlide key={card.id}>
                        <div className="bg-zinc-700 shadow rounded-lg p-4 text-center min-h-[180px] flex items-center flex-col justify-center gap-3">
                            <h3 className="text-2xl font-bold mt-2">{card.title}</h3>

                            <div className="relative w-[90%] h-[15px] bg-zinc-800 rounded-full">
                                <div className="absolute h-full bg-white rounded-lg top-0 left-0" style={{width : card.value + '%'}}></div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </section>
    )
}

export default MySkills