import React from 'react'
import CreateBlog from '@/app/blogs/components/editor/CreateBlog'


const page = () => {
    return (
        <div className='mt-32 flex flex-col items-center pb-8'>
            <CreateBlog />
        </div>
    )
}

export default page