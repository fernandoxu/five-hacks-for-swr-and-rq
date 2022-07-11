import { Stack } from '@mantine/core';
import useSWR from 'swr';

const subscribeToLogger = () => {
  let log: string[] = [];
  let logIndex = 0;

  setInterval(() => {
    log.push(`${logIndex}: ${Date.now()}`);
    logIndex++;

    log = log.slice(-3);
  }, 100);

  return () => log;
};

const logListener = subscribeToLogger();

const Logger = () => {
  const { data: log } = useSWR('log', logListener, {
    refreshInterval: 1000,
    dedupingInterval: 1000,
  });

  return (
    <Stack>
      {log?.map((l, i) => (
        <div key={i}>{l}</div>
      ))}
    </Stack>
  );
};

export default Logger;
