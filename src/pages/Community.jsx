import React from 'react'
import Template from '../components/Template';
import CreatePost from '../components/CreatePost';
import ViewPosts from '../components/ViewPosts';

const Community = () => {
  return (
    <>
      <Template />
      <div className="flex flex-col ml-64 max-[640px]:ml-0 bg-slate-50  min-h-screen">
        <CreatePost />
        <ViewPosts />
      </div>
    </>
  )
}

export default Community