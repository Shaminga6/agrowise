import React, { useState } from "react";
import Template from "../components/Template";

import Sidebar from "../components/Sidebar";
import ChatArea from "../components/ChatArea";

const Chat = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const handleToggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <Template />

      <div className=" sm:ml-64">
        <div className="flex">
          {/* -------- Col 1 ------------ */}
          {isSidebarVisible && (
            <div
              className="w-1/4 chat-history-bar"
              style={{ position: "relative", height: "100dvh" }}
            >
              <Sidebar />
            </div>
          )}

          {/* -------- Col 2 ------------ */}
          <div
            className="w-3/4 "
            style={{ width: "100%", height: "100dvh", backgroundColor: "#fbfefa" }}
          >
            <ChatArea data={{ handleToggleSidebar, isSidebarVisible, setIsSidebarVisible }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
