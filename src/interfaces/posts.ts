

export interface Post {
    //userId: number; // не используется
    id: number;
    title: string;
    body: string;
    rate: 'like' | 'dislike' | 'none';
    likes: number;
    dislikes: number;
}