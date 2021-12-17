import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { loginReducer } from '../components/Login/loginSlice';

export const store = configureStore({
    reducer: {
        user: loginReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the index itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
