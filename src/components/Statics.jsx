import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function Statics() {
    const cards = [
        {
            id: 1,
            title: "Age",
            value: "+21 years old"
        },
        {
            id: 2,
            title: "My Job",
            value: "Front end Developer"
        },
        {
            id: 3,
            title: "Job Status",
            value: "Open to work"
        },
        {
            id: 4,
            title: "Live in",
            value: "Tehran , IR"
        }
    ];
    return (
        <section className='mt-4 mb-8 container mx-auto px-4 sm:px-0'>
            <h2 className='text-3xl font-bold text-start'>
                My Statics
            </h2>
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
                            <p className="text-lg font-[300]">{card.value}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <br />
            <br />
        </section>
    )
}

export default Statics