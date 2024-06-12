import { useNavigate } from 'react-router-dom';

const Con3RewardNon = () => {
    const navigate = useNavigate();
    return (
        <div className="Member non">
            <div className="reward-icon">
                <img src="./images/main/con3Logo.png" alt="starbucks reward" />
            </div>
            <div className="reward-text">
                <h4>
                    스타벅스만의 특별한 혜택, <span>스타벅스 리워드</span>
                </h4>
                <p>
                    <span>스타벅스 회원이세요? </span>로그인을 통해 나만의 리워드를 확인해보세요.
                </p>
                <p>
                    <span>스타벅스 회원이 아니세요? </span> 가입을 통해 리워드 혜택을 즐기세요.
                </p>
                <p className="btn">
                    <button className="on" onClick={() => navigate('/join')}>
                        회원가입
                    </button>
                    <button onClick={() => navigate('/login')}>로그인</button>
                </p>
            </div>
        </div>
    );
};

export default Con3RewardNon;
