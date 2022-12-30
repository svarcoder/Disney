import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../modules/firebase/firebase";
import {
	AddList,
	Background,
	Container,
	ContentMeta,
	Controls,
	Description,
	GroupWatch,
	ImageTitle,
	Player,
	SubTitle,
	Trailer,
} from "./style";
interface ParamsProps {
	id: string;
}
const Detail = (props: any) => {
	const { id } = useParams<ParamsProps>();
	const [detailData, setDetailData] = useState<any>({});

	useEffect(() => {
		getDoc(doc(db, "movies", id))
			.then((doc) => {
				if (doc.exists()) {
					setDetailData(doc.data());
				} else {
					console.log("no such document in firebase 🔥");
				}
			})
			.catch((error) => {
				console.log("Error getting document:", error);
			});
	}, [id]);

	return (
		<Container>
			<Background>
				<img alt={detailData.title} src={detailData.backgroundImg} />
			</Background>

			<ImageTitle>
				<img alt={detailData.title} src={detailData.titleImg} />
			</ImageTitle>
			<ContentMeta>
				<Controls>
					<Player>
						<img src='/images/play-icon-black.png' alt='' />
						<span>Play</span>
					</Player>
					<Trailer>
						<img src='/images/play-icon-white.png' alt='' />
						<span>Trailer</span>
					</Trailer>
					<AddList>
						<span />
						<span />
					</AddList>
					<GroupWatch>
						<div>
							<img src='/images/group-icon.png' alt='' />
						</div>
					</GroupWatch>
				</Controls>
				<SubTitle>{detailData.subTitle}</SubTitle>
				<Description>{detailData.description}</Description>
			</ContentMeta>
		</Container>
	);
};

export default Detail;
