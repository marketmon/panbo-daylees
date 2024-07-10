import { Post as PostProps } from '@/app/lib/definitions'

const Post: React.FC<PostProps> = ({ content, creator }) => {
    return (
        <div>
            <div className="p-4 m-4 border-black border-2 rounded w-fit">
                {content}
                <br />
                by: {creator}
            </div>
        </div>
    );
};

export default Post;