import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Maincon2Wrap } from './MainConStyles';

const Maincon2 = () => {
    return (
        <Maincon2Wrap>
            <div className="con2Wrap">
                <h3>스타벅스 프로모션 안내</h3>
                <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper">
                    <SwiperSlide>
                        <img src="./images/main/con2(1).jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./images/main/con2(2).jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./images/main/con2(1).jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./images/main/con2(2).jpg" alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </Maincon2Wrap>
    );
};

export default Maincon2;
