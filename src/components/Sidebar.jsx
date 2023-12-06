import React, { useState, useEffect } from 'react';
import addIcon from "../assets/chat-images/add-icon.png";

const Sidebar = () => {
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    // Fetch chat history when the component mounts
    const token = JSON.parse(localStorage.getItem("token"));

    fetch("https://agrowise-api.vercel.app/api/openapi/history/", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token.access}`
      }
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      const fetchedChatHistory = data.results;
      setChatHistory(fetchedChatHistory);
    })
    .catch(error => {
      console.error('Error fetching chat history:', error);
    });
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const handleNewChat = () => {
    if (localStorage.getItem('conversation')) {
      // Clear chat history in localStorage
      localStorage.removeItem("conversation");
    }

    // Reload the page
    window.location.reload();
  };

  return (
    <>
        <aside className='flex h-screen'>
          <div className='chat-trail w-72 rounded-tr-lg py-8 flex flex-col items-center'>
            <button onClick={handleNewChat}
              className='text-sm border border-green-900 rounded-lg flex items-center py-2 px-8'>
              <img src={addIcon} alt="add" /> New Chat
            </button>
            <p className='text-green-900 mt-4 px-8 py-2 w-full text-center'>Recent Chats</p>
            <div className='py-5 px-6 chat-trail rounded-tr-lg'>
              <small className='text-xs text-gray-400'>Chat History</small>
              <ul className='text-sm mb-4 max-h-screen overflow-y-scroll'>
                {chatHistory.map((recent, index) => (
                  <li key={recent.id} className='my-2 text-xs'>{recent.trunc_title}</li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
    </>
  );
}

export default Sidebar;