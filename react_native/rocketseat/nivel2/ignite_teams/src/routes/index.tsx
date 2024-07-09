import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from "./app.routes";
import { useTheme } from "styled-components/native";

export const Routes = () => {
	// evitando efeito "glitch" --> tela branca ao mudar de tela
	const { COLORS } = useTheme();
	return (

		<View style={{ flex: 1, backgroundColor: COLORS.GRAY_600}}>
			<NavigationContainer>
				<AppRoutes />
			</NavigationContainer>
		</View>
	)
}