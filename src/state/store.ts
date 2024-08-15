import { configureStore } from '@reduxjs/toolkit'
import imageSlice from './image.slice'
import modelSlice from './model.slice'

export const store = configureStore({
    reducer: {
        images: imageSlice,
        models: modelSlice
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch