import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  chkCart: [],
  totalNum: 0,
  totalPrice: 0,
};

export const myCartSlice = createSlice({
  name: "myCart",
  initialState,
  reducers: {
    CheckCart: (state, action) => {
      state.chkCart = [];
      state.chkCart = state.cart.filter((item) => item.isChk === true);
    },
    addCart: (state, action) => {
      state.cart.push(action.payload);
      alert('장바구니에 추가되었습니다.');
    },
    delCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.idx !== action.payload);
    },
    numChange: (state, action) => {
      state.cart = state.cart.map((data) =>
        data.idx === action.payload.idx ? action.payload : data
      );
    },
    totalCart: (state, action) => {
      state.chkCart
        ? (state.totalPrice = state.chkCart.reduce(
            (acc, curr) => acc + curr.price * curr.num,
            0
          ))
        : 0;
    },
    totalNumber: (state, action) => {
      state.chkCart
        ? (state.totalNum = state.chkCart.reduce(
            (acc, curr) => acc + Number(curr.num),
            0
          ))
        : 0;
    },
    delAll: (state, action) => {
      state.cart = [];
    },
    onChkToggle: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.idx === action.payload ? { ...item, isChk: !item.isChk } : item
      );
      state.chkCart = state.chkCart.map((item) =>
        item.idx === action.payload ? null : item
      );
    },
    onChkAll: (state, action) => {
      action.payload
        ? (state.cart = state.cart.map((item) =>
            item.isChk ? { ...item, isChk: false } : item
          ))
        : (state.cart = state.cart.map((item) =>
            item.isChk ? item : { ...item, isChk: true }
          ));
    },
     cartOrder: (state, action) => {
      alert("주문이 완료되었습니다.");
      state.cart = state.cart.filter((cart) => (cart.isChk ? null : cart));
    },
  },
});

export const {
  addCart,
  delCart,
  numChange,
  totalCart,
  totalNumber,
  delAll,
  onChkToggle,
  onChkAll,
  CheckCart,
    cartOrder,
} = myCartSlice.actions;
export default myCartSlice.reducer;
