import { configureStore, createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const postsAdapter = createEntityAdapter({ selectId: post => post.id });
const postsSlice = createSlice({
  name: 'posts',
  initialState: postsAdapter.getInitialState({ loading: 'idle' }),
  reducers: {
    postsReceived: postsAdapter.setAll,
    postAdded: postsAdapter.addOne,
    postUpdated: postsAdapter.upsertOne,
  }
});

export const postsSelectors = postsAdapter.getSelectors(state => state.posts);

export const store = configureStore({
  reducer: { posts: postsSlice.reducer },
});
export default postsSlice.reducer;
