import BlogList from './components/BlogList'
import { Suspense } from 'react'
import ClientWrapper from './components/ClientWrapper'
import BlogSkeleton from './components/BlogSkeleton'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Blog | Shivam Rana",
  description: "Read the latest thoughts and tutorials from Shivam Rana on modern web development, software engineering, and AI.",
}

const Page = () => {
  return (
    <ClientWrapper>
      <Suspense fallback={<BlogSkeleton />}>
        <BlogList />
      </Suspense>
    </ClientWrapper>
  )
}

export default Page