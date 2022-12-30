import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectRecommend } from "../../logic/reducer/movie";
import { Container, Content, Wrap } from "./style";

const Recommend = (props: any) => {
	const movies = useSelector(selectRecommend);
	console.log(movies, ":🛢️");

	return (
		<Container>
			<h4>Recommended for You</h4>
			<Content>
				{movies &&
					movies.map((movie: any, key: any) => (
						<Wrap key={key}>
							{movie.id}
							<Link to={`/detail/` + movie.id}>
								<img src={movie.cardImg} alt={movie.title} />
							</Link>
						</Wrap>
					))}
			</Content>
		</Container>
	);
};

export default Recommend;
