import { Container, TitleCard, TextCard } from "./styles";

type Props = {
	color: string;
}

export function Card() {
	return (
		<Container>
			<TitleCard>
				90,80%
			</TitleCard>
			<TextCard>
				das refeições dentro da dieta
			</TextCard>
		</Container>
	);
}