import { useNavigate } from 'react-router-dom';
import { Visual } from './MainConStyles';

const MainVisual = () => {
    const navigate = useNavigate();
    return (
        <Visual className="mainVisual">
            <div className="imgText">
                <img src="./images/main/VisualText.png" alt="Light up Your Summer" />
                <p>
                    <button onClick={()=>navigate('/drinkMenu')}>자세히 보기</button>
                </p>
            </div>
            <div className="imgArea">
                <img src="./images/main/VisualItem1.png" alt="씨솔트 카라멜 콜드 브루" />
                <img src="./images/main/VisualItem2.png" alt="스타벅스 클래식 밀크티 블렌디드" />
                <img src="./images/main/VisualItem3.png" alt="더블 레몬 블렌디드" />
            </div>
        </Visual>
    );
};

export default MainVisual;
