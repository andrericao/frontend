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

			<BouncyCheckbox
				size={20}
				fillColor="#5E60CE"
				unFillColor="transparent"
				text={tarefa}
				innerIconStyle={{ borderWidth: 1, borderColor: "#4EA8DE" }}
				textStyle={styles.textoTarefa}
				onPress={(isChecked: boolean) => {}}
			/>

			<TouchableOpacity onPress={onRemove}>
				<Text>
					oi Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, rerum delectus? Nostrum fuga doloremque maiores dolores voluptatum modi dolorum? Labore eos, vel laudantium harum dolorem vero velit numquam blanditiis doloremque?

				</Text>
				<Image
					style={styles.botaoIcone}
					source={require("../../../assets/trash.png")}
				/>
			</TouchableOpacity>
		</View>
	);
}