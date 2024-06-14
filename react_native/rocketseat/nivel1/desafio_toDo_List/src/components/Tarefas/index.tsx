import { View, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import BouncyCheckbox  from "react-native-bouncy-checkbox";
import { useState } from "react";
//import {TarefasItens} from "../../screens/Home"

type Props = {
	//tarefaChecada: TarefasItens;
	//concluirTarefa: (checado: boolean, tarefaChecada: TarefasItens) => void;
	//chamarContador: (status: boolean) => {};
	tarefa: string;
	onRemove: () => void;
	mudarStatus: () => void;
}

export const Tarefas = ({ tarefa, onRemove, mudarStatus/* chamarContador, tarefaChecada*/ }: Props) => {

	const [checkBoxState, setCheckBoxState] = useState(false);

	// POG
	const concluirTarefa = () => {
		if (!checkBoxState)
			setCheckBoxState(true);
		else
			setCheckBoxState(false);

		mudarStatus();
	}

	return (
		<View style={styles.container}>
			
				<BouncyCheckbox style={styles.bouncyCheckBox}
					size={20}
					fillColor={checkBoxState ? "#5E60CE" : "#4EA8DE"}
					unFillColor="transparent"
					text={tarefa}
					innerIconStyle={{ borderWidth: 1}}
					textStyle={checkBoxState ? styles.textTarefaFeita : styles.textoTarefa}
					onPress={concluirTarefa}
					/>
				

			<TouchableOpacity
				onPress={onRemove}>
					<Image
						style={styles.botaoIcone}
						source={require("../../../assets/trash.png")}
					/>
			</TouchableOpacity>
		</View>
	);
}