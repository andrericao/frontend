import { useState } from "react";
import { Image, TextInput, Text, View, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./style";
import { Tarefas } from "../../components/Tarefas";

const Home = () => {

	//const [tarefas, setTarefas] = useState<string[]>([]);
	const [tarefas, setTarefas] = useState<{ tarefasDescricao: string;  status: boolean}[]>([]);
	const [tarefaDescricao, setTarefaDescricao] = useState("");
	const [focoInput, setFocoInput] = useState(true);
	const [criadas, setCriadas] = useState(0);
	const [concluidas, setConcluidas] = useState(0);

	const concluirTarefa = () => {
	}

	const adicionarTarefa = () => {
		if (tarefas.tarefasDescricao.includes(tarefaDescricao)) {
			return Alert.alert("Atenção", "Tarefa já existe!");
		}

		setTarefas(prevState => [...prevState, tarefaDescricao]);
		// Observar
		setCriadas(tarefas.length + 1);
		setTarefaDescricao("");
	}

	const decrementoTarefa = (tarefa: string) => {

		// O método delete ocorre por meio do filter
		// Onde filtramos todas as tarefas que são diferentes 
		// da tarefa que veio como parâmetro
		setTarefas(prevState =>
			prevState.filter(tarefaDescricao => tarefaDescricao !== tarefa));
		
		// POG		
		setCriadas(criadas - 1);
	}

	const removerTarefa = (tarefa: string) => {

		Alert.alert("Remover", `Tem certeza que deseja remover tarefa ${tarefa}?`, [
			{
				text: "Sim",
				onPress: () => decrementoTarefa(tarefa)
			},
			{
				text: "Não",
				style: "cancel",
			}
		]);
		}

	return (
		<View style={styles.container}>
			<Image
				style={styles.imagemTitulo}
				source={require("../../../assets/logo-todo.png")} />
			
			<View style={styles.status}>
				<View style={styles.subStatus}>
					<Text style={styles.criadas}>Criadas</Text>
					<Text style={styles.numeroStatus}> {criadas}</Text>
				</View>
				<View style={styles.subStatus}>
					<Text style={styles.concluidas}>Concluídas</Text>
					<Text style={styles.numeroStatus}> {concluidas}</Text>
				</View>
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