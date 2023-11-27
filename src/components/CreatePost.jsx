import React, { useState } from 'react'
import leaf from "../assets/leaf.png";

const CreatePost = () => {
  const [message, setMessage] = useState('');
  const token = JSON.parse(localStorage.getItem("token"));

  const handleChange = (e) => {
    const { value } = e.target;
    setMessage(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const post = await (
        await fetch(`https://agrowise-api.vercel.app/api/articles/`, {
          method: "POST",

          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token.access}`,
          },
          body: JSON.stringify({ body: message }),
        })
      ).json();

      console.log(post);
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <>
      <div className="flex bg-white rounded-lg shadow-lg p-4 m-4">
        <form onSubmit={handleSubmit} className={`flex w-full gap-2 items-center justify-between py-3 px-6 max-[640px]:px-0 max-sm:flex-col`}>
          <textarea name="" id="" cols="30" rows="3" 
            className='border border-gray-400 font-light text-sm p-2 resize-none rounded-lg w-full max-w-lg outline-none' 
            placeholder='Write something here...' onChange={handleChange}>{message}</textarea>
          <button type='submit' className='bg-green-800 transition ease-in-out duration-300 hover:bg-green-900 rounded-lg flex items-center gap-2 text-white text-sm px-4 py-2' onClick={handleSubmit}>
            <img src={leaf} alt="" />
            Create Post
          </button>
        </form>
      </div>
    </>
  )
}

export default CreatePost