import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = () => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        let url = `https://newsapi.org/v2/everything?q=science&apiKey=${import.meta.env.VITE_API_KEY}`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => setArticles(data.articles))
            .catch(error => {
                console.error('Error fetching news:', error);
                setError("Failed to load news. Please check your API key or try again later.");
            });
    }, []);

    return (
        <div>
            <h2 className="text-center">
                Latest <span className="badge bg-danger fs-4">DailyNews</span>
            </h2>
            {error ? (
                <div className="alert alert-danger text-center">{error}</div>
            ) : (
                articles.map((news, index) => (
                    <NewsItem
                        key={index} 
                        title={news.title} 
                        description={news.content} 
                        src={news.urlToImage} 
                        url={news.url} 
                    />
                ))
            )}
        </div>
    );
}

export default NewsBoard;
