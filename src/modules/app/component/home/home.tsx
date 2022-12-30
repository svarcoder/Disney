import { collection, onSnapshot } from "firebase/firestore";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../../../../logic/reducer/movie";
import { selectUserName } from "../../../../logic/reducer/user";
import ImageSlide from "../../../../shared/imageSlide";
import NewDisney from "../../../../shared/newDisney";
import Original from "../../../../shared/original";
import Recommend from "../../../../shared/recommends";
import Trending from "../../../../shared/trending";
import Viewer from "../../../../shared/viewers";
import db from "../../../firebase/firebase";
import { Container } from "./style";

const Home = (props: any) => {
	const dispatch = useDispatch();
	const userName = useSelector(selectUserName);

	let recommends: string[] = [];
	let newDisneys: string[] = [];
	let originals: string[] = [];
	let trending: string[] = [];

	useEffect(() => {
		console.log("hello");
		onSnapshot(collection(db, "movies"), (snapshot) => {
			snapshot.docs.map((doc: any) => {
				console.log(recommends);
				switch (doc.data().type) {
					case "recommend":
						recommends = [...recommends, { id: doc.id, ...doc.data() }];
						break;

					case "new":
						newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
						break;

					case "original":
						originals = [...originals, { id: doc.id, ...doc.data() }];
						break;

					case "trending":
						trending = [...trending, { id: doc.id, ...doc.data() }];
						break;
				}
			});

			dispatch(
				setMovies({
					recommend: recommends,
					newDisney: newDisneys,
					original: originals,
					trending: trending,
				})
			);
		});
	}, [userName]);

	return (
		<Container>
			<ImageSlide />
			<Viewer />
			<Recommend />
			<NewDisney />
			<Original />
			<Trending />
		</Container>
	);
};

export default Home;
