import { Text } from '@mantine/core';
import useSWR from 'swr';

const getGPSCoordinates = async () =>
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        reject(error);
      }
    );
  });

const GPS = () => {
  const { data } = useSWR('gps', getGPSCoordinates);

  return <Text>{JSON.stringify(data)}</Text>;
};

export default GPS;
