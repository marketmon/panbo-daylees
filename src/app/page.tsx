import React from 'react';
import getPosts from '@/app/api/get-posts/route';
import Post from './ui/Post';
import AddPost from './ui/Add-Post';

const Home = async () => {

  const posts = await getPosts();


  return (
    <div className="">
      <h1 className="font-bold text-2xl p-4">Panbo Dummy Application: DayLily</h1>
      <h3 className="pl-4 text-lg">Stay up to date with your co-founders</h3>
      <AddPost />
      <div>
        {posts.map((post) => {
          return (
            <Post key={post.id} content={post.content} creator={post.creator} />
          )
        })}
      </div>
    </div>
  );
};

export default Home;