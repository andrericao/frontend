import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export function Home(){
	const [participants, setParticipants] = useState<string[]>([]);
	const [participantName, setParticipantName] = useState("");

	const handleParticipantAdd = () => {
		if(participants.includes(participantName)){
			return Alert.alert("Participante Existe", "Já existe participante na lista com esse nome")
		}
		setParticipants(prevState => [...prevState, participantName]);
		setParticipantName("");
	}

	const handleParticipantRemove = (name: string) => {

		Alert.alert("Remover", `Remover o participante ${name}`, [
			{
				text: "Claro",
				onPress: () => setParticipants(prevState =>
					prevState.filter(participant => participant !== name))
			},
			{
				text: "Tá maluco?",
				style: "cancel"
			}
		]);
	}

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Encontro no Raboni
      </Text>
      <Text style={styles.eventDate}>
        12 de outubro de 2019
      </Text>
		<View style={styles.form}>
			<TextInput 
				style={styles.input}
				placeholder="Nome do Participante"
				placeholderTextColor="#6B6B6B"
				//onChangeText={textoDigitado => setParticipantName(textoDigitado)}
				onChangeText={setParticipantName}
				// VALUE -> usado para limpar input
				// está vinculado ao setParticipantName
				value={participantName}
			/>

				<TouchableOpacity 
					style={styles.button}
					onPress={handleParticipantAdd}>
					<Text style={styles.buttonText}>
						+ 
					</Text>
				</TouchableOpacity>
			</View>

		<FlatList
			data={participants}
			keyExtractor={item => item}
			renderItem={({ item }) => (
				<Participant 
					key={item}
					name={item} 
					onRemove={() => handleParticipantRemove(item)}
					/>
				)}
				showsVerticalScrollIndicator={false}
				ListEmptyComponent={() => (
					<Text style={styles.listEmptyText}>
						Niguém na lista ainda. Bora adicionar a tropa
					</Text>
				)}
			/>
    </View>
  );
}