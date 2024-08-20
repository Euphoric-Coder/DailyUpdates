import { useEffect, useState } from "react"
import image from "./assets/news.jpg"

const NewsItem = ({title, description, src, url}) => {
    console.log(src);
    return (
    <div className="card bg-danger text-white mb-3 d-inline-block my-2 mx-2 px-2 py-2 text-justify" style={{maxWidth:"345px", maxheight:"500px"}}>
    <img src={src?src:image} style={{height:"200px",width:"325px"}} className="card-img-top" alt="..."/>
    <div className="card-body">
        <h5 className="card-title">{title.slice(0,50)}</h5>
        <p className="card-text">{description?description.slice(0,90):"News is not present"}</p>
        <a href={url} target="_blank" className="btn btn-dark">Read More</a>
    </div>
    </div>
  )
}

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

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="#"><span className="badge text-bg-secondary">New</span></a> */}
    <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">DailyNews</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        {/* <a className="nav-link active" aria-current="page" href="#">Sports</a>
        <a className="nav-link" href="#">Health</a>
        <a className="nav-link" href="#">Business</a>
        <a className="nav-link disabled" aria-disabled="true">Disabled</a> */}
      </div>
    </div>
  </div>
</nav>
  )
}
const App = () => {
  return (
    <div>
      <NavBar/>
      <NewsBoard/>
    </div>
  )
}

export default App

