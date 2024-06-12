import { createSlice } from "@reduxjs/toolkit";
import cardsData from "../../assets/api/cardsData";
import cardsSort from "../../assets/api/cardsSort";
import cardsThemaData from "../../assets/api/cardsThemaData";
import cardsThemaSort from "../../assets/api/cardsThemaSort";

const initialState = {
  cardData: cardsData,
  cardSort: cardsSort,
  cardThemaData: cardsThemaData,
  cardThemaSort: cardsThemaSort,
  isAllShow: true,
  isNewShow: false,
  isSeasonalShow: false,
  user: JSON.parse(localStorage.getItem("user")) || {},
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    cardChangeShow: (state, action) => {
      state.cardSort = state.cardSort.map((data) =>
        data.engName === action.payload
          ? { ...data, isShow: !data.isShow }
          : data
      );
      state.isAllShow = false;
    },
    cardChangeAllShow: (state, action) => {
      if (state.isAllShow === false) {
        state.cardSort = state.cardSort.map((data) =>
          data.isShow === true ? { ...data, isShow: false } : data
        );
        state.isAllShow = true;
      } else {
        state.isAllShow = false;
      }
    },
    cardChangeNew: (state, action) => {
      state.isNewShow = !state.isNewShow;
    },
    cardChangeSeasonal: (state, action) => {
      state.isSeasonalShow = !state.isSeasonalShow;
    },
  },
});

export const {
  cardChangeShow,
  cardChangeAllShow,
  cardChangeNew,
  cardChangeSeasonal,
} = cardSlice.actions;
export default cardSlice.reducer;
