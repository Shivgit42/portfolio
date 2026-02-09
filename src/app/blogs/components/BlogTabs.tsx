'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Blog } from '@/types/project'
import BlogCard from './BlogCard'

import { bricolage_grotesque } from '@/utils/fonts'

interface BlogTabsProps {
    initialBlogs: Blog[]
}

const BlogTabs = ({ initialBlogs }: BlogTabsProps) => {
    const [activeTab, setActiveTab] = useState<'learnings' | 'tech'>('learnings')

    const filteredBlogs = initialBlogs.filter(blog => {
        const category = blog.category?.toLowerCase().trim() || 'tech'

        if (activeTab === 'tech') {
            return category === 'tech'
        } else {
            // Section is "Learnings and Sayings"
            return category.includes('learning') || category.includes('saying')
        }
    })

    return (
        <div className={`w-full flex flex-col items-center ${bricolage_grotesque}`}>
            <div className="flex gap-10 mb-8 border-b border-zinc-900 w-full max-w-2xl justify-center">
                <button
                    onClick={() => setActiveTab('learnings')}
                    className={`pb-4 text-xl font-bold transition-all duration-300 relative px-2 ${activeTab === 'learnings' ? 'text-white' : 'text-zinc-500 hover:text-zinc-400'
                        }`}
                >
                    Learnings and Sayings
                    {activeTab === 'learnings' && (
                        <motion.div
                            layoutId="activeTab"
                            className="absolute bottom-0 left-0 right-0 h-[2px] bg-white shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    )}
                </button>
                <button
                    onClick={() => setActiveTab('tech')}
                    className={`pb-4 text-xl font-bold transition-all duration-300 relative px-2 ${activeTab === 'tech' ? 'text-white' : 'text-zinc-500 hover:text-zinc-400'
                        }`}
                >
                    Tech
                    {activeTab === 'tech' && (
                        <motion.div
                            layoutId="activeTab"
                            className="absolute bottom-0 left-0 right-0 h-[2px] bg-white shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    )}
                </button>
            </div>

            <div className="w-full relative min-h-[400px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="w-full flex flex-col gap-8 items-center pb-20"
                    >
                        {filteredBlogs.length > 0 ? (
                            filteredBlogs.map((blog: Blog, index: number) => (
                                <motion.div
                                    key={blog.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="w-full flex justify-center"
                                >
                                    <BlogCard
                                        title={blog.title}
                                        createdAt={blog.createdAt}
                                        content={blog.content}
                                        id={blog.id}
                                    />
                                </motion.div>
                            ))
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-zinc-500 mt-12 text-center"
                            >
                                <p className="text-lg">No blogs in this section yet.</p>
                                <p className="text-sm mt-2 text-zinc-600">Check back later for new content!</p>
                            </motion.div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}

export default BlogTabs
