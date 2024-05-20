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
		marginHorizontal: 12,
		paddingHorizontal: 16
	},

	textoTarefa: {
		color: "#f2f2f2",
		paddingTop: 16,
		fontSize: 16,
		borderRadius: 5,
		flex: 1,
	},

	botaoIcone: {
		width: 28,
		height: 28,
	},

	bouncyCheckBox: {
		width: 380,
	}
});