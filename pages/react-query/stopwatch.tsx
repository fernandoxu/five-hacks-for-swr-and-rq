import { useRef } from 'react';
import { Text } from '@mantine/core';
import { useQuery } from 'react-query';

const createStopWatch = () => {
  const startTime = Date.now();

  return () => {
    return Math.round((Date.now() - startTime) / 1000);
  };
};

const StopWatch = () => {
  const timeRef = useRef(createStopWatch());
  const { data: time } = useQuery('stopwatch', timeRef.current, {
    refetchInterval: 100,
  });

  return <Text>Time {time}</Text>;
};

export default StopWatch;
