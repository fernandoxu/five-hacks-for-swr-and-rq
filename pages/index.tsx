import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { Button, Space } from '@mantine/core';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Link href='/react-query'>
          <Button
            variant='gradient'
            gradient={{ from: 'teal', to: 'lime', deg: 105 }}
            component='a'
          >
            react-query demo
          </Button>
        </Link>
        <Space h='lg' />
        <Link href='/swr'>
          <Button
            variant='gradient'
            gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}
            component='a'
          >
            swr demo
          </Button>
        </Link>
      </main>
    </div>
  );
};

export default Home;
