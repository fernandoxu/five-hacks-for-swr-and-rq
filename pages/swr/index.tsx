import { Button, Container, Stack, Title } from '@mantine/core';
import Link from 'next/link';
import GlobalState from './global-state';
import GPS from './GPS';
import Logger from './logger';
import Login from './login';
import StopWatch from './stopwatch';
import Webworker from './webworker';

const SwrDemo = () => {
  return (
    <Container>
      <Link href='/react-query'>
        <Button
          variant='gradient'
          gradient={{ from: 'teal', to: 'lime', deg: 105 }}
          component='a'
        >
          react-query demo
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
};

export default SwrDemo;
