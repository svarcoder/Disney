import styled from "styled-components";
import LoginLogo from "../../../../asset/image/login-background.jpg";

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	text-align: center;
	overflow: hidden;
	height: 100vh;
`;
export const Contain = styled.div`
	margin-bottom: 10vw;
	width: 100%;
	position: relative;
	min-height: 100vh;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 80px 40px;
	height: 100%;
`;

export const BgImage = styled.div`
	height: 100%;
	background-image: url(${LoginLogo});
	background-position: top;
	background-size: cover;
	background-repeat: no-repeat;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	z-index: -1;
`;
export const CTA = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	margin-bottom: 2vw;
	max-width: 650px;
	margin-top: 0;
	margin-right: auto;
	margin-left: auto;
	transition-timing-function: ease-out;
	transition: 0.2s;
	width: 100%;
`;

export const CTALogoOne = styled.img`
	margin-bottom: 12px;
	max-width: 600px;
	min-height: 1px;
	display: block;
	width: 100%;
`;

export const SingUp = styled.a`
	font-weight: bold;
	color: #f9f9f9;
	background-color: #0063e5;
	margin-bottom: 12px;
	width: 100%;
	letter-spacing: 1.5px;
	font-size: 18px;
	padding: 16.5px 0;
	border: 1px solid transparent;
	border-radius: 4px;
	&:hover {
		background-color: #0483ee;
	}
`;

export const Description = styled.p`
	color: hsla(0, 0%, 95.3%, 1);
	font-size: 11px;
	margin: 0 0 24px;
	line-height: 1.5;
	letter-spacing: 1.5px;
`;

export const CTALogoTwo = styled.img`
	max-width: 600px;
	margin-bottom: 20px;
	display: inline-block;
	vertical-align: bottom;
	width: 100%;
`;
