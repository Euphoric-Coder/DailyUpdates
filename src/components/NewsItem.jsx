import image from "../assets/news.jpg"

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

export default NewsItem