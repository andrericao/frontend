import { useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard /* Com carasterística de botão */ } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

import { Container } from './styles';

export const Groups = () => {

  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  const handleNewGroup = () => {
     // sugestão de rotas criadas através de tipagem (pasta @types)
    //navigation.navigate("players", {group: "Turma da cachaça"});
    
    navigation.navigate("new");
  }

  return (
    <Container>
      <Header />
      <Highlight
        title="Turmas"
        subtitle="Jogue com a sua turma"
      />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard
            title={item}
          />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Bora Cadastrar a Primeira Turma?"
          />
        )}
        showsVerticalScrollIndicator={false}
      />

      <Button
        title="Criar Nova Turma"
        onPress={handleNewGroup}
      />

    </Container>
  );
}