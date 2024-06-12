// My프리퀀시 아코디언
import { useSelector } from 'react-redux';
import Barcode from './Barcode.jsx';
import MyFrequencyDate from './MyFrequencyDate.jsx';
import { MyFrequencyLi, OverlayWrap } from './MyStabucksStyle.js';
import { useDispatch } from 'react-redux';
import { onToggle } from '../../store/modules/myStarbucksSlice.js';

const MyFrequency = () => {
    const dispatch = useDispatch();
    const { user, isShow } = useSelector((state) => state.myStar);
    const {
        nickName,
        myReward: { stars, frequency },
    } = user;

    // 스티커 계산
    const freStikers = frequency > 3 ? 3 : frequency;
    const nonFreStikers = stars - ((frequency > 3 ? 3 : frequency) > 14) ? 14 : stars;
    const completeStikers = nonFreStikers + freStikers >= 17 ? 1 : 0;

    // 스티커 노출하기
    const freArr = [...Array(freStikers)];
    const nonFreArr = [...Array(nonFreStikers)];

    // 시간대 계산
    const now = new Date();
    const hours = now.getHours();

    return (
        <MyFrequencyLi className={isShow.isFre === true ? 'on' : ''}>
            {isShow.isBarcode && (
                <OverlayWrap>
                    <Barcode />
                </OverlayWrap>
            )}
            <strong className="acd-name">
                My e - 프리퀀시<i className="xi-angle-up" onClick={() => dispatch(onToggle({ key: 'isFre' }))}></i>
            </strong>
            <div className="acd-in">
                <div className={`frequency ${hours >= 18 || hours < 6 ? 'black' : ''}`}>
                    <div className="stikers">
                        <span>
                            <img src="./images/myStarbucks/stiker_mission_on.png" alt="일반음료" />
                            <b>x{freStikers}</b>
                        </span>
                        <i className="xi-plus"></i>
                        <span>
                            <img src="./images/myStarbucks/stiker_mission.png" alt="일반음료" />
                            <b>x{nonFreStikers}</b>
                        </span>

                        <i className="xi-angle-right-min"></i>
                        <span>
                            <img src="./images/myStarbucks/stiker_mission_goal.png" alt="일반음료" />
                            <b>x{completeStikers}</b>
                        </span>
                    </div>

                    <div className={`explan ${!isShow.isShowEx ? 'off' : ''}`}>
                        <i className="xi-angle-up-min" onClick={() => dispatch(onToggle({ key: 'isShowEx' }))}></i>
                        <div className="event-explan">
                            <MyFrequencyDate />
                            <div>
                                e-프리퀀시를 통해{' '}
                                <b>
                                    미션 음료 3잔 포함 총 17잔의 음료를 <br />
                                    구매
                                </b>
                                하시면 스타벅스 라이트 레인 판초, 라이트 우산 또는 투웨이 파우치를 드립니다. (7종 중 택 1, 한정 수량) <br />
                                *예약 후 매장 방문 시 수령 가능
                            </div>
                        </div>
                    </div>
                </div>
                <span className="stiker-bg">
                    <p className="barcode" onClick={() => dispatch(onToggle({ key: 'isBarcode' }))}>
                        바코드
                    </p>
                    <div className="drink-stikers">
                        <ul>
                            {freArr.map((_, i) => (
                                <li key={i}>
                                    <img src="./images/myStarbucks/stiker_mission_on.png" alt="" />
                                </li>
                            ))}
                        </ul>
                        <ul>
                            {nonFreArr.map((_, i) => (
                                <li key={i}>
                                    <img src="./images/myStarbucks/stiker_mission.png" alt="" />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <img src={`./images/myStarbucks/${hours >= 18 || hours < 6 ? 'B_B1' : 'W_B1'}.gif`} alt="" />
                </span>
            </div>
        </MyFrequencyLi>
    );
};

export default MyFrequency;
