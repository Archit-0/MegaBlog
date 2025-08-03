import React, { useState, useEffect } from 'react'
import { Container, PostCard } from '../components'

import DatabaseService from '../appwrite/config';
import { useSelector } from 'react-redux';

function AllPosts() {
  let [posts, setPosts] = useState([])
  useEffect(() => {
    DatabaseService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents)
      }
    })
  }, [])
  const userId = useSelector(state => state.auth.userData.$id);
  console.log(userId);
  posts = posts.filter((post) => post.userId === userId)


  if (posts.length === 0) {
    return (
      <div className='flex justify-center items-center'>
        <h1 className='text-2xl'>No posts found</h1>
      </div>
    )
  }
  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
          {posts.map((post) => (
            <div key={post.$id} className='p-2 w-1/4'>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPosts