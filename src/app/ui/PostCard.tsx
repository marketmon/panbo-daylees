import { Post as PostProps } from '@/app/lib/definitions'

const PostCard: React.FC<PostProps> = (post) => {
    return (
        <div>
            <div className="p-4 m-4 border-black border-2 rounded w-fit">
                {post.content}
                <br />
                by: {post.creator}
            </div>
        </div>
    );
};

export default PostCard;