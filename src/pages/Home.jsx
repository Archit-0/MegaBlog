import React, { useEffect, useState } from 'react'
import { Container, PostCard } from '../components'
import DatabaseService from '../appwrite/config'
import authService from '../appwrite/auth';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    DatabaseService.getPosts().then((posts) => {
      // const temp = posts.documents;
      // console.log("pssd:", temp)
      if (posts) {
        setPosts(posts.documents)
      }
    })
  }, [])

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Login to read posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    )
  }
  const temp = posts[0]
  // console.log(temp)

  return (
    <Container>
      <div className='flex flex-wrap'>
        {posts.map((post) => (
          <div key={post.$id} className='p-2 w-1/4'>
            {/* console.log(post) */}
            <PostCard {...post} />

          </div>
        ))}
      </div>
    </Container>
  )
}

export default Home