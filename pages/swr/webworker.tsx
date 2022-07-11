import { Button, Group, Text, TextInput } from '@mantine/core';
import { useEffect, useRef, useState } from 'react';
import useSWR from 'swr';

const Webworker = () => {
  const [valueA, setValueA] = useState('10');
  const [valueB, setValueB] = useState('20');

  const workerRef = useRef<Worker>();
  const multiplyRef =
    useRef<(args: { a: number; b: number }) => Promise<number>>();

  useEffect(() => {
    workerRef.current = new Worker(
      new URL('../../lib/worker.js', import.meta.url)
    );

    multiplyRef.current = async (args: { a: number; b: number }) =>
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
      });
  }, []);

  const { data: result, mutate } = useSWR('multiply', () => 0);

  return (
    <Group>
      <TextInput value={valueA} onChange={(e) => setValueA(e.target.value)} />
      <TextInput value={valueB} onChange={(e) => setValueB(e.target.value)} />
      <Button
        onClick={() =>
          multiplyRef.current?.({ a: +valueA, b: +valueB }).then((v) =>
            mutate(v, {
              revalidate: false,
            })
          )
        }
      >
        calculate
      </Button>
      <Text>{result}</Text>
    </Group>
  );
};

export default Webworker;
