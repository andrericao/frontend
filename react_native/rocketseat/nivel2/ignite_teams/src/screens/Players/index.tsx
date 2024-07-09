import { useState, useEffect, useRef } from "react";
import { Alert, FlatList, TextInput } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

import { Input } from "@components/Input";
import { Header } from "@components/Header";
import { Filter } from "@components/Filter";
import { Button } from "@components/Button";
import { Loading } from "@components/Loading";
import { ListEmpty } from "@components/ListEmpty";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { PlayerCard } from "@components/PlayerCard";

import { AppError } from "@utils/AppError";

import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO";
import { groupRemoveByName } from "@storage/group/groupRemoveByName";
import { PlayerRemoveByGroup } from "@storage/player/playerRemoveByGroup";
import { playersGetByGroupAndTeam } from "@storage/player/playersGetByGroupAndTeam";

import { Container, Form, HeaderList, NumberOfPlayers } from "./style";


type RouteParams = {
	group: string;
}

export const Players = () => {

	const [isLoading, setIsLoading] = useState(true);

	const [team, setTeam] = useState("Time A");
	const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
	const [newPlayerName, setNewPlayerName] = useState("");

	const newPlayerNameInputRef = useRef<TextInput>(null);

	const navigation = useNavigation();

	// pega o estado "group" da "screen" "NewGroup" como parâmetro  
	const route = useRoute();
	const { group } = route.params as RouteParams;

	async function handleAddPlayer() {
		if (newPlayerName.trim().length === 0) {
			return Alert.alert("Nova Pessoa", "Informe nova pessoa para adicionar.")
		}

		const newPlayer = {
			name: newPlayerName,
			team,
		}

		try {

			await playerAddByGroup(newPlayer, group);
			newPlayerNameInputRef.current?.blur();
			setNewPlayerName("");
			fetchPlayersByTeam();

		} catch (error) {
			
			if (error instanceof AppError) {
				Alert.alert("Nova Pessoa", error.message);
			} else {
				console.error(error);
				Alert.alert("Nova pessoa", "Não foi possível adicionar");
			}
			setNewPlayerName("");
		}
	}

	async function fetchPlayersByTeam() {
		try {
			setIsLoading(true);

			const playersByTeam = await playersGetByGroupAndTeam(group, team);
			setPlayers(playersByTeam);
		} catch (error) {
			console.error(error);
			Alert.alert("Pessoas Não Encontradas!","Não foi possível carregar as pessoas do time")
		} finally {
			setIsLoading(false);
		}
	}

	async function handleRemovePlayer(playerName: string) {
		try {
			await PlayerRemoveByGroup(playerName, group);
			fetchPlayersByTeam();
		} catch (error) {
			console.error(error);
			Alert.alert("Remover Pessoa", "Não foi possível remover pessoa selecionada");
		}
	}

	async function removeGroup() {
		try{
			await groupRemoveByName(group);
			navigation.navigate("groups");
		} catch (error) {
			throw error;
		}
	}

	async function handleRemoveGroup() {
		Alert.alert(
			"Remover",
			"Deseja remover turma?",
			[
				{ text: "Não", style: "cancel" },
				{ text: "Sim", onPress: () => removeGroup() }
			]
		)
	}

	useEffect(() => {
		fetchPlayersByTeam();
	}, [team]);

	return (
		<Container>
			<Header showBackButton />
			<Highlight
				title={ group }
				subtitle="Adicione um time"
			/> 
			
			<Form>
				<Input
					inputRef={newPlayerNameInputRef}
					onChangeText={setNewPlayerName}
					placeholder="Nome do Candango"
					// Correção ortografica cancelada caso haja nome diferente / apelido / e-mail
					autoCorrect={false}
					value={newPlayerName}
					// Dar enter com o teclado
					onSubmitEditing={handleAddPlayer}
					returnKeyType="done"					
				/>
				<ButtonIcon
					icon="add"
					onPress={handleAddPlayer}
				/>
			</Form>

			<HeaderList>				
						<FlatList
							data={["Time A", "Time B", "Time C", "Time D"]}
							keyExtractor={item => item}
							renderItem={({ item }) => (
								<Filter
									title={item}
									isActive={item === team}
									onPress={() => setTeam(item)}
								/>
							)}
							horizontal
						/>

						
				<NumberOfPlayers>
					{players.length}
				</NumberOfPlayers>
			</HeaderList>

			{
				isLoading ? <Loading /> :
					<FlatList
						data={players}
						keyExtractor={item => item.name}
						renderItem={({ item }) => (
							<PlayerCard
								name={item.name}
								onRemove={() => handleRemovePlayer(item.name)}
							/>
						)}
						ListEmptyComponent={() => (
							<ListEmpty
								message="Não há pessoas nesse time"
							/>
						)}
						showsVerticalScrollIndicator={false}
						// A estilização abaixo serve aumentar distância 
						// entre o final da lista e o final do celular
						contentContainerStyle={[
							{ paddingBottom: 100 },
							players.length === 0 && { flex: 1 }
						]}
					/>
			}

			<Button 
				title="Remover Turma"
				type="SECUNDARY"
				onPress={handleRemoveGroup}
			/>
		</Container>
	)
}