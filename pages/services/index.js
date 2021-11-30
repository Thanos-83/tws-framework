import React from 'react';
import Head from 'next/head';
import Row from '../../general-styles/Row';
import RowContainer from '../../general-styles/RowContainer';

// import useDimensions from '../custom-design-hooks/useDimensions';

export default function Home() {
  // const width = useDimensions('resize');
  console.log('Inside home');
  return (
    <React.Fragment>
      <Head>
        <title>TWS Framework </title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Row color='#facf57'>
        <RowContainer displayOption='flex'>
          <div className='w-3/5 bg-red-300'>
            <h1>This is the services page</h1>
          </div>
        </RowContainer>
      </Row>
    </React.Fragment>
  );
}