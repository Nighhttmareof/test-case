import { FC } from 'react';
import imageBig from '../assets/images/imageBig.svg';
import imageMini from '../assets/images/imageMini.svg';
import { Post } from '../interfaces/posts';
import ReadMoreBtn from './readMoreBtn';
import ReactBtn from './reactBtn';
interface Props { 
    post: Post,
    type: 'big' | 'mini'
}

const PostElement:FC<Props> = ({post, type}) => {

    return (
        <>
                {type === 'big' && post? 
                <div className='blog-post'>
                    <img className='blog-post_image first-post_image' src={imageBig} alt="" />
                    <div className='blog-post-container'>
                        <div className='blog-post-title'>
                            <h2>{post.title}</h2>
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
                        <p>{post.body}</p>
                        <ReadMoreBtn id = {post.id} />
                    </div>
                </div> 
                :
                <div className='blog-post'>
                    <img className='blog-post_image' src={imageMini} alt="" />
                    <div className='blog-post-container'>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <div className='blog-post-title'>
                        <div className='blog-post_rates-block'>
                                <div className='blog-post_rate'>
                                    <ReactBtn post={post} type = {'like'}/> 
                                    <span>{post.likes}</span>
                                </div>
                                <div className='blog-post_rate'>
                                    <ReactBtn post={post} type = {'dislike'} /> 
                                    <span>{post.dislikes}</span>
                                </div>
                        </div>
                        <ReadMoreBtn id = {post.id} />
                        </div>
                    </div>
                </div> 
                }
        </>
    )
}

export default PostElement;