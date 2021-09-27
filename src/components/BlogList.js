const BlogList = (props) => {
    let blogs = props.blogs;
    return (
        <div className="blog-list">
            {blogs.map((article, index) => (
                <div className="blog-preview" key={index}>
                    <h3>{ article.title }</h3>
                    <p>Written by { article.author }</p>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;