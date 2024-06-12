import { Detail } from "./FoodStyle";
import logoimg from "../../../../public/images/logo2.png";
import { useNavigate, useParams } from "react-router-dom";
import data from "../../../assets/api/foodData";
import { useState } from "react";
import { Link } from "react-router-dom";
import Myfood from "./Myfood";
import { useSelector } from "react-redux";

const FoodDetail = () => {
  const { foodID, category } = useParams();
  const [content, setContet] = useState(false);
  const { authed } = useSelector((state) => state.authR);

  const navigate = useNavigate();
  const onGo = () => {
    navigate("/food");
  };

  // data 카테고리만 추출
  const foodData = data.filter((item) => {
    return item.category === category;
  });

  // data만 추출
  const datafood = foodData.map((item2) => item2.data).flat();

  // foodID 부여해 사이트 이동
  const thisFood = datafood.find((item3) => item3.id === Number(foodID));

  // imgurl만 추출
  const imgData = foodData[0].data.map((data1) => data1.imgurl);
  console.log("test", imgData);

  //랜덤추출
  const newarr = [];
  while (imgData.length > 5) {
    let movearr = imgData.splice(
      Math.floor(Math.random() * newarr.length),
      1
    )[0];
    newarr.push(movearr);
  }
  console.log("newarr", newarr);

  return (
    <Detail>
      <div className="main">
        <img src={thisFood.imgurl} alt={thisFood.kor} className="mainimg" />

        <div className="text">
          <h2>{thisFood.kor}</h2>
          <p className="engname">{thisFood.eng}</p>
          <p className="desc">{thisFood.desc}</p>
          <p className="btn">
            <button
              onClick={() =>
                authed
                  ? setContet(!content)
                  : alert("로그인이 필요한 서비스입니다.")
              }
            >
              나만의 푸드로 등록
              {content ? (
                <i className="xi-heart" />
              ) : (
                <i className="xi-heart-o" />
              )}
            </button>
          </p>
        </div>
      </div>
      {content && <Myfood setContet={setContet} content={content} />}

      <div className="recommend">
        <div className="title">
          <img src={logoimg} alt="" />
          <h3>오늘의 추천 메뉴</h3>
        </div>
        <ul>
          {imgData.map(
            (data2, idx) =>
              idx < 5 && (
                <Link to={`/food/${category}/${data2.replace(/[^0-9]/gi, "")}`}>
                  <li>
                    <img src={data2} />
                  </li>
                </Link>
              )
          )}
        </ul>
      </div>
      <div className="lastbtn">
        <button onClick={onGo}>목록으로 돌아가기</button>
      </div>
    </Detail>
  );
};

export default FoodDetail;
