import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CardsDetail } from "./cardStyle";
import { useMemo, useRef, useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { addMycard } from "../../store/modules/myStarbucksSlice";

const CardDetail = () => {
  const { authed } = useSelector((state) => state.authR);
  const { user } = useSelector((state) => state.myStar);
  const { myCard } = user;
  const cardRef = useRef(myCard.length);
  const { cardID, engName } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cardData } = useSelector((state) => state.card);
  const cd = cardData.find((card) => card.category === engName);
  const cdData = cd.data.find((card) => card.id === Number(cardID));
  const { imgurl, id, kor, eng, releaseYear, releaseMonth } = cdData;
  const [customOn, setCustomOn] = useState(false);
  return (
    <CardsDetail>
      <div className="inner">
        <div className="detailCon">
          <p className="bigImg">
            <img src={imgurl} alt={kor} />
          </p>

          <div className="detailDesc">
            <h2>{kor}</h2>
            <h3>{eng}</h3>
            <div className="info">
              <p className="infoP">스타벅스 카드 안내 및 특징</p>
              <div className="infoDetail">
                <p>
                  1. 본 카드는 국내에서만 사용이 가능합니다.
                  <br />
                  2. 스타벅스 카드로 결제 시 스타벅스의 모든 제품 및 상품을
                  다양한 혜택과 함께 편리하게 구입할 수 있습니다. <br />
                  3. 언제든지 재충전이 가능합니다.
                </p>
              </div>
              <p className="cardBirth">
                스타벅스 카드 출시년도 : {releaseYear}년 {releaseMonth}월
              </p>
              <p className="btn">
                <button
                  onClick={() => {
                    authed
                      ? dispatch(
                          addMycard({
                            id: cardRef.current++ + 1,
                            cardName: kor,
                            cardNicname: `나만의 카드${cardRef.current++}`,
                            recharge: 0,
                            imgurl: imgurl,
                          })
                        )
                      : alert("로그인이 필요한 서비스입니다.");
                  }}
                >
                  나만의 카드로 등록하기
                  <span>{customOn ? <FaHeart /> : <FaRegHeart />}</span>
                </button>
              </p>
            </div>
          </div>
        </div>

        <p className="backBtn">
          <button onClick={() => navigate("/card")}>목록으로 돌아가기</button>
        </p>
      </div>
    </CardsDetail>
  );
};

export default CardDetail;
