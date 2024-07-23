import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
	flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
	padding: 24px;
`;

export const Title = styled.Text`

${({ theme }) => css`
		color: ${ theme.COLORS.GREEN_DARK };
		font-size: ${ theme.FONT_SIZE.XXL }px;
	`};
`;