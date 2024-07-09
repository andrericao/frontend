import { useState, useEffect } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Container, Content, Icon } from "./styles";

import { AppError } from "@utils/AppError";
import { groupCreate } from "@storage/group/groupCreate";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Button } from "@components/Button";


export const NewGroup = () => {

	const [group, setGroup] = useState("");

	const navigation = useNavigation();

	async function handleNew() {
		try {
			if (group.trim().length === 0) {
				return Alert.alert("Novo Grupo", "Informe o nome da Turma.")
			}

			await groupCreate(group.trim());
			navigation.navigate("players", { group });
		} catch (error) {
			if (error instanceof AppError) {
				Alert.alert("Novo Grupo", error.message);				
			} else {
				Alert.alert("Novo Grupo", "Não foi possível criar um novo grupo!")
				console.error(error);
			}
		}
	}
	return (
		<Container>
			<Header showBackButton />

			<Content >
				<Icon />
				<Highlight
					title="Nova Turma"
					subtitle="Crie uma nova turma"
				/>

				<Input
					placeholder="Nova Turma"
					onChangeText={setGroup}
				/>

				<Button 
					title="Criar"
					style={{ marginTop: 20 }}
					onPress={handleNew}
				/>
			</Content>

		</Container>
	)
}