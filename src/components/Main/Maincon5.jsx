import { useNavigate } from 'react-router-dom';
import { Maincon5Wrap } from './MainConStyles';

const Maincon5 = () => {
        const navigate = useNavigate();
    return (
        <Maincon5Wrap>
            <div className="inner">
                <div className="explain">
                    <h4 className="mainT">
                        스타벅스 커피와 완벽한 <br />
                        어울림을 자랑하는, 푸드
                    </h4>
                    <p className="infoT">
                        Only For Starbucks <br />
                        버터 풍미 가득한 프레첼 소금빵에 훈제된 도톰한 소시지와 홀그레인 머스터드가
                        <br />
                        맛의 조화를 이룬 든든한 간식용 소시지 브레드 입니다.
                        <br /> <br />
                        <span>*사진은 연출된 이미지이므로 실제와 다를 수 있습니다.</span>
                    </p>
                    <p className="more">
                        <button onClick={()=>navigate('/food')}>자세히 보기</button>
                    </p>
                </div>
                <div className="bgPic">
                    <img src="./images/main/foodBg.png" alt="푸드 소개 이미지1" />
                </div>
            </div>
        </Maincon5Wrap>
    );
};

export default Maincon5;
