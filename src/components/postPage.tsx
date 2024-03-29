import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { RootState } from "../redux/store"
import { useEffect, useState } from "react"
import { SET_POSTS } from "../redux/rootreduser"
import getPosts from "../server/getPosts"
import backToBlog from '../assets/icons/back.svg'
import imageBig from '../assets/images/imageBig.svg'
import '../styles/postPage.css'
import ReactBtn from "./reactBtn"



const PostPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {id} = useParams()
    const postId: number = Number(id) - 1;
    const posts = useSelector((state:RootState) => state.posts)
    const [valid, setValid] = useState<null | boolean>(null)
    const post = posts[postId]
    const fetchData = async () => {
        const data = await getPosts();
        dispatch({type:SET_POSTS, payload:data});
    };

    useEffect(() => {
        if (!post) { // после обновления страницы
            fetchData()
        }

    }, [])

    useEffect(() => {
        if (posts[postId]) {
            setValid(true)
        } else {
            setValid(false)
        }
    
    }, [posts])



    return (
        
            valid === null? <div>Загрузка поста...</div> : 
            valid === true?
            <section className="post-page-body">
                <div className='blog-post-title'>
                    <div onClick={() => navigate('/blog/')} className="back-to-blog">
                        <img src={backToBlog} alt="" />
                        <p>Вернуться к статьям</p>
                    </div>
                    <div className='blog-post_rates-block'>
                        <div className='blog-post_rate'>
                            <ReactBtn post={post} type = {'like'} /> 
                            <span>{post.likes}</span>
                        </div>
                        <div className='blog-post_rate'>
                            <ReactBtn post={post} type = {'dislike'}/> 
                            <span>{post.dislikes}</span>
                        </div>
                    </div>
                </div>
                <div className="post-page-body_container">
                        <h2>{post.title}</h2>
                        <img src={imageBig} alt="" />
                        <p>{post.body}</p>
                </div>
            </section>
            :
            <div>Нет такого поста</div>
        
    )
}

export default PostPage;