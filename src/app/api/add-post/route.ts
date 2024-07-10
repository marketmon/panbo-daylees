import prisma from "@/app/lib/prisma";
import { Post } from "@/app/lib/definitions";

export async function POST(req: Request) {
    const res = await req.json();
    const { content, creator } = res as Post;

    const result = await prisma.post.create({
        data: {
            content,
            creator
        }
    });

    return Response.json(result);
}
