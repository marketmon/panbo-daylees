import prisma from '@/app/lib/prisma'; // Ensure correct path to your Prisma client setup

export async function getPosts() {
    const posts = await prisma.post.findMany({});
    return posts;
}