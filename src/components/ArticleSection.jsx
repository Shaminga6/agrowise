import testImg from "../assets/bannerImg.webp";
import calender from "../assets/calendar.png";
import comment from "../assets/comment.png";
import account from "../assets/account.png";
import { useEffect, useState } from "react";

const ArticleSection = () => {
  const articles = [
    {
      title: "Transform Your Backyard into a Flourishing Garden",
      date: "Nov 23, 2023",
      comments: "48",
      content:
        "Discover the joys of backyard gardening as we guide you through the essentials. From selecting the right soil to choosing the perfect plants, your journey to a vibrant garden begins here.",
      author: "Luke Chain",
      image:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: " A Crucial Guide to Efficient Irrigation Practices",
      date: "Aug 10, 2023",
      comments: "98",
      content:
        "Learn the art of water-wise farming and enhance your crop yield. Dive into techniques for optimizing irrigation, conserving water, and ensuring your farm thrives even in dry conditions.",
      author: "Alice Baker",
      image:
        "https://images.unsplash.com/photo-1575527820586-5f350ab37c6f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: " Nurturing Healthy Soil for Bountiful Crops",
      date: "Aug 20, 2023",
      comments: "20",
      content:
        "Uncover the secrets of cultivating nutrient-rich soil that fosters robust plant growth. Explore composting, cover cropping, and other practices to elevate the health of your farm's foundation.",
      author: "Philip Stone",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Boosting Productivity and Preventing Pest Problems",
      date: "Sep 2, 2023",
      comments: "78",
      content:
        "Master the art of crop rotation to maximize yield and minimize pest issues. Discover how strategic planning can promote soil health and create a sustainable and thriving farm.",
      author: "Jennifer Waver",
      image:
        "https://images.unsplash.com/photo-1524486361537-8ad15938e1a3?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Exploring Sustainable Farming Practices",
      date: "",
      comments: "1k",
      content:
        "Take your farming practices to the next level with sustainable agriculture. Learn about eco-friendly methods, biodiversity, and ethical considerations for a farm that cares for both land and community.",
      author: "Amanda Lopez",
      image:
        "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <>
      <div className="p-4 sm:ml-64">
        {/*---------- Article card ------------ */}
        {articles.map(({ title, date, comments, content, author, image }) => (
          <div className="grid grid-cols-1 md:grid-cols-2 article-card">
            <div className="col-span-1 md:col-span-1 p-4 flex justify-center align-center">
              <img src={image} alt="article" id="article-img" />
            </div>

            <div className="col-span-1 md:col-span-1 p-4">
              <span>NewsPaper</span>
              <h2 id="article-title">{title}</h2>

              <div className="article-action-wrapper">
                <div>
                  <img
                    src={calender}
                    alt="calender"
                    style={{ display: "inline", marginRight: "10px" }}
                  />
                  <span>{date}</span>
                </div>
                <div>
                  <img
                    src={comment}
                    alt="calender"
                    style={{ display: "inline", marginRight: "10px" }}
                  />
                  <span>{comments}</span>
                </div>
                <div>
                  <img
                    src={account}
                    alt="calender"
                    style={{ display: "inline", marginRight: "10px" }}
                  />
                  <span>{author}</span>
                </div>
              </div>

              <p>{content}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ArticleSection;
