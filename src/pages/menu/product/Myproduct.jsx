import { ProductChoice } from "./ProductStyle";
import data from "../../../assets/api/productData";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addMymenus } from "../../../store/modules/myStarbucksSlice";
import { useState, useRef, useEffect } from 'react';
import { signUpDate } from '../../../store/modules/authSlice';

const Myproduct = ({ setContet, content }) => {
  const dispatch = useDispatch();
  const { productID, category } = useParams();
  const { user,currentDate } = useSelector((state) => state.authR);
  const { myMenus } = user;
  const [productOption, setProductOption] = useState({});
  const idRef = useRef(user.myMenus ? user.myMenus.length + 1 : 0);
  const productData = data.filter((item) => {
    return item.category === category;
  });

  const dataproduct = productData.map((item2) => item2.data).flat();
  const thisProduct = dataproduct.find(
    (item3) => item3.id === Number(productID)
  );

  const onChangeOption = () => {
    setProductOption({
      kor: thisProduct.title,
    });
  };

      useEffect(() => {
        dispatch(signUpDate());
    }, []);

  const onSaveBtn = (e) => {
    e.preventDefault();
    dispatch(
      addMymenus({
        id: idRef.current++,
        goodsNo: productID,
        cate: 3,
        kor: thisProduct.kor,
        date: currentDate,
        isChk: false,
        imgurl: thisProduct.imgurl,
      })
    );
  };
  console.log("thisProduct", thisProduct);
  const imgData = productData[0].data.map((data1) => data1.imgurl);

  return (
    <ProductChoice>
      <div className="left">
        <img src={thisProduct.imgurl}></img>
        <div className="myselect">
          <h3>{thisProduct.title}</h3>
        </div>
      </div>
      <div className="btnwrap">
        <button onClick={(e) => onSaveBtn(e)}>등록</button>
        <button onClick={() => setContet(!content)}>취소</button>
      </div>
    </ProductChoice>
  );
};

export default Myproduct;
