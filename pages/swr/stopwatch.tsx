import { useRef } from 'react';
import { Text } from '@mantine/core';
import useSWR from 'swr';

const createStopWatch = () => {
  const startTime = Date.now();

  return () => {
    return Math.round((Date.now() - startTime) / 1000);
  };
};

const StopWatch = () => {
  const timeRef = useRef(createStopWatch());
  const { data: time } = useSWR('stopwatch', timeRef.current, {
    refreshInterval: 100,
    dedupingInterval: 100,
  });

  return <Text>Time {time}</Text>;
};

export default StopWatch;
