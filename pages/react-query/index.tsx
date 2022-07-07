import client from './client';
import { QueryClientProvider } from 'react-query';
import { Container, Stack, Title } from '@mantine/core';
import Login from './login';

const ReactQueryDemo = () => {
  return (
    <Container>
      <Stack>
        <Title>Login</Title>
        <Login />
      </Stack>
    </Container>
  );
};

const ReactQueryDemoWithProvider = () => {
  return (
    <QueryClientProvider client={client}>
      <ReactQueryDemo />
    </QueryClientProvider>
  );
};

export default ReactQueryDemoWithProvider;
