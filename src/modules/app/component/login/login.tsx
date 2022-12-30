import React from "react";
import {
	BgImage,
	Contain,
	Container,
	CTA,
	CTALogoOne,
	CTALogoTwo,
	Description,
	SingUp,
} from "./style";
import CTALogo from "../../../../asset/image/cta-logo-one.svg";
import CTALogoT from "../../../../asset/image/cta-logo-two.png";

const Login = (props: any) => {
	return (
		<Container>
			<Contain>
				<CTA>
					<CTALogoOne src={CTALogo} alt='Logo' />
					<SingUp>GET ALL THERE</SingUp>
					<Description>
						Get Premier Access to Raya and the Last Dragon for an additional fee
						with a Disney+ subscription. As of 03/26/21, the price of Disney+
						and The Disney Bundle will increase by $1.
					</Description>
					<CTALogoTwo src={CTALogoT} alt='Logo' />
				</CTA>
				<BgImage />
			</Contain>
		</Container>
	);
};

export default Login;
