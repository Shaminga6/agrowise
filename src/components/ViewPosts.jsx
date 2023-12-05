import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import avatar from "../assets/avatar.png";
import time from "../assets/time.png";
import option from "../assets/options.png";
import Loader from "../components/Loader";

const ViewPosts = () => {
  const posts = [
    {
      id: 1,
      community: "Cultivating Colony",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit reprehenderit labore molestias tenetur doloremque quas eligendi, rerum culpa consequatur ratione sed nesciunt facere laudantium at magnam recusandae similique! Repellat, libero!",
    },
    {
      id: 2,
      community: "Ploughshare Society",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit reprehenderit labore molestias tenetur doloremque quas eligendi, rerum culpa consequatur ratione sed nesciunt facere laudantium at magnam recusandae similique! Repellat, libero!",
    },
    {
      id: 3,
      community: "Cultivating Colony",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit reprehenderit labore molestias tenetur doloremque quas eligendi, rerum culpa consequatur ratione sed nesciunt facere laudantium at magnam recusandae similique! Repellat, libero!",
    },
    {
      id: 4,
      community: "Ploughshare Society",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit reprehenderit labore molestias tenetur doloremque quas eligendi, rerum culpa consequatur ratione sed nesciunt facere laudantium at magnam recusandae similique! Repellat, libero!",
    },
  ];

  const navigate = useNavigate();
  const [isCommunity, setCommunity] = useState(false);
  const [isBookmark, setBookmark] = useState(false);
  const [isThread, setThread] = useState(false);
  const [createComm, setCreateComm] = useState("");
  const [comment, setComment] = useState(Array(posts.length).fill(false));
  const [isOptionsOpen, setOptionsOpen] = useState(
    Array(posts.length).fill(false)
  );
  const [communities, setCommunities] = useState([]);
  const [isCreating, setIsCreating] = useState(false);
  const [isJoining, setIsJoining] = useState(false);
  const [openMenu, setOpenMenu] = useState(true);

  useEffect(() => {
    // Fetch chat history when the component mounts
    const token = JSON.parse(localStorage.getItem("token"));

    fetch("https://agrowise-api.vercel.app/api/communities/", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token.access}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const fetchedData = data.results;
        setCommunities(fetchedData);
      })
      .catch((error) => {
        console.error("Error fetching chat history:", error);
      });
  }, []);

  useEffect(() => {
    // Fetch chat history when the component mounts
    const token = JSON.parse(localStorage.getItem("token"));

    fetch("https://agrowise-api.vercel.app/api/communities/me/", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token.access}`,
      },
    })
      .then((response) => {
        console.log("Response:", response);
        return response.json();
      })
      .then((data) => {
        const fetchedData = data;
        console.log(fetchedData);
      })
      .catch((error) => {
        console.error("Error fetching Communities:", error);
      });
  }, []);

  const token = JSON.parse(localStorage.getItem("token"));

  const handleChange = (e) => {
    const { value } = e.target;
    setCreateComm(value);
  };

  const handleCreateComm = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setIsCreating(true);

    fetch(`https://agrowise-api.vercel.app/api/communities/me/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token.access}`,
      },
      body: JSON.stringify({
        name: createComm,
        about: "A community created for interaction",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response or perform any necessary actions
        setIsCreating(false);
        console.log("Community created successfully", data);
      })
      .catch((error) => {
        console.error("Error creating community:", error);
      });
  };

  const handleJoinComm = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setIsJoining(true);
    const slug = document.getElementById("community-option").value;

    fetch(`https://agrowise-api.vercel.app/api/communities/${slug}/join/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token.access}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response or perform any necessary actions
        setIsJoining(false);
        console.log("Community created successfully", data);
      })
      .catch((error) => {
        console.error("Error creating community:", error);
      });
  };

  const toggleOptions = (index) => {
    setOptionsOpen((prevOptions) => {
      const updatedOptions = [...prevOptions];
      updatedOptions[index] = !updatedOptions[index];
      return updatedOptions;
    });
  };
  const toggleCommunity = () => {
    setCommunity(!isCommunity);
  };
  const toggleBookmarks = () => {
    setBookmark(!isBookmark);
  };
  const toggleThreads = () => {
    setThread(!isThread);
  };

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const handleComment = (index) => {
    setComment((prevComment) => {
      const updatedComment = [...prevComment];
      updatedComment[index] = !updatedComment[index];
      return updatedComment;
    });
  };
  const user = JSON.parse(localStorage.getItem("userData")) || {};

  // -------- Redirect user if logged in -----------------
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));

    const res = fetch("https://agrowise-api.vercel.app/api/articles/", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token.access}`,
      },
    });

    console.log(res);
    const userData = localStorage.getItem("userData");

    if (!userData) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <div className="option-btn-wrapper">
        <button
          type="submit"
          className="bg-gray-600 text-white text-xs rounded-lg p-2 block sm:hidden"
          style={{ width: "95px", height: "32px" }}
          onClick={toggleMenu}
        >
          Options
        </button>
      </div>

      <div className="min-h-screen flex max-[640px]:flex-col bg-white gap-4 rounded-lg border border-slate-300 mx-4 max-sm:mx-0 max-sm:rounded-none">
        {/* History */}
        <div
          className={`w-60 bg-slate-200 max-sm:w-full mobile-tab ${
            openMenu ? "block" : "hide"
          }`}
        >
          <ul className="text-sm text-green-800 py-4">
            <li
              className={`mb-2 w-full  px-4 py-2 ${
                isBookmark ? "bg-slate-300" : ""
              } cursor-pointer`}
              onClick={toggleBookmarks}
            >
              Bookmarks
            </li>
            <ul
              className={`bg-slate-200 w-max text-xs ml-4 ${
                isBookmark ? "block" : "hidden"
              }`}
            >
              <li
                className="rounded-lg my-4 px-3 py-2 font-light"
                style={{ background: "#FFE0B2" }}
              >
                Cultivating Colony
              </li>
              <li
                className="rounded-lg my-4 px-3 py-2 font-light"
                style={{ background: "#FFE0B2" }}
              >
                Harvest Hive
              </li>
              <li
                className="rounded-lg my-4 px-3 py-2 font-light"
                style={{ background: "#FFE0B2" }}
              >
                Humidity Watchout
              </li>
              <li
                className="rounded-lg my-4 px-3 py-2 font-light"
                style={{ background: "#FFE0B2" }}
              >
                Everything Agro
              </li>
              <li
                className="rounded-lg my-4 px-3 py-2 font-light"
                style={{ background: "#FFE0B2" }}
              >
                Ploughshare Society
              </li>
            </ul>

            <li
              className={`mb-2 w-full  px-4 py-2 ${
                isThread ? "bg-slate-300" : ""
              } cursor-pointer`}
              onClick={toggleThreads}
            >
              My Threads
            </li>
            <ul
              className={`bg-slate-200 w-max text-xs ml-4 ${
                isThread ? "block" : "hidden"
              }`}
            >
              <li
                className="rounded-lg my-4 px-3 py-2 font-light"
                style={{ background: "#FFE0B2" }}
              >
                Cultivating Colony
              </li>
              <li
                className="rounded-lg my-4 px-3 py-2 font-light"
                style={{ background: "#FFE0B2" }}
              >
                Harvest Hive
              </li>
              <li
                className="rounded-lg my-4 px-3 py-2 font-light"
                style={{ background: "#FFE0B2" }}
              >
                Humidity Watchout
              </li>
              <li
                className="rounded-lg my-4 px-3 py-2 font-light"
                style={{ background: "#FFE0B2" }}
              >
                Everything Agro
              </li>
              <li
                className="rounded-lg my-4 px-3 py-2 font-light"
                style={{ background: "#FFE0B2" }}
              >
                Ploughshare Society
              </li>
            </ul>

            <li
              className={`mb-2 w-full  px-4 py-2 ${
                isCommunity ? "bg-slate-300" : ""
              } cursor-pointer`}
              onClick={toggleCommunity}
            >
              <span>My Communities</span>
            </li>
            <ul
              className={`bg-slate-200 w-max text-xs ml-4 ${
                isCommunity ? "block" : "hidden"
              }`}
            >
              <li
                className="rounded-lg my-4 px-3 py-2 font-light"
                style={{ background: "#FFE0B2" }}
              >
                Cultivating Colony
              </li>
              <li
                className="rounded-lg my-4 px-3 py-2 font-light"
                style={{ background: "#FFE0B2" }}
              >
                Harvest Hive
              </li>
              <li
                className="rounded-lg my-4 px-3 py-2 font-light"
                style={{ background: "#FFE0B2" }}
              >
                Humidity Watchout
              </li>
              <li
                className="rounded-lg my-4 px-3 py-2 font-light"
                style={{ background: "#FFE0B2" }}
              >
                Everything Agro
              </li>
              <li
                className="rounded-lg my-4 px-3 py-2 font-light"
                style={{ background: "#FFE0B2" }}
              >
                Ploughshare Society
              </li>
            </ul>
          </ul>

          <div className="chat-form-wrapper">
            <form
              onSubmit={handleCreateComm}
              className="mx-2 flex items-center gap-2 flex-col text-xs"
            >
              <input
                type="text"
                className="border outline-none border-slate-400 rounded-lg p-2 w-full"
                placeholder="Community name"
                value={createComm}
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                className="bg-green-700 text-white text-xs rounded-lg p-2"
                style={{ width: "167px", height: "32px" }}
                onClick={handleCreateComm}
              >
                {isCreating ? <Loader /> : "+ Create new community"}
              </button>
            </form>{" "}
            <br />
            <form className="mx-2 flex items-center gap-2 flex-col text-xs">
              <select
                name=""
                id=""
                className="border border-slate-400 rounded-lg p-2"
              >
                <option value="">-- join a new community --</option>
                {communities.map((community, index) => (
                  <option
                    key={community.id}
                    id="community-option"
                    value={community.slug}
                    className="my-2 text-xs"
                  >
                    {community.name}
                  </option>
                ))}
              </select>
              <button
                className="bg-green-700 text-white text-xs rounded-lg p-2"
                style={{ width: "167px", height: "32px" }}
                onClick={handleJoinComm}
              >
                {isJoining ? <Loader /> : "+ Join a new community"}
              </button>
            </form>
          </div>
        </div>

        {/* Topics */}
        <div className="w-full p-6 max-sm:p-2">
          {posts.map((post, index) => (
            <>
              <div
                key={post.id}
                className="flex flex-col gap-3 mb-4 forum shadow-xl p-6 max-sm:p-4 rounded-lg"
              >
                <div className="text-xs flex gap-2 items-center justify-between">
                  <div className="flex gap-2 items-center max-sm:gap-1">
                    <img src={avatar} alt="" className="w-7 max-sm:w-5" />
                    <p className="max-sm:text-xs">{user.first_name}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p
                      className="px-2 py-1 rounded-md font-thin max-sm:text-xs"
                      style={{ background: "#FFE0B2" }}
                    >
                      {post.community}
                    </p>
                    <div className="flex gap-1 items-center max-sm:hidden">
                      <img src={time} alt="" />1 hour ago
                    </div>
                    <div className="flex items-center relative">
                      <button
                        className="flex items-center"
                        onClick={() => toggleOptions(index)}
                      >
                        <img src={option} alt="" />
                      </button>
                      {isOptionsOpen[index] && (
                        <ul
                          className={`shadow-md bg-slate-200 text-sm self-start rounded-md absolute top-6 right-2 ${
                            isOptionsOpen[index] ? "block" : "hidden"
                          } bg-white sm:translate-x-0 dark:border-gray-700`}
                        >
                          <li className="border-b border-green-800 px-3 py-1">
                            Bookmark
                          </li>
                          <li className="px-3 py-1">Report</li>
                        </ul>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-sm font-light text-gray-800">
                  {post.content}
                </p>

                <div className="text-xs flex gap-2 items-center justify-between">
                  <div className="flex gap-3 items-center text-sm font-light">
                    <div className="flex items-center gap-1 text-slate-700">
                      <svg
                        width="7"
                        height="10"
                        viewBox="0 0 7 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.26369 0.597143L5.90629 3.2299C5.97421 3.30074 6.01169 3.39535 6.01072 3.49348C6.00975 3.59161 5.97041 3.68546 5.90111 3.75494C5.83181 3.82442 5.73807 3.86402 5.63994 3.86525C5.54181 3.86647 5.4471 3.82924 5.37609 3.76151L3.39027 1.78273V9.11282C3.3934 9.16397 3.38603 9.21522 3.36862 9.26342C3.3512 9.31161 3.3241 9.35573 3.28899 9.39306C3.25388 9.43039 3.2115 9.46014 3.16446 9.48047C3.11742 9.5008 3.06671 9.51129 3.01547 9.51129C2.96422 9.51129 2.91351 9.5008 2.86647 9.48047C2.81943 9.46014 2.77705 9.43039 2.74194 9.39306C2.70683 9.35573 2.67973 9.31161 2.66232 9.26342C2.6449 9.21522 2.63753 9.16397 2.64066 9.11282V1.75319L0.656251 3.76011C0.622312 3.79829 0.580938 3.82914 0.534663 3.85078C0.488388 3.87242 0.438185 3.88439 0.387124 3.88596C0.336063 3.88753 0.28522 3.87866 0.237704 3.8599C0.190188 3.84114 0.147 3.81288 0.110782 3.77686C0.0745645 3.74083 0.0460782 3.69779 0.0270667 3.65038C0.00805521 3.60296 -0.00108147 3.55217 0.000215054 3.5011C0.00151205 3.45003 0.0132155 3.39976 0.0346093 3.35337C0.0560031 3.30698 0.086637 3.26545 0.124637 3.23131L2.73208 0.598549C2.76696 0.563595 2.80839 0.535863 2.854 0.516942C2.89961 0.498021 2.94851 0.488281 2.99789 0.488281C3.04727 0.488281 3.09616 0.498021 3.14177 0.516942C3.18738 0.535863 3.22881 0.563595 3.26369 0.598549V0.597143Z"
                          fill="green"
                        />
                      </svg>
                      <p>25</p>
                    </div>
                    <div className="flex items-center gap-1 text-slate-700">
                      <svg
                        width="7"
                        height="10"
                        viewBox="0 0 7 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_324_184)">
                          <path
                            d="M3.25954 9.39114L5.90214 6.75838C5.97006 6.68754 6.00754 6.59293 6.00657 6.4948C6.0056 6.39668 5.96626 6.30282 5.89696 6.23334C5.82766 6.16386 5.73391 6.12426 5.63579 6.12304C5.53766 6.12181 5.44295 6.15904 5.37194 6.22677L3.38612 8.20555V0.875463C3.38925 0.824312 3.38188 0.773062 3.36447 0.724866C3.34705 0.67667 3.31995 0.632549 3.28484 0.595221C3.24973 0.557892 3.20735 0.528145 3.16031 0.507812C3.11327 0.487478 3.06256 0.476989 3.01132 0.476989C2.96007 0.476989 2.90936 0.487478 2.86232 0.507812C2.81528 0.528145 2.7729 0.557892 2.73779 0.595221C2.70268 0.632549 2.67558 0.67667 2.65816 0.724866C2.64075 0.773062 2.63338 0.824312 2.63651 0.875463V8.23509L0.652101 6.22817C0.618161 6.18999 0.576788 6.15914 0.530513 6.1375C0.484238 6.11586 0.434034 6.10389 0.382974 6.10232C0.331913 6.10075 0.281069 6.10962 0.233553 6.12838C0.186038 6.14714 0.14285 6.1754 0.106632 6.21143C0.0704141 6.24745 0.0419278 6.29049 0.0229163 6.3379C0.00390482 6.38532 -0.00523186 6.43612 -0.00393534 6.48718C-0.00263834 6.53825 0.00906515 6.58852 0.0304589 6.63491C0.0518527 6.6813 0.0824866 6.72283 0.120486 6.75697L2.72793 9.38973C2.76281 9.42469 2.80424 9.45242 2.84985 9.47134C2.89546 9.49026 2.94436 9.5 2.99374 9.5C3.04312 9.5 3.09201 9.49026 3.13762 9.47134C3.18323 9.45242 3.22466 9.42469 3.25954 9.38973V9.39114Z"
                            fill="red"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_324_184">
                            <rect
                              width="6.00105"
                              height="9.00088"
                              fill="white"
                              transform="matrix(-1 0 0 -1 6.01172 9.50049)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <p>8</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <svg
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_324_192)">
                          <path
                            d="M15.4818 7.83C14.8937 6.30882 13.8727 4.99331 12.5452 4.04604C11.2176 3.09878 9.64149 2.56129 8.01175 2.5C6.38201 2.56129 4.80594 3.09878 3.47835 4.04604C2.15076 4.99331 1.12983 6.30882 0.54175 7.83C0.502034 7.93985 0.502034 8.06015 0.54175 8.17C1.12983 9.69118 2.15076 11.0067 3.47835 11.954C4.80594 12.9012 6.38201 13.4387 8.01175 13.5C9.64149 13.4387 11.2176 12.9012 12.5452 11.954C13.8727 11.0067 14.8937 9.69118 15.4818 8.17C15.5215 8.06015 15.5215 7.93985 15.4818 7.83ZM8.01175 12.5C5.36175 12.5 2.56175 10.535 1.54675 8C2.56175 5.465 5.36175 3.5 8.01175 3.5C10.6618 3.5 13.4618 5.465 14.4768 8C13.4618 10.535 10.6618 12.5 8.01175 12.5Z"
                            fill="#858585"
                          />
                          <path
                            d="M8.01172 5C7.41838 5 6.83836 5.17595 6.34501 5.50559C5.85166 5.83524 5.46714 6.30377 5.24008 6.85195C5.01302 7.40013 4.95361 8.00333 5.06936 8.58527C5.18512 9.16721 5.47084 9.70176 5.8904 10.1213C6.30996 10.5409 6.84451 10.8266 7.42645 10.9424C8.00839 11.0581 8.61159 10.9987 9.15977 10.7716C9.70795 10.5446 10.1765 10.1601 10.5061 9.66671C10.8358 9.17336 11.0117 8.59334 11.0117 8C11.0117 7.20435 10.6957 6.44129 10.133 5.87868C9.57043 5.31607 8.80737 5 8.01172 5ZM8.01172 10C7.61616 10 7.22948 9.8827 6.90058 9.66294C6.57168 9.44318 6.31534 9.13082 6.16396 8.76537C6.01259 8.39991 5.97298 7.99778 6.05015 7.60982C6.12732 7.22186 6.3178 6.86549 6.59751 6.58579C6.87721 6.30608 7.23358 6.1156 7.62154 6.03843C8.0095 5.96126 8.41163 6.00087 8.77709 6.15224C9.14254 6.30362 9.4549 6.55996 9.67466 6.88886C9.89442 7.21776 10.0117 7.60444 10.0117 8C10.0117 8.53043 9.80101 9.03914 9.42593 9.41421C9.05086 9.78929 8.54215 10 8.01172 10Z"
                            fill="#858585"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_324_192">
                            <rect
                              width="16"
                              height="16"
                              fill="white"
                              transform="translate(0.0117188)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <p className="font-light flex gap-1">
                        202 <span className="max-sm:hidden">Views</span>
                      </p>
                    </div>
                    <div className="flex gap-1 items-center">
                      <svg
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_324_197)">
                          <path
                            d="M8.0118 15.3332C7.83499 15.3332 7.66542 15.2629 7.5404 15.1379C7.41537 15.0129 7.34513 14.8433 7.34513 14.6665V12.6665H4.67847C4.32484 12.6665 3.98571 12.526 3.73566 12.276C3.48561 12.0259 3.34513 11.6868 3.34513 11.3332V4.6665C3.34513 4.31288 3.48561 3.97374 3.73566 3.72369C3.98571 3.47365 4.32484 3.33317 4.67847 3.33317H14.0118C14.3654 3.33317 14.7046 3.47365 14.9546 3.72369C15.2047 3.97374 15.3451 4.31288 15.3451 4.6665V11.3332C15.3451 11.6868 15.2047 12.0259 14.9546 12.276C14.7046 12.526 14.3654 12.6665 14.0118 12.6665H11.2785L8.8118 15.1398C8.67847 15.2665 8.5118 15.3332 8.34513 15.3332H8.0118ZM8.67847 11.3332V13.3865L10.7318 11.3332H14.0118V4.6665H4.67847V11.3332H8.67847ZM2.0118 9.99984H0.678467V1.99984C0.678467 1.64622 0.818943 1.30708 1.06899 1.05703C1.31904 0.80698 1.65818 0.666504 2.0118 0.666504H12.6785V1.99984H2.0118V9.99984Z"
                            fill="#858585"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_324_197">
                            <rect
                              width="16"
                              height="16"
                              fill="white"
                              transform="translate(0.0117188)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <p className="font-light flex gap-1">
                        98 <span className="max-sm:hidden">Comments</span>
                      </p>
                    </div>
                    <button
                      className="flex items-center gap-1"
                      onClick={() => handleComment(index)}
                    >
                      <svg
                        width="19"
                        height="18"
                        viewBox="0 0 19 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_324_201)">
                          <path
                            d="M16.2568 16.875C16.1567 16.8763 16.0581 16.851 15.9711 16.8016C15.8841 16.7521 15.8118 16.6804 15.7618 16.5937C15.0126 15.3175 13.9448 14.2577 12.663 13.5181C11.3811 12.7786 9.92916 12.3847 8.44931 12.375V15.75C8.44875 15.861 8.41534 15.9694 8.35328 16.0615C8.29121 16.1536 8.20328 16.2253 8.10056 16.2675C7.99812 16.3105 7.88522 16.3223 7.7761 16.3013C7.66698 16.2803 7.56653 16.2274 7.48743 16.1493L0.737431 9.39933C0.684709 9.34704 0.642862 9.28483 0.614305 9.21628C0.585748 9.14773 0.571045 9.07421 0.571045 8.99996C0.571045 8.9257 0.585748 8.85218 0.614305 8.78363C0.642862 8.71509 0.684709 8.65287 0.737431 8.60058L7.48743 1.85058C7.56653 1.77253 7.66698 1.71966 7.7761 1.69863C7.88522 1.67761 7.99812 1.68938 8.10056 1.73246C8.20328 1.77466 8.29121 1.84632 8.35328 1.93841C8.41534 2.0305 8.44875 2.1389 8.44931 2.24996V5.68683C10.7765 5.98574 12.9156 7.12062 14.4679 8.87995C16.0203 10.6393 16.88 12.9031 16.8868 15.2493C16.8855 15.6255 16.8611 16.0012 16.8137 16.3743C16.7996 16.4914 16.7492 16.601 16.6694 16.6878C16.5897 16.7746 16.4847 16.8342 16.3693 16.8581L16.2568 16.875ZM8.16806 11.25C9.60266 11.2294 11.0246 11.5205 12.3357 12.1032C13.6468 12.6859 14.8158 13.5463 15.7618 14.625C15.5926 12.5844 14.7018 10.6709 13.2494 9.22776C11.7969 7.78457 9.87776 6.90611 7.83618 6.74996C7.69594 6.73728 7.56555 6.67247 7.47077 6.56832C7.376 6.46418 7.32374 6.32827 7.32431 6.18746V3.60558L1.92993 8.99996L7.32431 14.3943V11.8125C7.32431 11.6633 7.38357 11.5202 7.48906 11.4147C7.59455 11.3092 7.73762 11.25 7.88681 11.25H8.19056H8.16806Z"
                            fill="#216206"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_324_201">
                            <rect
                              width="18"
                              height="18"
                              fill="white"
                              transform="translate(0.0117188)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="text-green-800">Reply</span>
                    </button>
                  </div>
                </div>

                {comment[index] && (
                  <form
                    className={`comment gap-2 flex-col ${
                      comment[index] ? "flex" : "hidden"
                    }`}
                  >
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="3"
                      className="font-light border border-slate-300 rounded-lg outline-none resize-none w-full text-sm p-2"
                    ></textarea>
                    <button className="text-sm bg-green-900 self-end text-white rounded-lg px-4 py-1">
                      Reply
                    </button>
                  </form>
                )}
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default ViewPosts;
