'use client';

import { CldImage } from 'next-cloudinary'
import React from 'react'

type PublicId = {
    public_id: string | null | undefined
}

const BlogPage = ({ public_id }: PublicId) => {
    if (!public_id) return null;
    return (
        <CldImage
            width="900"
            height="900"
            src={public_id}
            sizes="100vw"
            alt="Blog Image"
            radius="10"
        />
    )
}

export default BlogPage