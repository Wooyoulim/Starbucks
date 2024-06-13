import { useDispatch, useSelector } from "react-redux";
import { cartOrder, delAll } from "../../store/modules/myCartSlice";

const MyCartTotal = () => {
  const { totalNum, totalPrice } = useSelector((state) => state.myCart);
  const dispatch = useDispatch();
  return (
    <div className="total">
      <p>
        총 갯수<span>{totalNum}개</span>
      </p>
      <p>
        총 금액
        <span>
          {totalPrice
            .toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
          원
        </span>
      </p>
      <button onClick={() => dispatch(delAll())}>전체삭제</button>
      <button onClick={() => dispatch(cartOrder())}>주문하기</button>
    </div>
  );
};

export default MyCartTotal;
