import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel, Wrap } from "./style";
import Badding from "../../asset/image/slider-badging.jpg";
import Scale from "../../asset/image/slider-scale.jpg";
import Badag from "../../asset/image/slider-badag.jpg";
import Scales from "../../asset/image/slider-scales.jpg";

const ImageSlide = (props: any) => {
	let settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
	};

	return (
		<Carousel {...settings}>
			<Wrap>
				<a>
					<img src={Badding} alt='' />
				</a>
			</Wrap>

			<Wrap>
				<a>
					<img src={Scale} alt='' />
				</a>
			</Wrap>

			<Wrap>
				<a>
					<img src={Badag} alt='' />
				</a>
			</Wrap>

			<Wrap>
				<a>
					<img src={Scales} alt='' />
				</a>
			</Wrap>
		</Carousel>
	);
};

export default ImageSlide;
