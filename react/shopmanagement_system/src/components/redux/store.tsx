import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';
import { SignedUser } from '../../models/userModels';
import { ShopItemModels } from '../../models/shopmodelsl';



const sessionUser = sessionStorage.getItem('user');
const initialUser = sessionUser ? JSON.parse(sessionUser) : new SignedUser();


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

const shopCartSlice = createSlice({
    name: 'shopcart',
    initialState: [] as ShopItemModels[],
    reducers: {
        addItem: (state, action: PayloadAction<ShopItemModels>) => {
            state.push(action.payload);
        },
        deleteItem: (state, action: PayloadAction<string>) => {
            return state.filter(state => state._id !== action.payload)
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

export const { setUser, clearUser, updateIconUrl } = userSlice.actions;
export const { decrementTime } = TimeSlice.actions;
export const { addItem, deleteItem } = shopCartSlice.actions;

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        time: TimeSlice.reducer,
        shopcart: shopCartSlice.reducer,
    },
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store;