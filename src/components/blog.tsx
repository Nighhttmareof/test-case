
import { useEffect, useState } from 'react';
import '../styles/blog.css'
import getPosts from '../server/getPosts';
import PostElement from './postElement';
import { useDispatch, useSelector } from 'react-redux';
import { SET_POSTS } from '../redux/rootreduser';
import { RootState } from '../redux/store';
import { Route, Routes } from 'react-router-dom';
import PostPage from './postPage';

const Blog = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state:RootState) => state.posts);
    const [search, setSearch] = useState<string>('');
    const filteredPosts = search === '' ? posts : posts.filter((post) => post.title.toLowerCase().includes(search.toLowerCase()));
    const firstPost = filteredPosts[0];

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPosts();
            dispatch({type:SET_POSTS, payload:data});
        };
        if (posts.length === 0) { 
            fetchData();
        
        }
    }, []);



    const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    // useEffect(() => {
    //     if (search === '') {
    //         return
    //     }
    //     const filtered = posts.filter((post) => {
    //         return post.title.toLowerCase().includes(search.toLowerCase());
    //     });
    //     setFilteredPosts(filtered);
    // }, [search])

    return (
        <>
        
            <header>
                <h1>Блог</h1>
                <p className='blog_description'>Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а также переводим зарубежные статьи</p>
                <input className='input_search' value={search} onChange={(e) => changeInput(e)} type="text" placeholder='Поиск по названию статьи' />
            </header>
            <section className='blog-posts'>
                <div className='blog-post-list_element'>
                    {filteredPosts[0]? <PostElement post={firstPost} type={'big'} /> : null}
                </div>
                <ul className='blog-post_list'>
                    {filteredPosts.filter((_, index) => index !== 0).map((post, index) => (
                       <li key={index} className='blog-post-list_element'>
                            <PostElement post = {post} type = {'mini'} />
                       </li> 
                    ))}
                </ul> 
            </section>
            
        </>
    )
}

export default Blog;