import React from 'react';
import Head from 'next/head';
import Nav from '../components/Nav';
import { Feature } from '@paralleldrive/react-feature-toggles';
import InProgressComponent from '../features/in-progress';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Feature Toggle Demo</title>
      </Head>
      <Nav />
      <Feature
        name="in-progress"
        inactiveComponent={() => null}
        activeComponent={InProgressComponent}
      />
      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
          background-color: #0f1113;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default Home;
