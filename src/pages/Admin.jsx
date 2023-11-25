import React from 'react';
import AdminNav from '../components/AdminNav';
import Sidebar from '../components/Sidebar';
import ChatArea from '../components/ChatArea';

const Admin = () => {
  return (
    <>
      <AdminNav />
      <div className="flex">
        <Sidebar />
        <ChatArea />
      </div>
    </>
  )
}

export default Admin