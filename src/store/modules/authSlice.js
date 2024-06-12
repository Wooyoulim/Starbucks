import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    logData: localStorage.getItem('logData')
        ? JSON.parse(localStorage.getItem('logData'))
        : [
              {
                  id: 1,
                  email: 'user1@naver.com',
                  nickName: '신규고객',
                  password: '123',
                  myReward: {
                      stars: 0,
                      frequency: 0,
                  },
                  myCard: [],
                  myMenus: [],
              },
              {
                  id: 2,
                  email: 'user2@naver.com',
                  nickName: '장기고객',
                  password: '123',
                  myReward: {
                      stars: 15,
                      frequency: 10,
                  },
                  myCard: [
                      {
                          id: 1,
                          cardName: '밸런타인 데이 카드',
                          cardNicname: '나만의 카드2',
                          recharge: 10000,
                          imgurl: './images/cards/love/010866_WEB.png',
                      },
                      {
                          id: 2,
                          cardName: '고맙습니다 카드',
                          cardNicname: '나만의 카드',
                          recharge: 0,
                          imgurl: './images/cards/thanks/011006_WEB.png',
                      },
                  ],
                  myMenus: [
                      {
                          id: 1,
                          drinkNo: 1,
                          cate: 1,
                          kor: '씨솔트 카라멜 콜드 브루',
                          option: { size: 'Tall', shot: 1, syrup: 1, drizzle: '선택 안 함', whip: '추가' },
                          date: '2024-06-01',
                          isChk: false,
                          imgurl: './images/drink/coldbrew/coldbrew01.jpg',
                      },
                      {
                          id: 2,
                          drinkNo: 2,
                          cate: 1,
                          kor: '나이트로 바닐라 크림',
                          option: { size: 'Venti', shot: 2, syrup: 2, drizzle: '선택 안 함', whip: '추가' },
                          date: '2024-06-01',
                          isChk: false,
                          imgurl: './images/drink/coldbrew/coldbrew02.jpg',
                      },
                      {
                          id: 3,
                          foodNo: 1,
                          cate: 2,
                          kor: '소시지 프레첼 소금빵',
                          option: { warm: '따뜻하게 데움' },
                          date: '2024-06-01',
                          isChk: false,
                          imgurl: './images/food/bread/bread03.jpg',
                      },
                      {
                          id: 4,
                          goodsNo: 1,
                          cate: 3,
                          kor: 'SS 리저브 블랙 DW 머그 355ml',
                          option: {},
                          date: '2024-06-01',
                          isChk: false,
                          imgurl: './images/product/mug/Mug2.jpg',
                      },
                  ],
              },
          ],

    user: localStorage.getItem('user') || {},

    authed: false,
    // tabMenus: [],
    name: '',
    currentDate: '',
    keepData: localStorage.getItem('keepData') ? JSON.parse(localStorage.getItem('keepData')) : '',
    isChk: localStorage.getItem('isChk') ? JSON.parse(localStorage.getItem('isChk')) : false,
};

let no = 3;

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            const { email, password } = action.payload;
            const newItem = state.logData.find((item) => item.email === email);
            if (newItem && newItem.password === password) {
                state.user = newItem;
                state.authed = true;
                localStorage.setItem('user', JSON.stringify(newItem)); // 사용자 정보를 로컬스토리지에 저장
            } else {
                alert('비밀번호를 잘못 입력하였습니다.');
                state.authed = false;
            }
        },

        logout: (state, action) => {
            if (state.user) {
                // logData에서 현재 사용자 정보를 찾아 업데이트
                const updatedLogData = state.logData.map((item) =>
                    item.id === state.user.id
                        ? { ...item, ...JSON.parse(localStorage.getItem('user')) }
                        : item
                );
                // 로컬스토리지에 업데이트된 logData 저장
                localStorage.setItem('logData', JSON.stringify(updatedLogData));
                state.logData = updatedLogData;
            }
            state.user = null;
            state.authed = false;
            localStorage.removeItem('user'); // 로그인한 사용자 정보를 로컬스토리지에서 제거
        },
        join: (state, action) => {
            state.logData = [
                ...state.logData,
                {
                    id: no++,
                    myReward: {
                        stars: 0,
                        frequency: 0,
                    },
                    myCard: [],
                    myMenus: [],
                    ...action.payload,
                },
            ];
            localStorage.setItem('logData', JSON.stringify(state.logData));
            state.name = action.payload.nickName;
        },
        signUpDate: (state, action) => {
            const getDate = () => {
                const today = new Date();
                const month = today.getMonth() + 1;
                const year = today.getFullYear();
                const date = today.getDate();
                return `${year}-${month}-${date}`;
            };

            state.currentDate = getDate();
        },
        keepID: (state, action) => {
            const { email, password } = action.payload;
            const keepLogId = state.logData.find((item) => item.email === email);
            state.keepData = keepLogId.email;
            localStorage.setItem('keepData', JSON.stringify(state.keepData));
        },
        keepChk: (state, action) => {
            state.isChk = action.payload;
            localStorage.setItem('isChk', JSON.stringify(action.payload));
        },
        removeKeep: (state, action) => {
            localStorage.removeItem('keepData');
        },

    },
});

export const { login, logout, join, signUpDate, keepID, keepChk, removeKeep } = authSlice.actions;
export default authSlice.reducer;
