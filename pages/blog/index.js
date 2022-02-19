import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Row from '../../general-styles/Row';
import RowContainer from '../../general-styles/RowContainer';
import RowFluid from '../../general-styles/RowFluid';
import { gql } from '@apollo/client';
import client from '../../lib/client';
import Img from '../../components/Image/Img';
import PostTitle from '../../components/Post Components/PostTitle';
import PostImage from '../../components/Post Components/PostImage';
import PostExcerpt from '../../components/Post Components/PostExcerpt';

export default function Blog(props) {
  return (
    <React.Fragment>
      <Head>
        <title>TWS Framework </title>
        <meta name='description' content='Blog Page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Row color='#facf57'>
        <RowContainer displayOption='grid-center'>
          <div className='col-span-12'>
            <h1>This is the Blogs page</h1>
          </div>
        </RowContainer>
      </Row>
      <Row>
        <RowContainer className='grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-4'>
          <div className='grid grid-cols-fit gap-12'>
            {props.data.map((post, index) => (
              <div
                key={index}
                className='post-card flex flex-col justify-between'>
                <PostImage
                  title={post.title}
                  imgUrl={`${
                    post.featuredImage ? post.featuredImage.node.sourceUrl : '/'
                  }`}
                  postSlug={post.slug}
                  postId={post.id}
                />
                <PostTitle title={post.title} />
                <PostExcerpt excerpt={post.excerpt} />
                <Link href={`/blog/${post.id}/${post.slug}`}>
                  <a className='text-indigo-500 text-2xl'>Read More</a>
                </Link>
              </div>
            ))}
          </div>
        </RowContainer>
      </Row>
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  // console.log(context);
  const { data } = await client.query({
    query: gql`
      query getPostsFromUser {
        posts(
          where: { orderby: { field: DATE, order: ASC }, authorName: "root" }
        ) {
          nodes {
            date
            id
            postId
            tags {
              nodes {
                name
              }
            }
            commentCount
            featuredImage {
              node {
                sourceUrl
              }
            }
            excerpt
            author {
              node {
                name
              }
            }
            categories {
              nodes {
                name
              }
            }
            title
            slug
          }
        }
      }
    `,
  });
  // console.log(data.posts.nodes);
  return {
    props: {
      data: data.posts.nodes,
    },
  };
}
