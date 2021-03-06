import { useState } from 'react';
import BlogList from '../components/BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario' },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi' },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario' },
    ]);

    return (
        <div className="home">
            <BlogList blogs={blogs} title='All Blogs'/>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs"/>
        </div>
    )
}

export default Home;