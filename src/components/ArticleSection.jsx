import testImg from "../assets/bannerImg.webp";
import calender from "../assets/calendar.png";
import comment from "../assets/comment.png";
import account from "../assets/account.png";
import { useEffect, useState } from "react";

const ArticleSection = () => {
  return (
    <>
      <div className="p-4 sm:ml-64">
        {/*---------- Article card ------------ */}
        <div className="grid grid-cols-1 md:grid-cols-2 article-card">
          <div className="col-span-1 md:col-span-1 p-4 flex justify-center align-center">
            <img src={testImg} alt="article" id="article-img" />
          </div>

          <div className="col-span-1 md:col-span-1 p-4">
            <span>NewsPaper</span>
            <h2 id="article-title">Farming Process for Beginners</h2>

            <div className="article-action-wrapper">
              <div>
                <img
                  src={calender}
                  alt="calender"
                  style={{ display: "inline", marginRight: "10px" }}
                />
                <span>Nov 23, 2023</span>
              </div>
              <div>
                <img
                  src={comment}
                  alt="calender"
                  style={{ display: "inline", marginRight: "10px" }}
                />
                <span>6 comments</span>
              </div>
              <div>
                <img
                  src={account}
                  alt="calender"
                  style={{ display: "inline", marginRight: "10px" }}
                />
                <span>Adam Rock</span>
              </div>
            </div>

            <p>
              Embarking on the journey of farming can be both exciting and
              rewarding, but for beginners, it may seem like navigating
              uncharted territory. Fear not! This guide is designed to offer a
              helping hand to those eager to delve into the world of
              agriculture. Whether you're dreaming of cultivating your own
              vegetables or envisioning a small-scale farm, The success of your
              farm begins with the right location. Assess factors such as
              sunlight exposure, soil quality, and water availability. Different
              crops have varying require [...]
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleSection;
