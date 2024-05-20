import { useState } from "react";
import { Image, TextInput, Text, View, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./style";

import { Tarefas } from "../../components/Tarefas";


const Home = () => {

	const [tarefas2, setTarefas] = useState<string[]>([]);
	const tarefas = ["Correr", "Nadar", "Programar", "Caminhar", "Comer", "Descansar", "Passear"]

	const adicionarTarefa = () => {
		console.info("Tarefa Adicionada!");
	}

	const removerTarefa = (tarefa: string) => {
		console.log(`tarefa ${tarefa} removida`)
	} 

	return (
		<View style={styles.container}>
			<Image
				style={styles.imagemTitulo}
				source={require("../../../assets/logo-todo.png")} />
			
			<View style={styles.formulario}>
				<TextInput
					style={styles.input}
					placeholder="Adicione uma nova tarefa"
					placeholderTextColor="#808080"
				/>
				<TouchableOpacity
					style={styles.botao}
					onPress={adicionarTarefa}
				>
					<Text style={styles.textoBotao}>
						+
					</Text>
				</TouchableOpacity>
			</View>

			<FlatList
				// lista de tarefas sem uso de "map"
				data={tarefas}
				keyExtractor={item => item}
				renderItem={({ item }) => (
					<Tarefas
						key={item}
						tarefa={item}
						onRemove={() => removerTarefa("Correr")}
					/>
				)}
				showsVerticalScrollIndicator={false}
				ListEmptyComponent={() => (
					<View style={ styles.listaVaziaImagem }>
						<Image
							source={require("../../../assets/clipboard.png")}
						/>
						<Text style={styles.listaVaziaTexto}>
						Você ainda não tem tarefas cadastradas
						</Text>
						<Text style={styles.listaVaziaTexto2}>
						Crie tarefas e organize seus itens a fazer
						</Text>
					</View>
				)}
			/>
		</View >
	);
}

export default Home;