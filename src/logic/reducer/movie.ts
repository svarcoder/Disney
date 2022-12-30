import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	recommend: null,
	newDisney: null,
	original: null,
	trending: null,
};

const movieSlice = createSlice({
	name: "movie",
	initialState,
	reducers: {
		setMovies: (state, action) => {
			state.recommend = action.payload.recommend;
			state.newDisney = action.payload.newDisney;
			state.original = action.payload.original;
			state.trending = action.payload.trending;
		},
	},
});

export const { setMovies } = movieSlice.actions;

export const selectRecommend = (state: any) => state.movie.recommend;
export const selectNewDisney = (state: any) => state.movie.newDisney;
export const selectOriginal = (state: any) => state.movie.original;
export const selectTrending = (state: any) => state.movie.trending;

export default movieSlice.reducer;
