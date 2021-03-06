import React from 'react';
import styled from "styled-components";
import Flex from "../Flex";
import Container from "../Container";

// Type (TS)
type PropsType = { fill?: string }

const NavItemNews: React.FC<PropsType> = (props) => {

	return (
		<Container padding='20px 25px'>
			<Flex align='center'>
					<StyledWrapperIcon>
						<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" fill={props.fill} x="0px" y="0px"
							 viewBox="0 0 489.8 489.8">
							<g>
								<g>
									<path d="M359.1,161.693v-88.3c0-4.6-2.5-8.7-6.6-10.8c-4-2.1-8.9-1.8-12.7,0.8c-87.8,60.7-138.2,68.5-172.3,68.5H70
									c-38.6,0-70,31.4-70,70v26c0,38.6,31.4,70,70,70h46.8l50.8,123.1c1.9,4.7,6.5,7.6,11.3,7.6c1.6,0,3.1-0.3,4.7-0.9
									c6.3-2.6,9.2-9.7,6.7-16l-47-113.8h24.1c118.8,0,167.4,62.9,169.6,65.8c2.4,3.2,6,5,9.8,5c1.3,0,2.6-0.2,3.8-0.6
									c5-1.7,8.4-6.3,8.4-11.6v-88.2c24.3-5.6,42.4-27.3,42.4-53.3C401.6,188.993,383.4,167.193,359.1,161.693z M24.5,227.893v-26
									c0-25.1,20.4-45.5,45.5-45.5h42.8v117H70C44.9,273.393,24.5,252.993,24.5,227.893z M334.6,326.993
									c-27.2-22.4-80.6-53.6-167.2-53.6h-30.2v-117h30.2c35,0,85.2-7.2,167.2-60V326.993z M359.1,242.493v-55.1
									c10.6,4.7,17.9,15.3,17.9,27.6C377.1,227.193,369.7,237.793,359.1,242.493z"/>
									<path d="M477.5,202.693h-47.9c-6.8,0-12.3,5.5-12.3,12.3s5.5,12.3,12.3,12.3h47.9c6.8,0,12.3-5.5,12.3-12.3
									C489.8,208.093,484.3,202.693,477.5,202.693z"/>
									<path d="M412.6,176.893c1.9,4.8,6.5,7.8,11.4,7.8c1.5,0,3-0.3,4.5-0.8l46.4-18.2c6.3-2.5,9.4-9.6,6.9-15.9
									c-2.5-6.3-9.6-9.4-15.9-6.9l-46.4,18.2C413.3,163.493,410.2,170.593,412.6,176.893z"/>
									<path d="M474.9,264.093l-46.4-18.2c-6.3-2.5-13.4,0.6-15.9,6.9c-2.5,6.3,0.6,13.4,6.9,15.9l46.4,18.2c1.5,0.6,3,0.8,4.5,0.8
									c4.9,0,9.5-3,11.4-7.8C484.3,273.693,481.2,266.593,474.9,264.093z"/>
								</g>
							</g>
						</svg>
					</StyledWrapperIcon>

					<TitleNavItem fill={props.fill}>News</TitleNavItem>
			</Flex>
		</Container>
	)
};

export default NavItemNews;

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