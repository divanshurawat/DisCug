import { prisma } from '@/lib';
import { notFound } from 'next/navigation';
import React from 'react'

type PostShowPageProps = {
    postId: string;
}


const PostShow : React.FC<PostShowPageProps> = async ({postId}) => {
    const post = await prisma.post.findFirst({
        where:{id:postId}
    })
    if(!post) notFound();
  return (
    <div>
      <h1 className='text-4xl font-bold my-2'>{post.title}</h1>
        <p className='border rounded p-4'>{post.content}</p>
    </div>
  )
}

export default PostShow
