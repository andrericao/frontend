import { Container, Content, Icon } from "./styles";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export const NewGroup = () => {
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
				/>

				<Button 
					title="Criar"
					style={{ marginTop: 20}}
				/>
			</Content>

		</Container>
	)
}