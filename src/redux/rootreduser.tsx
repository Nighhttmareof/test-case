import { Post } from "../interfaces/posts";


export const SET_POSTS = "SET_POSTS";
export const LIKE_POST = "LIKE_POST";
export const DISLIKE_POST = "DISLIKE_POST";
export const CANCEL_REACT_POST = "CANCEL_REACT_POST";

interface ActionSet {
    type: 'SET_POSTS'; 
    payload: Post[];
}

interface ActionReact {
    type: 'LIKE_POST' | 'DISLIKE_POST' | 'CANCEL_REACT_POST';
    payload: number;
}

interface State {
    posts: Post[]
}

const initialState = {
    posts: [],
}

const rootReducer = (state: State = initialState, action: ActionSet | ActionReact) => {
    switch (action.type) {
        case SET_POSTS:
            return {...state, posts: action.payload};

        case LIKE_POST:
            const likedPostIndex = action.payload - 1;
            const likedPost = {...state.posts[likedPostIndex]};
            likedPost.rate = 'like';
            likedPost.likes += 1;

            return {
                ...state,
                posts: [
                    ...state.posts.slice(0, likedPostIndex),
                    likedPost,
                    ...state.posts.slice(likedPostIndex + 1)
                ]
            };

        case DISLIKE_POST:
            const dislikedPostIndex = action.payload - 1;
            const dislikedPost = {...state.posts[dislikedPostIndex]};
            dislikedPost.rate = 'dislike';
            dislikedPost.dislikes += 1;

            return {
                ...state,
                posts: [
                    ...state.posts.slice(0, dislikedPostIndex),
                    dislikedPost,
                    ...state.posts.slice(dislikedPostIndex + 1)
                ]
            };

        case CANCEL_REACT_POST:
            const canceledPostIndex = action.payload - 1;
            const canceledPost = {...state.posts[canceledPostIndex]};
            if (canceledPost.rate === 'like') {
                canceledPost.likes -= 1;
            } else {
                canceledPost.dislikes -= 1;
            }
            canceledPost.rate = 'none';

            return {
                ...state,
                posts: [
                    ...state.posts.slice(0, canceledPostIndex),
                    canceledPost,
                    ...state.posts.slice(canceledPostIndex + 1)
                ]
            };

        default:
            return state;
    }
}

export default rootReducer;