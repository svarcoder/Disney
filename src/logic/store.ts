import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userSlice from "./reducer/user";
import movieSlice from "./reducer/movie";

export default configureStore({
	reducer: {
		user: userSlice,
		movie: movieSlice,
	},
	middleware: getDefaultMiddleware({
		serializableCheck: false,
	}),
});
