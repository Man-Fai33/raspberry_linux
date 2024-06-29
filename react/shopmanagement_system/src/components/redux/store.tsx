import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';
import { SignedUser } from '../../models/userModels';


const sessionUser = sessionStorage.getItem('user');
const initialUser = sessionUser ? JSON.parse(sessionUser) : new SignedUser();

// 创建用户数据的slice
const userSlice = createSlice({
    name: 'user',
    initialState: initialUser,
    reducers: {

        setUser: (state, action: PayloadAction<SignedUser>) => {
            sessionStorage.setItem('user', JSON.stringify(action.payload))

            return { ...state, ...action.payload };
        },
        clearUser: () => {
            sessionStorage.removeItem('user');

            return {
                token: '',
            }
        },
        updateIconUrl: (state, action: PayloadAction<string>) => {
            const updatedState = { ...state, iconUrl: action.payload };
            sessionStorage.setItem('user', JSON.stringify(updatedState));

        },
    },
});


const TimeSlice = createSlice({
    name: 'counter',
    initialState: { timeRemaining: 10 },
    reducers: {
        decrementTime: state => {

            state.timeRemaining -= 1;
        },

    },

});

// 导出actions
export const { setUser, clearUser,updateIconUrl } = userSlice.actions;
export const { decrementTime } = TimeSlice.actions;
// 创建Redux store
const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        time: TimeSlice.reducer
    },
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store;