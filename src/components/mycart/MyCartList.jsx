import { useDispatch, useSelector } from "react-redux";
import { MyCartListWrap } from "./MyCartSubStyle.js";
import MyCartItem from "./MyCartItem.jsx";
import { useEffect, useMemo, useState } from "react";
import {
  onChkAll,
  totalCart,
  totalNumber,
} from "../../store/modules/myCartSlice.js";
import MyCartTotal from "./MyCartTotal.jsx";
const MyCartList = () => {
  const { cart } = useSelector((state) => state.myCart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(totalCart());
    dispatch(totalNumber());
  }, [cart]);
  const [chk, setChk] = useState(false);
  const changeCheck = (e) => {
    setChk(!chk);
    dispatch(onChkAll(chk));
  };
  return (
    <MyCartListWrap className="cartList">
      <input
        type="checkbox"
        className="allChk"
        id="all"
        checked={chk}
        onChange={changeCheck}
      />
      <label classname="allChkLabel" id="all" onClick={changeCheck}></label>
      <span onClick={changeCheck}>전체선택</span>
      <ul className="cartList">
        {cart.map((item) => (
          <MyCartItem key={item.idx} item={item} />
        ))}
      </ul>
      <MyCartTotal />
    </MyCartListWrap>
  );
};

export default MyCartList;
