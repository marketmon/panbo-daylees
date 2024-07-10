// definitions.ts

export interface Post {
    content: string;
    creator: string;
    id: string;
}

export interface PostListProps {
    posts: Post[];
}


