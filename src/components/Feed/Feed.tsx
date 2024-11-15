import React, { useEffect, useState } from "react";
import axios from "axios";

import './Feed.css'

import NewsItem from "../NewsItem/NewsItem";
import Button from "../ui/Button/Button";

const Feed = () => {
  const [news, setNews] = useState([])
  const pageSize = 5;
  const [pages, setPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  interface News {
    title: string,
    description: string,
    urlToImage: string,
  }

  const getData = async () => {
    let data: any = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=technology&page=${currentPage}&pageSize=5&apiKey=ce85265c857a4900a1af424e76281ed4`)
    setNews(data.data.articles)
    setPages(Math.ceil(data.data.totalResults / 5))
  }

  useEffect(() => {getData()}, [currentPage])

  console.log(pages)
  console.log(news)
  console.log(currentPage)

  return (
    <div className="feed">
      <div className="control">
        <Button onClick={() => setCurrentPage(currentPage - 1)} text="Prev." />
        <Button onClick={() => setCurrentPage(currentPage + 1)} text="Next" />
      </div>
      {news.map(
        (item:News, index) => (<NewsItem key={index} imageURL={item.urlToImage} title={item.title} description={item.description} />)
      )}
    </div>
  )
}

export default Feed