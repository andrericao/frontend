import { useState } from "react";
import { FlatList } from "react-native";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { PlayerCard } from "@components/PlayerCard";
import { Button } from "@components/Button";
import { ListEmpty } from "@components/ListEmpty";

import { Container, Form, HeaderList, NumberOfPlayers } from "./style";


export const Players = () => {

	const [team, setTeam] = useState("Time A");
	const [players, setPlayers] = useState(["André", "Nathália", "Noah", "Andréa", "Henrique", "Marcos", "Valéria", "Hety", "Babu", "Valadares", "Hanrriethe"]);

	return (
		<Container>
			<Header showBackButton />
			<Highlight
				title="Nome da Turma"
				subtitle="Adicione um time"
			/> 
			
			<Form>
				<Input
					placeholder="Nome do Candango"
					// Correção ortografica cancelada caso haja nome diferente / apelido / e-mail
					autoCorrect={false}
				/>
				<ButtonIcon icon="add" />
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

			<FlatList 
				data={players}
				keyExtractor={item => item}
				renderItem={({ item }) => (
					<PlayerCard
						name={item}
						onRemove={() => { }}
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

			<Button 
				title="Remover Turma"
				type="SECUNDARY"
			/>
		</Container>
	)
}