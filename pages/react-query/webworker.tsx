import { Button, Group, Text, TextInput } from '@mantine/core';
import { useEffect, useRef, useState } from 'react';
import { useMutation } from 'react-query';

const Webworker = () => {
  const [valueA, setValueA] = useState('10');
  const [valueB, setValueB] = useState('20');

  const workerRef = useRef<Worker>();

  useEffect(() => {
    workerRef.current = new Worker(
      new URL('../../lib/worker.js', import.meta.url)
    );
  }, []);

  const { data: value, mutate } = useMutation(
    'multiplyNumbers',
    async (args: { a: number; b: number }) =>
      new Promise<number>((resolve) => {
        workerRef.current?.addEventListener(
          'message',
          (message: MessageEvent<{ type: string; result: number }>) => {
            if (message.data.type === 'result') {
              resolve(message.data.result);
            }
          }
        );

        workerRef.current?.postMessage([args.a, args.b]);
      })
  );

  return (
    <Group>
      <TextInput value={valueA} onChange={(e) => setValueA(e.target.value)} />
      <TextInput value={valueB} onChange={(e) => setValueB(e.target.value)} />
      <Button onClick={() => mutate({ a: +valueA, b: +valueB })}>
        calculate
      </Button>
      <Text>{value}</Text>
    </Group>
  );
};

export default Webworker;
