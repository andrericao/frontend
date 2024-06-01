import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#0D0D0D",
		alignItems: "center",
		paddingHorizontal: 24,
	},

	imagemTitulo: {
		marginTop: 60,
		width: 140,
		height: 40
	},

	formulario: {
		width: "100%",
		flexDirection: "row",
		marginTop: 40,
		marginBottom: 42
	},

	status: {
		flexDirection: "row"
	},	

	concluidas: {
		color: "#4EA8DE"
	},

	criadas: {
		color: "#5E60CE"
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
		justifyContent: "center",
		alignItems: "center",
	},

	textoBotao: {
		color: "#f2f2f2",
		fontSize: 24
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