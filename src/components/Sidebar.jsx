import React from 'react'
import home from "../assets/chat-images/home.png";
import chat from "../assets/chat-images/chat.png";
import community from "../assets/chat-images/community.png";
import crop from "../assets/chat-images/crop.png";
import product from "../assets/chat-images/product.png";
import vector from "../assets/chat-images/vector.png";
import weather from "../assets/chat-images/weather.png";
import settings from "../assets/chat-images/settings.png";
import addIcon from "../assets/chat-images/add-icon.png";


const Sidebar = () => {
  return (
    <div>
      <aside className='flex h-screen'>
        <div>
          <div className='pr-8 py-4'>
            <a href="/" className="pl-8 py-4 w-64 my-1 flex items-center gap-2 text-sm text-gray-900">
              <img src={home} alt="home" />
              Overview
            </a>
            <a href="/" className="pl-8 py-4 w-64 my-1 flex items-center gap-2 text-sm text-gray-900">
              <img src={weather} alt="home" />
              Weather Forcast
            </a>
            <a href="/" className="pl-8 py-4 w-64 my-1 flex items-center gap-2 text-sm text-gray-900">
              <img src={crop} alt="home" />
              Crop management
            </a>
            <a href="/" className="pl-8 py-4 w-64 my-1 flex items-center gap-2 text-sm text-gray-900">
              <img src={product} alt="home" />
              Produce Listings
            </a>
            <a href="/" className="pl-8 py-4 w-64 my-1 flex items-center gap-2 text-sm text-gray-900">
              <img src={community} alt="home" />
              Community Forum
            </a>
            <a href="/" className="pl-8 py-4 w-64 my-1 flex items-center gap-2 text-sm text-gray-900">
              <img src={vector} alt="home" />
              Articles
            </a>
            <a href="/" className="pl-8 py-4 w-64 my-1 flex items-center gap-2 text-sm rounded-r-full text-white bg-green-900">
              <img src={chat} alt="home" />
              Chatbot
            </a>
            <a href="/" className="pl-8 py-4 w-64 my-1 flex items-center gap-2 text-sm text-gray-900">
              <img src={settings} alt="home" />
              Settings
            </a>
          </div>
          <div className="pr-8 py-4 text-sm flex flex-col">
            <a href="/" className='pl-16 py-2 w-64 my-1'>Referral</a>
            <a href="/" className='pl-16 py-2 w-64 my-1'>Logout</a>
          </div>
        </div>
        <div className='chat-trail w-72 rounded-tr-lg py-8 flex flex-col items-center'>
          <button className='text-sm border border-green-900 rounded-lg flex items-center py-2 px-8'>
            <img src={addIcon} alt="add" /> New Chat
          </button>
          <p className='text-green-900 mt-4 px-8 py-2 w-full text-center'>Recent Chats</p>
          <div className='py-5 px-6 chat-trail rounded-tr-lg'>
            <small className='text-xs text-gray-400'>Yesterday</small>
            <ul className='text-sm mb-4'>
              <li className='my-2'>Best Soil Management Practices</li>
              <li className='my-2'>Best Soil Management Practices</li>
              <li className='my-2'>Best Soil Management Practices</li>
              <li className='my-2'>Best Soil Management Practices</li>
              <li className='my-2'>Best Soil Management Practices</li>
            </ul>

            <small className='text-xs text-gray-400'>Last Week</small>
            <ul className='text-sm mb-4'>
              <li className='my-2'>Best Soil Management Practices</li>
              <li className='my-2'>Best Soil Management Practices</li>
              <li className='my-2'>Best Soil Management Practices</li>
              <li className='my-2'>Best Soil Management Practices</li>
              <li className='my-2'>Best Soil Management Practices</li>
            </ul>
          </div>
          
        </div>
      </aside>
    </div>
  )
}

export default Sidebar