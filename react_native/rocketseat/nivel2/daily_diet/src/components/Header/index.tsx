import { Image } from "react-native";
import { Container, PerfilImg } from "./styles";

import logo from "@assets/Logo.png"
import perfilImg from "@assets/nathalia_yellow.jpg"

export function Header() {
	return (
		<Container>

			<Image source={logo} />

				<PerfilImg source={perfilImg} />
			
		</Container>
	);
}