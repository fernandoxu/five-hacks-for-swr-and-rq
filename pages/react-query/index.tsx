import client from './client';
import { QueryClientProvider } from 'react-query';
import { Button, Container, Stack, Title } from '@mantine/core';
import Login from './login';
import StopWatch from './stopwatch';
import Logger from './logger';
import GPS from './GPS';
import Link from 'next/link';
import Webworker from './webworker';
import GlobalState from './global-state';

const ReactQueryDemo = () => (
  <Container>
    <Link href='/swr'>
      <Button
        variant='gradient'
        gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}
        component='a'
      >
        swr demo
      </Button>
    </Link>
    <Stack>
      <Title>Login</Title>
      <Login />
      <Title>Stop Watch</Title>
      <StopWatch />
      <Title>Logger</Title>
      <Logger />
      <Title>GPS</Title>
      <GPS />
      <Title>web worker</Title>
      <Webworker />
      <Title>global state</Title>
      <GlobalState />
    </Stack>
  </Container>
);

const ReactQueryDemoWithProvider = () => {
  return (
    <QueryClientProvider client={client}>
      <ReactQueryDemo />
    </QueryClientProvider>
  );
};

export default ReactQueryDemoWithProvider;
