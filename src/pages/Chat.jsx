import React, { useState } from 'react';
import Template from '../components/Template';
import Sidebar from '../components/Sidebar';
import ChatArea from '../components/ChatArea';

const Chat = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const handleToggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <Template />
      <div className="flex ml-64 max-[640px]:ml-0">
        {isSidebarVisible && <Sidebar />}
        <button className='bg-transparent flex flex-col items-center justify-center h-fit m-auto py-2 px-2 hide-chat-history' onClick={handleToggleSidebar} title='Hide chat history'>
          <div className={`h-4 -m-1 w-1 rounded-full bg-green-600 ${isSidebarVisible ? 'rotate-down' : 'rotate-up'}`}></div>
          <div className={`h-4 w-1 rounded-full bg-green-600 ${isSidebarVisible ? 'rotate-up' : 'rotate-down'}`}></div>
        </button>
        <ChatArea />
      </div>
    </>
  )
}

export default Chat