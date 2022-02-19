function PostExcerpt({ excerpt }) {
  return (
    <>
      <div
        className='post-excerpt text-xl text-gray-400'
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
    </>
  );
}

export default PostExcerpt;
