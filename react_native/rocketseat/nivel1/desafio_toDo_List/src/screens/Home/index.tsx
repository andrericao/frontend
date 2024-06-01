import { useState } from "react";
import { Image, TextInput, Text, View, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./style";

import { Tarefas } from "../../components/Tarefas";


const Home = () => {

	const [tarefas, setTarefas] = useState<string[]>([]);
	const [tarefaDescricao, setTarefaDescricao] = useState("");
	const [focoInput, setFocoInput] = useState(true)

	const adicionarTarefa = () => {
		if (tarefas.includes(tarefaDescricao)) {
			return Alert.alert("Atenção", "Tarefa já existe!");
		}
		setTarefas(prevState => [...prevState, tarefaDescricao]);
		setTarefaDescricao("");
	}

	const removerTarefa = (tarefa: string) => {

		Alert.alert("Remover", `Tem certeza que deseja remover tarefa ${tarefa}?`, [
			{
				text: "Sim",
				onPress: () => 
				// O método delete ocorre por meio do filter
				// Onde filtramos todas as tarefas que são diferentes 
				// da tarefa que veio como parâmetro
			setTarefas(prevState => prevState.filter(tarefaDescricao => tarefaDescricao !== tarefa))
			},
			{
				text: "Não",
				style: "cancel"
			}
		])
	} 

	return (
		<View style={styles.container}>
			<Image
				style={styles.imagemTitulo}
				source={require("../../../assets/logo-todo.png")} />
			
			<View style={styles.status}>
				<Text style={styles.concluidas}>Criadas</Text>
				<Text style={styles.criadas}>Concluídas</Text>
			</View>
			
			<View style={styles.formulario}>
				<TextInput
					style={focoInput ? styles.input : styles.inputBorda}
					placeholder="Adicione uma nova tarefa"
					placeholderTextColor="#808080"
					onChangeText={setTarefaDescricao}
					value={tarefaDescricao}
					onFocus={() => setFocoInput(false)}
					onBlur={() => setFocoInput(true)}
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
						onRemove={() => removerTarefa(item)}
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