import { TextInput, TextInputProps } from "react-native";
// "useTheme" é usado para acessar o arquivo da pasta "theme"
import { useTheme } from "styled-components/native";

import { Container } from "./styles";

type Props = TextInputProps & {
	inputRef?: React.RefObject<TextInput>;
}

export const Input = ({ inputRef,...rest }: Props) => {

	// "theme" desestrururado
	const { COLORS } = useTheme()

	return (
		<Container
			ref={inputRef}
			placeholderTextColor={COLORS.GRAY_300}
			{...rest}
		/>
	);
};