import { useEffect, useState } from "react"
import NewsItem from "./NewsItem";

const NewsBoard = () => {
    const [articles,setArticles] = useState([]);
    useEffect(()=>{
        // let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${import.meta.env.VITE_API_KEY}`;
        let url = `https://newsapi.org/v2/everything?q=science&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(response=> response.json()).then(data=> setArticles(data.articles));
    },[])
    return (
    <div>
        <h2 className="text-center">Latest <span className="badge bg-danger fs-4">DailyNews</span>
        </h2>
        {articles.map((news,index)=>{
            return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
        })}
    </div>
  )
}

export default NewsBoard

// import { useEffect, useState } from "react";
// import NewsItem from "./NewsItem";

// const NewsBoard = () => {
//     const [articles, setArticles] = useState([]);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchNews = async () => {
//             try {
//                 let url = `https://newsapi.org/v2/everything?q=pornography&apiKey=${import.meta.env.VITE_API_KEY}`;
//                 // let url = `https://newsapi.org/v2/top-headlines?category=entertainment&country=in&apiKey=${import.meta.env.VITE_API_KEY}`;
//                 const response = await fetch(url);
//                 const data = await response.json();

//                 console.log(data); // Log the entire response

//                 if (data.status === "ok") {
//                     setArticles(data.articles);
//                 } else {
//                     setError("Error fetching news articles");
//                 }
//             } catch (err) {
//                 setError("Network error");
//             }
//         };

//         fetchNews();
//     }, []);

//     if (error) {
//         return <div className="text-center">{error}</div>;
//     }

//     return (
//         <div>
//             <h2 className="text-center">
//                 Latest <span className="badge bg-danger fs-4">DailyNews</span>
//             </h2>
//             {articles.map((news, index) => (
//                 <NewsItem
//                     key={index}
//                     title={news.title}
//                     description={news.description || "No description available"}
//                     src={news.urlToImage || "placeholder-image-url.jpg"} // Fallback image
//                     url={news.url}
//                 />
//             ))}
//         </div>
//     );
// };

// export default NewsBoard;
