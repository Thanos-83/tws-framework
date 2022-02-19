import Image from 'next/image';
import Link from 'next/link';
function PostImage({ title, imgUrl, postSlug, postId }) {
  return (
    <Link href={`/blog/${postId}/${postSlug}`} passHref>
      <a>
        <Image
          src={imgUrl}
          // src={'/'}
          width={1800}
          height={900}
          alt={`Cover image for the blog post ${title} `}
        />
      </a>
    </Link>
  );
}

export default PostImage;
