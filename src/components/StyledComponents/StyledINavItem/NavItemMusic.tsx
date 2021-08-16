import React from 'react';
import styled from "styled-components";
import Flex from "../Flex";
import Container from "../Container";

// Type (TS)
type PropsType = { fill?: string }

const NavItemMusic: React.FC<PropsType> = (props) => {

	return (
		<Container padding='20px 25px'>
			<Flex align='center'>
				<StyledWrapperIcon>
					<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" fill={props.fill} x="0px" y="0px"
						 viewBox="0 0 467.2 467.2">
						<g>
							<path d="M467.2,235.7c0-62.4-24.3-121.1-68.4-165.2S296,2.1,233.6,2.1S112.5,26.4,68.4,70.5S0,173.3,0,235.7v110.6
								c0,62.5,50.9,113.4,113.4,113.4c7.5,0,13.5-6,13.5-13.5V246.5c0-7.5-6-13.5-13.5-13.5c-34.6,0-65.6,15.5-86.4,40v-37.3
								c0-113.9,92.7-206.6,206.6-206.6s206.6,92.7,206.6,206.6c0,0.9,0.1,1.8,0.3,2.7c-0.2,0.9-0.3,1.8-0.3,2.7v37.3
								c-20.8-24.5-51.8-40-86.4-40c-7.5,0-13.5,6-13.5,13.5v199.7c0,7.5,6,13.5,13.5,13.5c62.5,0,113.4-50.9,113.4-113.4V241.1
								c0-0.9-0.1-1.8-0.3-2.7C467.1,237.5,467.2,236.6,467.2,235.7z M99.8,261v170.6c-41.2-6.5-72.9-42.3-72.9-85.3
								C27,303.3,58.6,267.5,99.8,261z M367.4,437V266.4c41.2,6.5,72.9,42.3,72.9,85.3C440.2,394.8,408.6,430.5,367.4,437z"/>
						</g>
					</svg>
				</StyledWrapperIcon>

				<TitleNavItem fill={props.fill}>Music</TitleNavItem>
			</Flex>
		</Container>
    )
};

export default NavItemMusic;

// Style
const StyledWrapperIcon = styled.div`
	width: 35px;
	height: 35px;
`

const TitleNavItem = styled.span<PropsType>`
	display: block;
	margin-left: 25px;
	color: ${props => props.fill};

	@media (max-width: 800px) {
		display: none;
	}
`