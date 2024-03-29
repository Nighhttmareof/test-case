import { FC } from 'react';
import rateIcon from '../assets/icons/rateIcon.svg';
import like from '../assets/icons/like.svg';
import dislike from '../assets/icons/dislike.svg';
import { Post } from '../interfaces/posts';
import { useDispatch } from 'react-redux';
import { CANCEL_REACT_POST, DISLIKE_POST, LIKE_POST } from '../redux/rootreduser';

interface Props {
    type: 'like' | 'dislike',
    post: Post
}



const ReactBtn:FC<Props> = ({type, post}) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        if (type === 'like') {
            if (post.rate === 'none') {
                dispatch({type:LIKE_POST, payload:post.id})
                return
            } 
        }
        if (type === 'dislike') {
            if (post.rate === 'none') {
                dispatch({type:DISLIKE_POST, payload:post.id})
                return
            } 
        }
        if (post.rate === 'like' || post.rate === 'dislike') dispatch({type:CANCEL_REACT_POST, payload:post.id});
    }

    return (
        <img onClick={() => handleClick()} src={post.rate === 'like' && type ==='like' ? like : post.rate === 'dislike' && type === 'dislike'? dislike : rateIcon} alt=""/> 
    )
}

export default ReactBtn;