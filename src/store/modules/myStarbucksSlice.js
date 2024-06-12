// 2. 비동기 X
import { createSlice } from '@reduxjs/toolkit';
import drinkData from '../../assets/api/drinkData';
import foodData from '../../assets/api/foodData';
import productData from '../../assets/api/productData';

const initialState = {
    user: localStorage.getItem('user') || {},
    tabMenus: [],
    level: null,
    isShow: {
        isReward: true,
        isCard: true,
        isFre: true,
        isMenu: true,
        isShowEx: true,
        isBarcode: false,
    },
    detail: null,
};

// user가 존재하고 myMenus가 정의된 경우에만 필터링
if (initialState.user && initialState.user.myMenus) {
    initialState.tabMenus = initialState.user.myMenus.filter((menu) => menu.cate === 1);
}

export const myStarbucksSlice = createSlice({
    name: 'myStar',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        rewards: (state, action) => {
            const { stars } = action.payload;
            if (stars < 5) {
                state.level = 'Welcome';
            } else if (stars < 30) {
                state.level = 'Green';
            } else {
                state.level = 'Gold';
            }
        },
        onToggle: (state, action) => {
            const { key } = action.payload;
            state.isShow[key] = !state.isShow[key];
        },
        myMenuChange: (state, action) => {
            const cate = action.payload || 1;
            // state.tabMenus = state.user.myMenus.filter((menu) => menu.cate === parseInt(action.payload));
            state.tabMenus = state.user.myMenus.filter((menu) => menu.cate === parseInt(cate));
        },
        myMenuDel: (state, action) => {
            state.tabMenus = state.tabMenus.filter((menu) => {
                return !action.payload.some((pay) => menu.id === pay.id && menu.kor === pay.kor);
            });

            if (state.user) {
                state.user.myMenus = state.user.myMenus.filter((menu) => {
                    return !action.payload.some((pay) => menu.id === pay.id && menu.kor === pay.kor);
                });
            }
            localStorage.setItem('user', JSON.stringify(state.user));
        },
        updateCardNickname: (state, action) => {
            const { id, newNickName } = action.payload;
            const card = state.user.myCard.find((card) => card.id === id);
            if (card) {
                card.cardNicname = newNickName;
            }
            localStorage.setItem('user', JSON.stringify(state.user));
        },
        rechargeCard: (state, action) => {
            const { id, amount } = action.payload;
            const card = state.user.myCard.find((card) => card.id === id);
            if (card) {
                card.recharge += amount;
                localStorage.setItem('user', JSON.stringify(state.user));
            }
        },
        handleDetail: (state, action) => {
            const cateNum = action.payload.cate;
            const korName = action.payload.kor;
            if (cateNum === 1) {
                for (const category of drinkData) {
                    const found = category.data.find((drink) => drink.kor === korName);
                    if (found) {
                        state.detail = `/drinkMenu/${category.category}/${found.id}`;
                    }
                }
            }
            if (cateNum === 2) {
                for (const category of foodData) {
                    const found = category.data.find((drink) => drink.kor === korName);
                    if (found) {
                        state.detail = `/food/${category.category}/${found.id}`;
                    }
                }
            }
            if (cateNum === 3) {
                for (const category of productData) {
                    const found = category.data.find((drink) => drink.kor === korName);
                    if (found) {
                        state.detail = `/product/${category.category}/${found.id}`;
                    }
                }
            }
        },
               addMymenus: (state, action) => {
            const existingMenu = state.user.myMenus.find((menu) => menu.kor === action.payload.kor);
            if (existingMenu || existingMenu !== undefined) {
                alert('이미 추가하신 메뉴입니다.');
            } else {
                state.user.myMenus.push(action.payload);
                localStorage.setItem('user', JSON.stringify(state.user));
                alert('등록이 완료되었습니다.');
            }
        },
         addMycard: (state, action) => {
        const existingCard = state.user.myMenus.find(
            (menu) => menu.kor === action.payload.kor
          );
          if (existingCard || existingCard !== undefined) {
            alert("이미 추가하신 카드입니다.");
          } else {
            state.user.myCard.push(action.payload);
            localStorage.setItem("user", JSON.stringify(state.user));
            alert("등록이 완료되었습니다.");
          }
    },
    },
});

export const { setUser, rewards, onToggle, myMenuChange, myMenuDel, updateCardNickname, rechargeCard, handleDetail, addMymenus,addMycard } = myStarbucksSlice.actions;
export default myStarbucksSlice.reducer;
