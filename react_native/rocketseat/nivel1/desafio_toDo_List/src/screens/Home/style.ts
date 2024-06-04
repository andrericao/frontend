import { StyleSheet } from "react-native";
import { useFonts, Inter_700Bold } from "@expo-google-fonts/inter";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#0D0D0D",
		alignItems: "center",
		paddingHorizontal: 24,
	},

	imagemTitulo: {
		marginTop: 75,
		width: 140,
		height: 40
	},

	formulario: {
		width: "100%",
		flexDirection: "row",
		marginTop: 15,
		marginBottom: 42
	},

	status: {
		flexDirection: "row",		
		marginTop: 60,
		width: "100%",
		justifyContent: "space-between"
	},	

	subStatus: {
		flexDirection: "row",
		marginRight: 10,
	},

	numeroStatus: {
		color: "#f2f2f2",
		fontSize: 18,
		fontWeight: "bold",
		borderRadius: 20,
		backgroundColor: "#333333",
		width: 36,
		height: 32,
		marginLeft: 10,
		paddingLeft: 8,
		paddingTop: 3
	},

	criadas: {
		color: "#4EA8DE",
		fontSize: 18,
		fontWeight: "bold",
		paddingTop: 2
	},

	concluidas: {
		color: "#5E60CE",
		fontSize: 18,
		fontWeight: "bold",
		paddingTop: 2
	},

	input: {
		flex: 1,
		height: 56,
		backgroundColor: "#262626",
		color: "#f2f2f2",
		borderRadius: 5,
		padding: 16,
		fontSize: 16,
		marginRight: 10,
	},

	inputBorda: {
		flex: 1,
		height: 56,
		backgroundColor: "#262626",
		color: "#f2f2f2",
		borderRadius: 5,
		padding: 16,
		fontSize: 16,
		marginRight: 10,
		borderWidth: 1,
		borderColor: "#5E60CE",
	},

	botao: {
		height: 56,
		width: 56,
		borderRadius: 5,
		backgroundColor: "#1E6F9F",
		alignItems: "center",
	},

	textoBotao: {
		color: "#f2f2f2",
		fontSize: 24,
		paddingTop: 10
	},

	listaVaziaImagem: {
		alignItems: "center",
	},

	listaVaziaTexto: {
		color: "#808080",
		fontSize: 18,
		marginTop: 25,
		fontWeight: "bold"
	},

	listaVaziaTexto2: {
		color: "#808080",
		fontSize: 16,
	},
}); 