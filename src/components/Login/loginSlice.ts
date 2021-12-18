import { createSlice } from '@reduxjs/toolkit';
import { useHistory } from 'react-router';
import type { AppThunk } from '../../store/store';
import { fetchLogin, LoginRequest } from '../../service/AuthService';

interface LoginState {
    isAuthenticated: boolean
}

const initialState: LoginState = {
    isAuthenticated: !!window.localStorage.getItem('accessToken'),
};

export const loginSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        toggleAuthenticated: (state) => {
            state.isAuthenticated = !state.isAuthenticated;
        },
        logoutAction: (state) => {
            state.isAuthenticated = false;
        },
    },
});

export const { toggleAuthenticated, logoutAction } = loginSlice.actions;

export const loginReducer = loginSlice.reducer;

export const authenticateRequest = (request: LoginRequest): AppThunk => async (dispatch) => {
    try {
        const response = await fetchLogin(request).then((data) => data.json());

        if (!response.token) {
            window.localStorage.clear();
            dispatch(logoutAction());
            return;
        }

        window.localStorage.setItem('accessToken', response.token);
        dispatch(toggleAuthenticated());
    } catch (err) {
        window.localStorage.clear();
        dispatch(logoutAction());
    }
};
