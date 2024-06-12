import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { rewards } from '../../store/modules/myStarbucksSlice';

const Con3Reward = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.authR);
    const { level } = useSelector((state) => state.myStar);

    const {
        nickName,
        myReward: { stars },
    } = user;

    useEffect(() => {
        dispatch(rewards({ stars }));
    }, [stars]);

    const navigate = useNavigate();
    return (
        <div className="Member">
            <div className="reward-icon">
                <div className="reward-icon star">
                    <img src="./images/main/star_bg.png" alt="starbucks reward" />
                    <span className="level">{stars}</span>
                </div>
            </div>
            <div className="reward-text">
                <h4>
                    <span>{nickName}</span>님의 현재{' '}
                    <b className={`txt-bold ${level === 'Gold' ? 'gold' : level === 'Green' ? 'green' : 'gray'}`}>{level} Level </b>이십니다.
                </h4>
                <p>
                    {level === 'Gold' ? (
                        <span></span>
                    ) : level === 'Green' ? (
                        <span>
                            <em className="txt-bold gold"> Gold level</em>이 되기까지 {30 - stars}의 별이 필요합니다.
                        </span>
                    ) : (
                        <span>
                            <em className="txt-bold green"> Green level</em>이 되기까지 {5 - stars}의 별이 필요합니다.
                        </span>
                    )}
                </p>

                <p className="btn">
                    <button onClick={() => navigate('/MyStabucks')}>리워드 및 혜택</button>
                </p>
            </div>
        </div>
    );
};

export default Con3Reward;
