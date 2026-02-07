import { NextRequest, NextResponse } from "next/server";
import { prisma } from '@/lib/prisma'
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth/next";
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

interface CloudinaryUploadResult {
    public_id: string;
    [key: string]: unknown
}

export async function GET(req: NextRequest, { params }: { params: { blogid: string } }) {
    const blogid = params.blogid;

    try {
        const blog = await prisma.blog.findUnique({
            where: {
                id: blogid,
            },
        });

        return NextResponse.json(
            { success: true, message: blog },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { success: false, message: `Error while fetching blog: ${error}` },
            { status: 500 }
        );
    }
}

export async function PATCH(req: NextRequest, { params }: { params: { blogid: string } }) {
    const session = await getServerSession(authOptions);
    const blogid = params.blogid;

    if (!session) {
        return NextResponse.json(
            { success: false, message: "You are Unauthorized!" },
            { status: 401 }
        );
    }

    try {
        const formData = await req.formData();
        const file = formData.get("file") as File | null;
        const title = formData.get("title");
        const content = formData.get("content");
        const category = formData.get("category");

        const updateData: any = {};
        if (title) updateData.title = title.toString();
        if (content) updateData.content = content.toString();
        if (category) updateData.category = category.toString();

        if (file && typeof file !== 'string' && file.size > 0) {
            const bytes = await file.arrayBuffer()
            const buffer = Buffer.from(bytes)

            const result = await new Promise<CloudinaryUploadResult>(
                (resolve, reject) => {
                    const uploadStream = cloudinary.uploader.upload_stream(
                        { folder: "next-cloudinary-uploads" },
                        (error, result) => {
                            if (error) reject(error);
                            else resolve(result as CloudinaryUploadResult);
                        }
                    )
                    uploadStream.end(buffer)
                }
            )
            updateData.image_public_id = result.public_id;
        }

        const updatedBlog = await prisma.blog.update({
            where: { id: blogid },
            data: updateData
        });

        return NextResponse.json(
            { success: true, message: "Blog updated successfully!", data: updatedBlog },
            { status: 200 }
        );

    } catch (error) {
        console.error("DEBUG: Update Blog Error:", error);
        return NextResponse.json(
            { success: false, message: `Error while updating blog: ${error}` },
            { status: 500 }
        );
    }
}
