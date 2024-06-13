import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { DrinkDetail } from "./drinkMenuStyle";
import { useEffect, useMemo, useRef, useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import DetailCustom from "./DetailCustom";
import { addCart } from "../../store/modules/myCartSlice";

const DrinkMenuDetail = () => {
  const { authed } = useSelector((state) => state.authR);
  const { cart } = useSelector((state) => state.myCart);
  const cartRef = useRef(cart.length + 1);
  const { drinkID, category } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { drinkMenuData } = useSelector((state) => state.drinkMenu);
  const cg = drinkMenuData.find((drink) => drink.category === category);
  const cgData = cg.data.find((drink) => drink.id === Number(drinkID));
  const {
    id,
    kor,
    eng,
    imgurl,
    desc,
    kcal,
    natrium,
    fat,
    sugar,
    protein,
    caffeine,
    allergy,
  } = cgData;

  const [random, setRandom] = useState([]);
  const [randomArr, setRandomArr] = useState([]);
  const [randomNum, setRandomNum] = useState([]);
  const [randomItem, setRandomItem] = useState([]);
  const [randomNewItem, setRandomNewItem] = useState([]);
  const [NewItem, setNewItem] = useState([]);
  const [customOn, setCustomOn] = useState(false);

  for (let i = 0; i < 10; i++) {
    random.push(Math.floor(Math.random() * 9));
    randomArr.push(drinkMenuData.find((data) => data.id === random[i] + 1));
    randomNum.push(Math.floor(Math.random() * randomArr[i].data.length));
    randomItem.push(
      randomArr[i].data.find((arr) => arr.id === randomNum[i] + 1)
    );
  }
  const getItem = () => {
    let itemArr = randomItem.map((item) => (item === cgData ? null : item));
    const set = new Set();
    randomNewItem.push(...new Set(itemArr));
    NewItem.push(randomNewItem.slice(1, 6));
    return NewItem;
  };
  //값이 변경되면 리턴처리 함수의 전체를 동시실행하기때문에 값유지후 넘김
  const getInfo = useMemo(() => getItem(), [drinkID, category]);

  return (
    <DrinkDetail>
      <div className="inner">
        <div className="detialCon">
          <p className="bigImg">
            <img src={imgurl} alt={kor} />
          </p>
          <div className="detailDesc">
            <h2>{kor}</h2>
            <h3>{eng}</h3>
            <p className="detailDescP">{desc}</p>
            <div className="info">
              {category !== "bottle" ? (
                <>
                  <p className="infoP">
                    제품 영양 정보<span>가장 작은 사이즈 기준입니다.</span>
                  </p>
                  <div className="infoDetail">
                    <p>
                      1회 제공량 (kcal) <span>{kcal}</span>
                    </p>
                    <p>
                      나트륨 (mg) <span>{natrium}</span>
                    </p>
                    <p>
                      포화지방 (g) <span>{fat}</span>
                    </p>
                    <p>
                      당류 (g) <span>{sugar}</span>
                    </p>
                    <p>
                      단백질 (g) <span>{protein}</span>
                    </p>
                    <p>
                      카페인 (mg) <span>{caffeine}</span>
                    </p>
                  </div>
                </>
              ) : null}
              {allergy ? (
                <p className="allergy">알레르기 유발요인 : {allergy}</p>
              ) : null}
              <p className="btn">
                <button
                  onClick={() => {
                    authed
                      ? setCustomOn(true)
                      : alert("로그인이 필요한 서비스입니다.");
                  }}
                >
                  나만의 음료로 등록
                  <span>{customOn ? <FaHeart /> : <FaRegHeart />}</span>
                </button>
                <button
                  onClick={() => {
                    authed
                      ? dispatch(
                          addCart({
                            ...cgData,
                            idx: cartRef.current++,
                            num: 1,
                            isChk: false,
                          })
                        )
                      : alert("로그인이 필요한 서비스입니다.");
                  }}
                >
                  장바구니 담기
                </button>
              </p>
            </div>
          </div>
        </div>
        {customOn ? (
          <DetailCustom cgData={cgData} setCustomOn={setCustomOn} />
        ) : null}

        <div className="recommend">
          <p className="recommendP">
            <img src="../../public/images/drink/041.png" alt="" />
            <span>오늘의 추천음료</span>
          </p>
          <div className="recommendImg">
            {NewItem[0].map((item, index) => (
              <Link
                to={`/drinkMenu/${item.imgurl.split("/")[3]}/${item.id}`}
                key={index}
              >
                <p className="nameBackground">
                  <span className="background"></span>
                  <span className="backname">{item.kor}</span>
                  <img src={item.imgurl} alt={item.kor} />
                </p>
              </Link>
            ))}
          </div>
        </div>
        <p className="backBtn">
          <button onClick={() => navigate("/drinkMenu")}>
            목록으로 돌아가기
          </button>
        </p>
      </div>
    </DrinkDetail>
  );
};

export default DrinkMenuDetail;
