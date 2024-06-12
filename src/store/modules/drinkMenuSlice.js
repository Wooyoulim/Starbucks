import { createSlice } from "@reduxjs/toolkit";
import drinkData from "../../assets/api/drinkData";
import drinkSort from "../../assets/api/drinkSort";
import drinkThemaData from "../../assets/api/drinkThemaData";
const initialState = {
  drinkMenuData: drinkData,
  drinkSortData: drinkSort,
  themaMenuData: drinkThemaData,
  isAllShow: true,
  isNewShow: false,
  isSeasonalShow: false,
  user: JSON.parse(localStorage.getItem("user")) || {},
};

export const drinkMenuSlice = createSlice({
  name: "drinkMenu",
  initialState,
  reducers: {
    changeShow: (state, action) => {
      state.drinkSortData = state.drinkSortData.map((data) =>
        data.engName === action.payload
          ? { ...data, isShow: !data.isShow }
          : data
      );
      state.isAllShow = false;
    },
    changeAllShow: (state, action) => {
      if (state.isAllShow === false) {
        state.drinkSortData = state.drinkSortData.map((data) =>
          data.isShow === true ? { ...data, isShow: false } : data
        );
        state.isAllShow = true;
      } else {
        state.isAllShow = false;
      }
    },
    changeNew: (state, action) => {
      state.isNewShow = !state.isNewShow;
    },
    changeSeasonal: (state, action) => {
      state.isSeasonalShow = !state.isSeasonalShow;
    },
  },
});

export const { changeShow, changeAllShow, changeNew, changeSeasonal } =
  drinkMenuSlice.actions;
export default drinkMenuSlice.reducer;
