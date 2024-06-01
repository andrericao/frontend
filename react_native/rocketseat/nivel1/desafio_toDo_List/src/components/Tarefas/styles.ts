import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		width: "100%",
		flexDirection: "row",
		backgroundColor: "#262626",
		marginBottom: 10,
		borderRadius: 5,
		alignItems: "center",
		height: 56,
		paddingHorizontal: 16
	},

	textoTarefa: {
		color: "#f2f2f2",
		fontSize: 16,
		borderRadius: 5,
	},

	textTarefaFeita: {
		color: "#808080",
		fontSize: 16,
		borderRadius: 5,
	},

	botaoIcone: {
		width: 28,
		height: 28,
	},

	bouncyCheckBox: {
		width: "93%"		
	}
});