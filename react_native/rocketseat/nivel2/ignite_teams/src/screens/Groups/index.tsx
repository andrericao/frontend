import { useState } from 'react';
import { FlatList } from 'react-native';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard /* Com carasterística de botão */ } from '@components/GroupCard';

import { Container } from './styles';

export const Groups = () => {

  const [groups, setGroups] = useState<string[]>(["Turma 1"]);

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
      />

    </Container>
  );
}