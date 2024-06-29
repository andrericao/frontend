export declare global {
	namespace ReactNavigation {
		interface RootParamList {
			// padrão do parametro
			// --> parametro: tipagem <--
			groups: undefined;
			new: undefined;
			// o "players" é diferente pq cada "players" 
			// pertence a um "group"
			players: {
				group: string;
			}
		}
	}
}