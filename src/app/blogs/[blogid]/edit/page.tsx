import React from 'react'
import { getBlog } from '@/lib/getBlog'
import BlogForm from '@/app/blogs/components/editor/BlogForm'

interface EditPageProps {
    params: {
        blogid: string
    }
}

const EditPage = async ({ params }: EditPageProps) => {
    const blog = await getBlog(params.blogid)

    return (
        <div className='mt-32 flex flex-col items-center pb-8'>
            <BlogForm
                isEdit={true}
                initialData={{
                    id: blog.id,
                    title: blog.title,
                    content: blog.content,
                    category: (blog as any).category || 'tech',
                    image_public_id: blog.image_public_id || undefined
                }}
            />
        </div>
    )
}

export default EditPage
