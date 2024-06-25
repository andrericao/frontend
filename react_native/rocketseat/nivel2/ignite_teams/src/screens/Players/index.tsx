import { useState } from "react";
import { FlatList } from "react-native";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { PlayerCard } from "@components/PlayerCard";

import { Container, Form, HeaderList, NumbersOfPlayers } from "./style";

export const Players = () => {

	const [team, setTeam] = useState("Time A");
	const [players, setPlayers] = useState(["André"]);

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
				<NumbersOfPlayers>
					{players.length}
				</NumbersOfPlayers>
			</HeaderList>

			<FlatList
				data={players}
				keyExtractor={item => item}
				renderItem={({ item }) => (
					<PlayerCard
						name={item}
					/>
				)}
			/>

		</Container>
	)
}