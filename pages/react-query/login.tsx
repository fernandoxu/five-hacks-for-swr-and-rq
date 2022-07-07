import { Text } from '@mantine/core';
import { useQuery } from 'react-query';

const fetchLogin = (): Promise<{
  id: number;
}> => fetch('/api/login').then((res) => res.json());

const fetchUser = (id?: number): Promise<{ first?: string; last?: string }> =>
  fetch('/api/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  }).then((res) => res.json());

const login = async () => {
  const loginRes = await fetchLogin();
  return await fetchUser(loginRes.id);
};

const Login = () => {
  const { data: user } = useQuery('login', login);

  return <Text>{JSON.stringify(user)}</Text>;
};

export default Login;
