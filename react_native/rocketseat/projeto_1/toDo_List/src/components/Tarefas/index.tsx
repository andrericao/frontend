import { View, TouchableOpacity, Image, Text } from "react-native";
import { styles } from "./styles";
import BouncyCheckbox  from "react-native-bouncy-checkbox";

type Props = {
	tarefa: string
	onRemove: () => void
}

export const Tarefas = ({ tarefa, onRemove }: Props) => {

	return (
		<View style={styles.container}>

			
				<BouncyCheckbox style={styles.bouncyCheckBox}
					size={20}
					fillColor="#5E60CE"
					unFillColor="transparent"
					text={tarefa}
					innerIconStyle={{ borderWidth: 1, borderColor: "#4EA8DE" }}
					textStyle={styles.textoTarefa}
					onPress={(isChecked: boolean) => {console.info(isChecked)}}
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