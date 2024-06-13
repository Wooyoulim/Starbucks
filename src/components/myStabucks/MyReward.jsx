// My리워드 아코디언
import { useDispatch, useSelector } from 'react-redux';
import { MyRewardLi } from './MyStabucksStyle.js';
import { useEffect } from 'react';
import { onToggle, rewards } from '../../store/modules/myStarbucksSlice.js';

const MyReward = () => {
    const { user, level, isShow } = useSelector((state) => state.myStar);

    const dispatch = useDispatch();
    const {
        nickName,
        myReward: { stars },
    } = user;

    useEffect(() => {
        dispatch(rewards({ stars }));
    }, [stars]);

    return (
        <MyRewardLi className={isShow.isReward === true ? 'on' : ''}>
            <strong className="acd-name">
                My 리워드
                <i className="xi-angle-up" onClick={() => dispatch(onToggle({ key: 'isReward' }))}></i>
            </strong>
            <div className="acd-in">
                <div>
                    <em>
                        <strong>{stars}</strong>
                        <img src="./images/myStarbucks/star_bg.png" alt="" />
                    </em>
                </div>
                <div>
                    <p>
                        <b className={`txt-bold `}> {nickName}</b>님은
                        <br /> 현재 <b className={`txt-bold ${level === 'Gold' ? 'gold' : level === 'Green' ? 'green' : 'gray'}`}>{level} Level</b>
                        이십니다.
                    </p>
                    {/* {level !== 'Gold' && (
                        <span>
                            <b className="txt-bold ">{30 - stars}개</b>의 별★이 더 모이면
                            <br /> <b className={`txt-bold ` + `gold`}>Gold Level</b>만의 특별한 혜택이!
                        </span>
                    )} */}
                    {level === 'Gold' ? (
                        <span></span>
                    ) : level === 'Green' ? (
                        <span>
                            <b className="txt-bold ">{30 - stars}개</b>의 별★이 더 모이면
                            <br /> <b className={`txt-bold ` + `gold`}>Gold Level</b>만의 특별한 혜택이!
                        </span>
                    ) : (
                        <span>
                            <b className="txt-bold ">{5 - stars}개</b>의 별★이 더 모이면
                            <br /> <b className={`txt-bold ` + `green`}>Green Level</b>만의 특별한 혜택이!
                        </span>
                    )}
                </div>
            </div>
        </MyRewardLi>
    );
};

export default MyReward;
