import styled, { css } from "styled-components/native";

export const Container = styled.View`

	margin-top: 35px;
	width: 100%;
	height: 150px;
	border-radius: 12px;

	align-items: center;
	justify-content: center;

	background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
	
`;

export const TitleCard = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.FONT_SIZE.XXL}px;
		font-family: ${theme.FONT_FAMILY.BOLD};
		color: ${theme.COLORS.GRAY_1}
	`}; 
`;

export const TextCard = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.FONT_SIZE.MD}px;
		font-family: ${theme.FONT_FAMILY.REGULAR};
		color: ${theme.COLORS.GRAY_1}
	`}; 
`;