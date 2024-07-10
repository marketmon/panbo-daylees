import React from 'react';
import { getPosts } from './lib/posts';
import PostCard from './ui/PostCard';
import AddPost from './ui/Add-Post';
import { Post } from './lib/definitions';

const Home = async () => {

  const posts = await getPosts();


  return (
    <div className="">
      <h1 className="font-bold text-2xl p-4">Panbo Dummy Application: DayLily</h1>
      <h3 className="pl-4 text-lg">Stay up to date with your co-founders</h3>
      <AddPost />
      <div>
        {posts.map((post: Post) => {
          return (
            <div key={post.id}>
              <PostCard id={post.id} content={post.content} creator={post.creator} />
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Home;