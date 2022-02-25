import React from 'react';
import Head from 'next/head';
import Row from '../../general-styles/Row';
import RowContainer from '../../general-styles/RowContainer';
import { useRouter } from 'next/router';
import { gql } from '@apollo/client';
import client from '../../lib/client';

export default function Posts(props) {
  const router = useRouter();
  // console.log(router.query);
  // console.log(props.data);
  return (
    <React.Fragment>
      <Head>
        <title>TWS Framework </title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Row color='#facf57'>
        <RowContainer displayOption='grid-center'>
          <div className='col-span-6'>
            <h1>This is the Single Blog page</h1>
            <img src={`${props.data.featuredImage.node.sourceUrl}`} alt='' />
            <div
              className='prose'
              dangerouslySetInnerHTML={{ __html: props.data.content }}
            />
          </div>
        </RowContainer>
      </Row>
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  // console.log(context.params.postUrlInfo[0]);
  const postId = context.params.postUrlInfo[0];
  const { data } = await client.query({
    query: gql`
      query MyQuery {
        post(id: "${postId}") {
          content
          author {
            node {
              avatar {
                url
              }
            }
          }
          commentCount
          date
          title
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    `,
  });

  // console.log(data);
  return {
    props: {
      data: data.post,
    },
  };
}
