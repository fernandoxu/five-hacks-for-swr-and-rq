import { Stack } from '@mantine/core';
import { useQuery } from 'react-query';

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
  const { data: log } = useQuery('log', logListener, {
    refetchInterval: 1000,
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
