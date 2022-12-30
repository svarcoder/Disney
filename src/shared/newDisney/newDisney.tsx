import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectNewDisney } from "../../logic/reducer/movie";
import { Container, Content, Wrap } from "./style";

const NewDisney = (props: any) => {
	const movies = useSelector(selectNewDisney);

	return (
		<Container>
			<h4>New to Disney+</h4>
			<Content>
				{movies &&
					movies.map((movie: any, key: number) => (
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

export default NewDisney;
