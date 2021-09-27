const BlogList = (props) => {
    const blogs = props.blogs;
    const title = props.title;

    return (
        <div className="blog-list">
            <h2>{ title }</h2>
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