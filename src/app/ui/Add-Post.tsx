'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Post } from '../lib/definitions';

export default function AddPost() {
    const [post, setPost] = useState<Post>({ id: '', content: '', creator: '' });

    function handleContentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setPost((prevPost) => ({ ...prevPost, content: event.target.value }));
    }

    function handleCreatorChange(event: ChangeEvent<HTMLInputElement>) {
        setPost((prevPost) => ({ ...prevPost, creator: event.target.value }));
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        try {
            const response = await fetch('/api/add-post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(post),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            console.log('Post added:', result);
        } catch (error) {
            console.error('Error adding post:', error);
        }

        setPost({ id: '', content: '', creator: '' });
    }


    return (
        <div className="p-4 w-fit">
            <div className="font-bold mb-2">Update The Dream Team:</div>
            <form onSubmit={handleSubmit}>
                <div className="flex items-center">
                    <label htmlFor="content">Content:</label>
                    <textarea
                        className="border border-gray-300 rounded ml-5"
                        id="content"
                        value={post.content}
                        onChange={handleContentChange}
                        required
                    />
                </div>
                <div className="flex items-center mt-5">
                    <label htmlFor="creator">Creator:</label>
                    <input
                        className="border border-gray-300 rounded ml-5"
                        type="text"
                        id="creator"
                        value={post.creator}
                        onChange={handleCreatorChange}
                        required
                    />
                </div>
                <div className="w-full flex justify-center mt-5">
                    <button
                        type="submit"
                        className="text-green-500 hover:cursor-pointer hover:scale-105 font-bold"
                    >
                        Post
                    </button>
                </div>
            </form>
        </div>
    );
}
