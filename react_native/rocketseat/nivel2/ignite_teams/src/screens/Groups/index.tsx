import { useState, useCallback } from 'react';
import { Alert, FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { groupsGetAll } from '@storage/group/groupsGetAll';

import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { Loading } from '@components/Loading';
import { Highlight } from '@components/Highlight';
import { ListEmpty } from '@components/ListEmpty';
import { GroupCard /* Com carasterística de botão */ } from '@components/GroupCard';

import { Container } from './styles';

export const Groups = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  const handleNewGroup = () => {
     // sugestão de rotas criadas através de tipagem (pasta @types)
    //navigation.navigate("players", {group: "Turma da cachaça"});
    
    navigation.navigate("new");
  }

  async function fetchGroups() {
    try {
      setIsLoading(true);

      const data = await groupsGetAll();
      setGroups(data);
		} catch (error) {
      console.error(error);
      Alert.alert("Turmas", "Não foi possível carregar as turmas.")
    } finally {
      setIsLoading(false);
    }
  }
  
  function handleOpenGroup(group: string) {
    navigation.navigate("players", { group });
  }

  useFocusEffect(useCallback(() => {
    fetchGroups();
  }, []));


  return (
    <Container>
      <Header />
      <Highlight
        title="Turmas"
        subtitle="Jogue com a sua turma"
      />

      {
        isLoading ? <Loading /> :
          
          <FlatList
            data={groups}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <GroupCard
                title={item}
                onPress={() => handleOpenGroup(item)}
              />
            )}
            contentContainerStyle={groups.length === 0 && { flex: 1 }}
            ListEmptyComponent={() => (
              <ListEmpty message="Bora Cadastrar a Primeira Turma?"
              />
            )}
            showsVerticalScrollIndicator={false}
          />
      }

      <Button
        title="Criar Nova Turma"
        onPress={handleNewGroup}
      />

    </Container>
  );
}