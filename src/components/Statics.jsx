import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
        }
    ];
    return (
        <section className='my-4 container mx-auto px-2 sm:px-0'>
            <h2 className='text-3xl font-bold text-center'>
                My Statics
            </h2>
        </section>
    )
}

export default Statics