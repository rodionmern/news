import React from "react";

import './NewsItem.css'

const NewsItem = (props: any) => {

  // interface News {
  //   title: string,
  //   description: string,
  // }

  return (
    <div className="news-item">
      <img src={props.imageURL} alt="Non pic." className="news-image" />
      <div className="news-details">
        <h1 className="news-title">{props.title}</h1>
        <p className="news-description">{props.description}</p>
      </div>
    </div>
  )
}

export default NewsItem