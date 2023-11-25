import React from 'react'
import logoIcon from "../assets/chat-images/logo-icon.png";
import send from "../assets/chat-images/cil_send.png";

const ChatArea = () => {
  return (
    <>
      <div className='chat flex flex-col w-full justify-evenly items-center'>
        <div className='text-center'>
          <h2>Hello Again,</h2>
          <small className='italic'>Tell me what's oon your mind, or pick a suggestion</small>
        </div>

        <div className='chat-topic text-sm flex flex-col gap-8 items-center'>
          <div className="flex items-center gap-6">
            <p className='py-2 px-6 rounded-lg'>Soil Management</p>
            <p className='py-2 px-6 rounded-lg'>Nutrient Management</p>
          </div>
          <p className='py-2 px-6 rounded-lg'>Pest and Disease Management</p>
          <p className='py-2 px-6 rounded-lg'>Harvesting and Post-Harvest Management</p>
          <p className='py-2 px-6 rounded-lg'>Water Management</p>
        </div>

        <div className='flex message-input py-4 px-4 rounded-lg items-center gap-4'>
          <img src={logoIcon} alt="" className='w-6' />
          <input type="text" placeholder='Message Agro AI' className='w-80 text-sm italic bg-transparent outline-none border-none' />
          <img src={send} alt="" className='w-6' />
        </div>
      </div>
    </>
  )
}

export default ChatArea