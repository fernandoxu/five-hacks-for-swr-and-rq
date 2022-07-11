import { TextInput, Text, Stack } from '@mantine/core';
import useSWR from 'swr';

// TODO: better type for useGlobalState
const useGlobalState = (key: string, initialData: any) => {
  const { data, mutate } = useSWR(key, () => initialData);

  return [
    data ?? initialData,
    (value: any) =>
      mutate(value, {
        revalidate: true,
      }),
  ];
};

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
