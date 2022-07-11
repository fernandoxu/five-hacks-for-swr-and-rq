import { TextInput, Text, Stack } from '@mantine/core';
import { useQuery } from 'react-query';

import client from './client';

// TODO: better type for useGlobalState
const useGlobalState = (key: string, initialData: any) => [
  useQuery(key, () => initialData, {
    enabled: false,
    initialData,
  }).data,
  (value: any) => client.setQueryData(key, value),
];

const StateEditor = () => {
  const [value, setValue] = useGlobalState('sharedText', '');

  return <TextInput value={value} onChange={(e) => setValue(e.target.value)} />;
};

const StateViewer = () => {
  const [value] = useGlobalState('sharedText', '');

  return <Text>{value}</Text>;
};

const GlobalState = () => (
  <Stack>
    <StateEditor />
    <StateViewer />
  </Stack>
);

export default GlobalState;
