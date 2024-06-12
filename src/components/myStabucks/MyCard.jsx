// My카드 아코디언

import { useDispatch, useSelector } from 'react-redux';
import { MyCarddLi } from './MyStabucksStyle.js';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { onToggle, rechargeCard, updateCardNickname } from '../../store/modules/myStarbucksSlice.js';

const MyCard = () => {
    const { user, isShow } = useSelector((state) => state.myStar);
    const { myCard } = user;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [editCardId, setEditCardId] = useState(null);
    const [newNickName, setNewNickName] = useState('');

    const [rechargeCardId, setRechargeCardId] = useState(null);
    const [recharge, setRecharge] = useState(0);

    const onRecharge = (id) => {
        const amount = parseInt(recharge, 10);
        if (isNaN(amount) || amount < 0) {
            alert('충전 금액은 0 이상의 숫자여야 합니다.');
            return;
        }
        dispatch(rechargeCard({ id, amount }));
        setRechargeCardId(null);
        setRecharge(0);
    };
    const onEdit = (card) => {
        setEditCardId(card.id);
        setNewNickName(card.cardNicname);
    };
    const onSave = (id) => {
        dispatch(updateCardNickname({ id, newNickName }));
        setEditCardId(null);
    };

    return (
        <MyCarddLi className={isShow.isCard === true ? 'on' : ''}>
            <strong className="acd-name">
                My 스타벅스 카드<i className="xi-angle-up" onClick={() => dispatch(onToggle({ key: 'isCard' }))}></i>
            </strong>
            <div className="acd-in">
                <Swiper
                    pagination={{
                        type: 'fraction',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="cardSwiper"
                >
                    {user.myCard.length > 0 ? (
                        myCard.map((card) => (
                            <SwiperSlide key={card.id}>
                                <div className="card">
                                    <em>
                                        <img src={card.imgurl} alt="" />
                                    </em>
                                </div>
                                <div className="card-info">
                                    {editCardId === card.id ? (
                                        <>
                                            <p className="save-form">
                                                <input type="text" value={newNickName} onChange={(e) => setNewNickName(e.target.value)} />
                                                <i className="xi-check-min" onClick={() => onSave(card.id)}></i>
                                            </p>
                                        </>
                                    ) : (
                                        <strong onClick={() => onEdit(card)}>
                                            {card.cardNicname}
                                            <i className="xi-pen"></i>
                                        </strong>
                                    )}

                                    <em>
                                        <b className="txt-bold green">{card.recharge.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</b>원
                                    </em>
                                    {rechargeCardId === card.id ? (
                                        <>
                                            <p className="save-charge">
                                                <input type="number" value={recharge} onChange={(e) => setRecharge(e.target.value)} />
                                                <button onClick={() => onRecharge(card.id)}>충전</button>
                                            </p>
                                        </>
                                    ) : (
                                        <button onClick={() => setRechargeCardId(card.id)}>카드 충전하기</button>
                                    )}
                                </div>
                            </SwiperSlide>
                        ))
                    ) : (
                        <SwiperSlide>
                            <div className="no-card">
                                <em>
                                    <img src="./images/cards/ongoing/010846_WEB.png" alt="" />
                                </em>
                                카드를 등록하시면 나만의 카드를 사용할 수 있습니다.
                                <p>
                                    <button onClick={() => navigate('/card')}>카드 등록하기</button>
                                </p>
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </MyCarddLi>
    );
};

export default MyCard;
