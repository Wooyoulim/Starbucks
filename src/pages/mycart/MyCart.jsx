import { useSelector } from "react-redux";
import MyCartList from "../../components/mycart/MyCartList.jsx";
import { MyCartWrap } from "./MyCartStyle.js";
import MyCartEmpty from "../../components/mycart/MyCartEmpty.jsx";
import { useNavigate } from "react-router-dom";

const MyCart = () => {
  const { authed } = useSelector((state) => state.authR);
  const { cart } = useSelector((state) => state.myCart);
  const navigate = useNavigate();
  return (
    <MyCartWrap>
      <h2>My cart</h2>
      {cart.length > 0 ? <MyCartList /> : <MyCartEmpty />}
    </MyCartWrap>
  );
};

export default MyCart;
