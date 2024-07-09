import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css'; 
import datainfo from './data/db.json';


const Banner = () => {
    return (
        <Swiper
            spaceBetween={50}
            loop={true}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
        >
            {
              datainfo.banner.map((v, i) => (
                  <SwiperSlide key={i} className={v.cls}>{v.atext}</SwiperSlide>
              ))
            }
        </Swiper>
    );
}

export default Banner;
