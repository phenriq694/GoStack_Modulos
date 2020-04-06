import React from 'react';

import { Container } from './styles';

export default function Main() {
  return (
    <Container>
      <Form>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Adicionar usuário"
        />

        <SubmitButton />
      </Form>
    </Container>
  );
}

Main.navigationOptions = {
  title: 'Usuários',
};
