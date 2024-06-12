import { Detail } from "./ProductStyle";
import logoimg from "../../../../public/images/logo2.png";
import { useNavigate, useParams } from "react-router-dom";
import data from "../../../assets/api/productData";
import { useState } from "react";
import Myproduct from "./Myproduct";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductDetail = () => {
  const { productID, category } = useParams();
  const [content, setContet] = useState(false);
  const { authed } = useSelector((state) => state.authR);
  const navigate = useNavigate();
  const onGo = () => {
    navigate("/product");
  };

  //카테고리만 추출
  const productData = data.filter((item) => {
    return item.category === category;
  });

  // data만 추출
  const dataproduct = productData.map((item2) => item2.data).flat();

  // productID 부여해 사이트 이동
  const thisProduct = dataproduct.find(
    (item3) => item3.id === Number(productID)
  );

  // imgurl만 추출
  const imgData = productData[0].data.map((data1) => data1.imgurl);
  console.log("imgData", imgData);

  //랜덤추출
  const newarr = [];
  while (imgData.length > 5) {
    let movearr = imgData.splice(
      Math.floor(Math.random() * newarr.length),
      1
    )[0];
    newarr.push(movearr);
  }

  return (
    <Detail>
      <div className="main">
        <img
          src={thisProduct.imgurl}
          alt={thisProduct.title}
          className="mainimg"
        />

        <div className="text">
          <h2>{thisProduct.title}</h2>
          <p className="engname">{thisProduct.eng}</p>
          <p className="desc">{thisProduct.text}</p>
          <p className="btn">
            <button
              onClick={() =>
                authed
                  ? setContet(!content)
                  : alert("로그인이 필요한 서비스입니다.")
              }
            >
              나만의 상품으로 등록
              {content ? (
                <i className="xi-heart" />
              ) : (
                <i className="xi-heart-o" />
              )}
            </button>
          </p>
        </div>
      </div>
      {content && <Myproduct setContet={setContet} content={content} />}
      <div className="recommend">
        <div className="title">
          <img src={logoimg} alt="" />
          <h3>오늘의 추천 상품</h3>
        </div>
        <ul>
          {imgData.map(
            (data2, idx) =>
              idx < 5 && (
                <Link
                  to={`/product/${category}/${data2.replace(/[^0-9]/gi, "")}`}
                >
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

export default ProductDetail;
