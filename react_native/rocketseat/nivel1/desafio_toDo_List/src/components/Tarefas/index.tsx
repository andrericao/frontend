import { View, TouchableOpacity, Image, Text } from "react-native";
import { styles } from "./styles";
import BouncyCheckbox  from "react-native-bouncy-checkbox";
import { useState } from "react";

type Props = {
	tarefa: string
	onRemove: () => void

}

export const Tarefas = ({ tarefa, onRemove }: Props) => {

	const [checkBoxState, setCheckBoxState] = useState(false);

	return (
		<View style={styles.container}>
			
				<BouncyCheckbox style={styles.bouncyCheckBox}
					size={20}
					fillColor={checkBoxState ? "#5E60CE" : "#4EA8DE"}
					unFillColor="transparent"
					text={tarefa}
					innerIconStyle={{ borderWidth: 1}}
					textStyle={checkBoxState ? styles.textTarefaFeita : styles.textoTarefa}
					onPress={setCheckBoxState}
					/>
				

			<TouchableOpacity onPress={onRemove}>
				<Image
					style={styles.botaoIcone}
					source={require("../../../assets/trash.png")}
				/>
			</TouchableOpacity>
		</View>
	);
}