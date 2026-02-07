
export async function getBlogs() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs`,
      {
        next: { revalidate: 0 },
      }
    );
    const data = await response.json();

    if (data.success) {
      return data.message;
    }
    return [];
  } catch (error) {
    console.error(`Error while fetching the blogs: ${error}`);
    return [];
  }
}

import BlogTabs from "./BlogTabs";

async function BlogList() {
  const blogs = await getBlogs();

  return (
    <div className="w-full px-64 max-[1025px]:px-0 max-[1285px]:px-0 max-sm:px-2 mt-4 pb-8 max-sm:overflow-hidden">
      <BlogTabs initialBlogs={blogs} />
    </div>
  );
}

export default BlogList;
