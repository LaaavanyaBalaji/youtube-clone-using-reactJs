import React from "react";
import './maincontent.css'; // Import the CSS file for styling
import tn1 from '../assets/tn1.png'
import tn2 from '../assets/tn2.png'

function MainContent() {
  const videos = [
    {
      title: "Video Title 1",
      views: "1M views",
      date: "1 day ago",
      thumbnail: tn1 
    },
    {
      title: "Video Title 2",
      views: "500K views",
      date: "2 days ago",
      thumbnail: tn2 
    },
    {
        title: "Video Title 1",
        views: "1M views",
        date: "1 day ago",
        thumbnail: tn1 
      },
      {
        title: "Video Title 2",
        views: "500K views",
        date: "2 days ago",
        thumbnail: tn2 
      },{
        title: "Video Title 1",
        views: "1M views",
        date: "1 day ago",
        thumbnail: tn1 
      },
      {
        title: "Video Title 2",
        views: "500K views",
        date: "2 days ago",
        thumbnail: tn2 
      },
    
  ];

  return (
    <div className="main-content">
      <div className="video-feed">
        {videos.map((video, index) => (
          <div className="video-item" key={index}>
            <img src={video.thumbnail} alt={video.title} className="thumbnail" />
            <div className="video-info">
              <span className="video-title">{video.title}</span><br></br>
              <span className="video-views">{video.views}</span><br></br>
              <span className="video-date">{video.date}</span><br></br>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainContent;
