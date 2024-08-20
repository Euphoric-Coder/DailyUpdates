import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        // let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${import.meta.env.VITE_API_KEY}`;
        let url = `https://newsapi.org/v2/everything?q=science&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url)
        .catch(error=> console.error("Error", error))
            .then(response => response.json())
            .then(data => setArticles(data.articles))
            .catch(error => console.error('Error fetching news:', error));
    }, []);

    return (
        <div>
            <h2 className="text-center">
                Latest <span className="badge bg-danger fs-4">DailyNews</span>
            </h2>
            {articles.map((news, index) => (
                <NewsItem
                    key={index} 
                    title={news.title} 
                    description={news.content} 
                    src={news.urlToImage} 
                    url={news.url} 
                />
            ))}
        </div>
    );
}

export default NewsBoard;
