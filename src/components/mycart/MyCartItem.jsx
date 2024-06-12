import { useDispatch, useSelector } from "react-redux";
import {
  CheckCart,
  delCart,
  numChange,
  onChkToggle,
} from "../../store/modules/myCartSlice";
import { useState, useEffect } from "react";

const MyCartItem = ({ item }) => {
  const { cart } = useSelector((state) => state.myCart);
  const { kor, imgurl, price, num, idx, isChk } = item;
  const dispatch = useDispatch();
  const [cnt, setCnt] = useState(num);
  const changeCnt = (e) => {
    setCnt(e.target.value);
  };
  useEffect(() => {
    item = { ...item, num: cnt };
    dispatch(numChange(item));
    console.log(item);
  }, [cnt]);
  useEffect(() => {
    dispatch(CheckCart());
  }, [cart]);
  return (
    <li>
      <p className="check">
        <input type="checkbox" id={idx} checked={isChk} />
        <label id={idx} onClick={() => dispatch(onChkToggle(idx))}></label>
      </p>
      <img src={imgurl} alt={kor} />
      <p className="name">{kor}</p>
      <p>
        {price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원
      </p>
      <p>
        <input type="number" name="num" value={cnt} onChange={changeCnt} />
      </p>
      <p className="allPrice">
        {(price * cnt)
          .toString()
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
        원
      </p>
      <p>
        <button
          onClick={() => {
            dispatch(delCart(idx));
          }}
        >
          삭제
        </button>
      </p>
    </li>
  );
};

export default MyCartItem;
