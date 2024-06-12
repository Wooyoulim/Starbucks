import { createSlice } from '@reduxjs/toolkit';
import notice from '../../assets/api/notice';

const initialState = {
    data: notice,
};

export const noticeSlice = createSlice({
    name: 'notice',
    initialState,
    reducers: {},
});

export default noticeSlice.reducer;
