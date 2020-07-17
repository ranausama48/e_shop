import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Col, Row } from 'antd';
import styled from 'styled-components';
import { Grid, Typography, Link, Button } from '../../../components/core';
import SvgIcon from '../../../public/assets/icons/icon';
const FooterCompo = styled.footer`
	min-height: 320px;
	background: #eaeff8;
	z-index: 10;
	/* position: relative; */
`;
const Span = styled.div`
	background: #7e93ab;
	border-radius: 12px;
	height: 40px;
	width: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Wraper = styled.div`
	max-width: 215px;
	display: flex;
	justify-content: space-between;
	margin: 50px auto 0px auto;
	.anticon-instagram > svg {
		color: white;
		width: 21.85px;
		height: 18px;
	}
`;
const Footer = () => {
	const router = useRouter();
	useEffect(() => {
		const footer = document.getElementById('myFooter');
		if (window.innerHeight > 780 && window.innerWidth > 576 && router.pathname == '/career') {
			footer.classList.add('footer__fixed');
		} else {
			footer.classList.remove('footer__fixed');
		}
	});
	return (
		<FooterCompo id="myFooter">
			<Grid>
				<Row justify="space-between" gutter={16} align="middle">
					<Col md={13} xs={24}>
						<div className="mt-20">
							<Typography color="#302935" weight="600" as="h6" text="Email" />
							<Typography
								as="p"
								weight="300"
								color="#302935"
								lineHeight="16px"
								text="info@nithiias.com"
							/>
						</div>
						<div>
							<Typography color="#302935" weight="600" as="h6" text="Phone number" />
							<Typography
								as="p"
								weight="300"
								color="#302935"
								lineHeight="16px"
								text="Speak to a Nithi admissions counselor +91 95508 00028 "
							/>
						</div>
						<div>
							<div className="mt-10">
								<Typography as="h6" weight="600" text="Address" />
							</div>
							<Typography as="p" color="#302935" lineHeight="16px">
								<b>Campus Address: </b>Pedda Pendiyal, Dharmasagar mandal, Hanamkonda, Telangana 506151
							</Typography>
							<div style={{ marginTop: '5px' }}>
								<Typography as="p" color="#302935" lineHeight="16px">
									<b>City Office Address: </b>4th Floor, Above KFC, Sai Shiridi Complex. Adalat
									Circle, Hanamkonda.
								</Typography>
							</div>
						</div>
					</Col>
					<Col lg={7} md={9} xs={24}>
						<div className="d-flex h-center ">
							<Button
								bg="#D82651"
								width="200px"
								shadow="0px 4px 20px rgba(217, 38, 81, 0.3), 0px 4px 4px rgba(0, 0, 0, 0.09)"
								radius="28px"
								height="50px"
							>
								<Link external href="/assets/images/download.pdf" download>
									<Row type="flex" justify="space-between">
										<SvgIcon width={30.55} height={24} icon="download" />
										<Typography align="center" noMargin as="p" color="white" weight="bold">
											Download Brochure
										</Typography>
									</Row>
								</Link>
							</Button>
						</div>
						<div>
							<Wraper>
								<Span>
									<Link
										external
										href="https://www.facebook.com/Nithiias/"
										display="flex"
										target="_blank"
									>
										<img width="48" height="48" src="/assets/images/facebook.png" alt="facebook" />
									</Link>
								</Span>
								<Span>
									<Link
										external
										href="https://www.instagram.com/NithiAcademy/"
										display="flex"
										target="_blank"
									>
										<img
											width="48"
											height="48"
											src="/assets/images/instagram.png"
											alt="Instagram"
										/>
									</Link>
								</Span>
								<Span>
									<Link external href="https://twitter.com/Nithiias" display="flex" target="_blank">
										<img width="48" height="48" src="/assets/images/twitter.png" alt="Twitter" />
									</Link>
								</Span>
								<Span>
									<Link
										external
										href="https://www.youtube.com/channel/UCUD8CjOCdZ6Ktoj97BNLosA"
										display="flex"
										target="_blank"
									>
										<img width="48" height="48" src="/assets/images/youtube.png" alt="youtube" />
									</Link>
								</Span>
							</Wraper>
						</div>
					</Col>
					<Col md={24}>
						<Typography as="p" align="center" className="mt-20">
							Copyright © 2020 NITHI IAS. All Rights Reserved
						</Typography>
					</Col>
				</Row>
			</Grid>
		</FooterCompo>
	);
};
export default Footer;
