import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';

class User {

    token: string = ""
}
const sessionUser = sessionStorage.getItem('user');
const initialUser = sessionUser ? JSON.parse(sessionUser) : new User();
// 创建用户数据的slice
const userSlice = createSlice({
    name: 'user',
    initialState: initialUser,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            sessionStorage.setItem('user', JSON.stringify(action.payload))

            return { ...state, ...action.payload };
        },
        clearUser: () => {
            sessionStorage.removeItem('user');
            return {
                token: '',


            }
        }
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
export const { setUser, clearUser } = userSlice.actions;
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