import { blogsWithAuthorInfo, defaultCategories, featuredPostId } from "@/data/blogs"
import { BlogPost } from "@/models/blog";

let allBlogsSorted:BlogPost[] = [];

const sortBlogsByDate = (_blogs:BlogPost[]) => {
    return _blogs.slice().sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
    
        return dateB - dateA; // Descending order (newest to oldest)
    });
}

const initializeBlogsIfEmpty = () => {
    if (allBlogsSorted.length === 0) {
        allBlogsSorted = sortBlogsByDate(blogsWithAuthorInfo);
    }
    return allBlogsSorted;
}

export const getBlogPostsSortedByDate = ():BlogPost[] => {
    initializeBlogsIfEmpty();
    return allBlogsSorted;
}

export const getFeaturedBlogPost = ():BlogPost|null => {
    if (featuredPostId < 1) return null;
    
    initializeBlogsIfEmpty();
    for (let i = 0; i < allBlogsSorted.length; i++) {
        const blog = allBlogsSorted[i];
        if (blog.id === featuredPostId) {
            return blog;
        }
    }
    return null;
}

export const getBlogCategories = ():string[] => {
    initializeBlogsIfEmpty();
    const tags = allBlogsSorted.map(blog => blog.tags);
    const tagsSet: Set<string> = new Set(tags.flat(1));
    defaultCategories.forEach(category => tagsSet.add(category));
    return Array.from(tagsSet);
}

export const getBlogPostById = (blogId:number):BlogPost => {
    initializeBlogsIfEmpty();
    return allBlogsSorted.find(blog => blog.id === blogId) as BlogPost;
}