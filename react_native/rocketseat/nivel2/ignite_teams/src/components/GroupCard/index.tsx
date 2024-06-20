import { TouchableOpacityProps } from "react-native";
import { Container, Title, Icon } from "./styles";

// "Props" que deu característica de botão ao Componente "GroupCard"
type Props = TouchableOpacityProps & {
	title: string;
}

export const GroupCard = ({ title, ...rest } : Props) => {
	return (
		<Container {...rest} >
			<Icon />
			<Title>
				{title}
			</Title>
		</Container>
	);
}