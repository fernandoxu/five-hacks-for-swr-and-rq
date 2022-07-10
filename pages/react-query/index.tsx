import client from './client';
import { QueryClientProvider } from 'react-query';
import { Container, Stack, Title } from '@mantine/core';
import Login from './login';
import StopWatch from './stopwatch';

const ReactQueryDemo = () => {
  return (
    <Container>
      <Stack>
        <Title>Login</Title>
        <Login />
        <Title>Stop Watch</Title>
        <StopWatch />
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
