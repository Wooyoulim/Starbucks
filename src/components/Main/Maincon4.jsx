import { Maincon4Wrap } from './MainConStyles';
import { useNavigate } from 'react-router-dom';

const Maincon4 = () => {
    const navigate = useNavigate();
    return (
        <Maincon4Wrap>
            <div className="inner">
                <div className="bgPic">
                    <img src="./images/main/coffeBg.png" alt="커피 소개 이미지1" />
                    <img src="./images/main/coffeeItem.png" alt="커피 소개 이미지2" />
                </div>
                <div className="explain">
                    <h4 className="mainT">
                        스타벅스 만의 특별함을 경험할 수 있는 <br />
                        최상의 선택, 음료
                    </h4>
                    <p className="infoT">
                        케냐, 하우스 블렌드 등 약간의 산미가 있는 커피를 <br />
                        드립 방식으로 추출하여 제공하는 커피 입니다. <br />
                        <br />
                        아이스 커피로 적합한 프리미엄 원두를 이용하여 깔끔하고 상큼한 맛을 느끼실 수
                        있습니다.
                    </p>
                    <p className="more">
                        <button onClick={()=>navigate('/drinkMenu')}>자세히 보기</button>
                    </p>
                </div>
            </div>
        </Maincon4Wrap>
    );
};

export default Maincon4;
