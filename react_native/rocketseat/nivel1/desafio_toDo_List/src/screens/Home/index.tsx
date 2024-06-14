import { useState, useEffect } from "react";
import { Image, TextInput, Text, View, TouchableOpacity, FlatList, Alert, MouseEvent } from "react-native";
import { styles } from "./style";
import { Tarefas } from "../../components/Tarefas";

interface TarefasItens  {
	tarefa: string;
	checada: boolean;
}

const Home = () => {

	const [tarefas, setTarefas] = useState<TarefasItens[]>([]);
	const [tarefaDescricao, setTarefaDescricao] = useState("");
	const [focoInput, setFocoInput] = useState(true);
	const [criadas, setCriadas] = useState(0);
	const [concluidas, setConcluidas] = useState(0);

	const adicionarTarefa = () => {

		if (tarefaDescricao === "") return;

		for (let i = 0; i < tarefas.length; i++){
			if (tarefas.find(tarefa => tarefa.tarefa === tarefaDescricao)) {
				return Alert.alert("Atenção", "Tarefa já existe!");
			}
		}
		// criei objeto com mesma assinatura de TarefasItens
		const tarefaDadosInput = {
			"tarefa": tarefaDescricao,
			"checada": false
		}
		setTarefas(prevState => [...prevState, tarefaDadosInput]);
		// Observar
		setCriadas(tarefas.length + 1);
		setTarefaDescricao("");
	}

	// POG
	const addTarefaConcluida = (tarefa: string) => {

		const dado = {
			"tarefa": tarefa,
			"checada": Boolean
		}

		const indexTarefa = tarefas.findIndex(
			tarefaDescricao => tarefaDescricao.tarefa == tarefa);

		if (!tarefas[indexTarefa].checada) {
			tarefas[indexTarefa].checada = true;
		} else {
			tarefas[indexTarefa].checada = false;
		}
		incrementoChecada();
	}

	const incrementoChecada = () => {
		
		const tarefasConcluidas = tarefas.filter(tarefa => tarefa.checada === true);
		setConcluidas(tarefasConcluidas.length);
	}

	const decrementoTarefa = (tarefa: string) => {

		// O método delete ocorre por meio do filter
		// Onde filtramos todas as tarefas que são diferentes 
		// da tarefa que veio como parâmetro
		setTarefas(prevState =>
			prevState.filter(tarefaDescricao => tarefaDescricao.tarefa !== tarefa));
		
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
				keyExtractor={item => item.tarefa}
				renderItem={({ item }) => (
					<Tarefas
						key={item.tarefa}
						tarefa={item.tarefa}
						onRemove={() => removerTarefa(item.tarefa)}
						mudarStatus={() => addTarefaConcluida(item.tarefa)}
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