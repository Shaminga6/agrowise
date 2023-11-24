import React from 'react'
import logo from "../assets/logo.png";
import search from "../assets/search.png";
import avatar from "../assets/avatar.png";
import bell from "../assets/bell.png";

const AdminNav = () => {
  return (
    <header className="flex py-4 px-6 items-center justify-between bg-white">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className='flex items-center gap-8 text-sm'>
        {/* Searchbar */}
        <div className='flex items-center gap-4 border border-gray-500 py-2 px-4 rounded-full'>
          <img src={search} alt="" />
          <input type="" className='outline-none border-none w-64 text-sm' placeholder='Search e.g card' />
        </div>
        {/* Profile */}
        <div className='flex items-center gap-2'>
          <img src={avatar} alt="" />
          <p>Abass Adams</p>
        </div>
        {/* Notifications */}
        <div>
          <img src={bell} alt="" />
        </div>
      </div>
    </header>
  )
}

export default AdminNav