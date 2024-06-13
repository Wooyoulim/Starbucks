import { Maincon1Wrap } from './MainConStyles';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Mousewheel, Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

const Maincon1 = () => {
    const navigate = useNavigate();

    return (
        <Maincon1Wrap>
            <p>
                공지사항
                <Swiper
                    onClick={() => navigate('/notice')}
                    style={{ height: '60px' }}
                    direction={'vertical'}
                    slidesPerView={1}
                    spaceBetween={30}
                    mousewheel={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Mousewheel, Autoplay]}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <span>스타벅스 리워드 회원 웰컴 등급 혜택 조정 안내</span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <span>
                            시스템 개선 및 서비스 점검 안내 (신세계 유니버스 클럽, 신세계 포인트
                            관련)
                        </span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <span>홈페이지 이용약관 / 스타벅스 카드 이용약관 개정 안내</span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <span>영상정보처리기기 운영방침 / 개인정보처리방침 이용약관 개정 안내</span>
                    </SwiperSlide>
                </Swiper>
                <i onClick={() => navigate('/notice')} className="xi-plus-circle-o"></i>
            </p>
        </Maincon1Wrap>
    );
};

export default Maincon1;
