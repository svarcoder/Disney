import React from "react";
import { Container, Wrap } from "./style";
import ViewDisney from "../../asset/image/viewers-disney.png";
import Pixer from "../../asset/image/viewers-pixar.png";
import Marvel from "../../asset/image/viewers-marvel.png";
import Starwar from "../../asset/image/viewers-starwars.png";
import National from "../../asset/image/viewers-national.png";
import Disney from "../../asset/video/1564674844-disney.mp4";
import MarvelV from "../../asset/video/1564676115-marvel.mp4";
import NationalG from "../../asset/video/1564676296-national-geographic.mp4";
import PixerV from "../../asset/video/1564676714-pixar.mp4";
import StartW from "../../asset/video/1608229455-star-wars.mp4";

const Viewer = (props: any) => {
	return (
		<Container>
			<Wrap>
				<img src={ViewDisney} alt='' />
				<video autoPlay={true} loop={true} playsInline={true}>
					<source src={Disney} type='video/mp4' />
				</video>
			</Wrap>
			<Wrap>
				<img src={Marvel} alt='' />
				<video autoPlay={true} loop={true} playsInline={true}>
					<source src={MarvelV} type='video/mp4' />
				</video>
			</Wrap>
			<Wrap>
				<img src={Starwar} alt='' />
				<video autoPlay={true} loop={true} playsInline={true}>
					<source src={StartW} type='video/mp4' />
				</video>
			</Wrap>
			<Wrap>
				<img src={Pixer} alt='' />
				<video autoPlay={true} loop={true} playsInline={true}>
					<source src={PixerV} type='video/mp4' />
				</video>
			</Wrap>
			<Wrap>
				<img src={National} alt='' />
				<video autoPlay={true} loop={true} playsInline={true}>
					<source src={NationalG} type='video/mp4' />
				</video>
			</Wrap>
		</Container>
	);
};

export default Viewer;
