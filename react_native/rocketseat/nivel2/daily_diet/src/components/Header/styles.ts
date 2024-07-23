import styled from "styled-components/native";

export const Container = styled.View`
	width: 100%;

	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const PerfilImg = styled.Image`
	height: 56px;
	width: 56px;

	border-radius: 50px;
	border: 2px solid ${({ theme }) => theme.COLORS.GRAY_1};
`;


