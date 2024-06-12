import { useNavigate } from 'react-router-dom';
import { Maincon6Wrap } from './MainConStyles';

const Maincon6 = () => {
    const navigate = useNavigate();
    return (
        <Maincon6Wrap>
            <div className="inner">
                <div className="explain">
                    <h4 className="mainT">
                        다양한 시도와 디자인으로 <br />
                        가치를 더한, 스타벅스만의 상품
                    </h4>
                    <p className="infoT">
                        Meet The Heartful Moments <br />더 새롭고 더 특별해진 스타벅스MD 모음
                        <br />
                        6월 26일 매장에서 만나요
                        <br />
                        <br />
                        <span>*본 상품은 오프라인 선별 매장 및 온라인에 판매하고 있습니다.</span>
                    </p>
                    <p className="more">
                        <button onClick={()=>navigate('/product')}>자세히 보기</button>
                    </p>
                </div>
                <div className="bgPic">
                    <img src="./images/main/productBg.png" alt="푸드 소개 이미지1" />
                </div>
            </div>
        </Maincon6Wrap>
    );
};

export default Maincon6;
