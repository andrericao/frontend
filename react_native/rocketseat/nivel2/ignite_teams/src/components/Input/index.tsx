import { TextInputProps } from "react-native";
// "useTheme" é usado para acessar o arquivo da pasta "theme"
import { useTheme } from "styled-components/native";

import { Container } from "./styles";

export const Input = ({ ...rest }: TextInputProps) => {

	// "theme" desestrururado
	const { COLORS } = useTheme()

	return (
		<Container
			placeholderTextColor={COLORS.GRAY_300}
			{...rest}
		/>
	);
};