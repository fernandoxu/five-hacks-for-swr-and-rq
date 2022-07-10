import { Container, Stack, Title } from '@mantine/core';
import Login from './login';
import StopWatch from './stopwatch';

const SwrDemo = () => {
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

export default SwrDemo;
