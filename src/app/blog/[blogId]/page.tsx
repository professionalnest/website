"use client";

import React, { useEffect, useState } from "react";
import styles from "@/styles/blogPage.module.css";
import { BlogPost } from "@/models/blog";
import { getBlogPostById, getBlogPostsSortedByDate } from "@/services/dataService";
import { useParams } from "next/navigation";
import BlogArticle from "@/components/BlogArticle";
import SubscribeNewsletterC2A from "@/components/SubscribeNewsletterC2A";
import OtherArticles from "@/components/BlogPageOtherArticles";

export default function BlogPostPage() {

    const params = useParams();
    const blogId = params.blogId;
    const [blogData, setBlogData] = useState<BlogPost|null>(null);
    const [recentBlogPosts, setRecentBlogPosts] = useState<BlogPost[]>([]);

    useEffect(() => {
        if (typeof blogId === "string") {
          const numericBlogId = parseInt(blogId, 10);
          if (!isNaN(numericBlogId)) {
            const fetchedBlogData = getBlogPostById(numericBlogId);
            setBlogData(fetchedBlogData);
          }
        }

        const allBlogPosts = getBlogPostsSortedByDate();
        setRecentBlogPosts(allBlogPosts.slice(0, 3));
    }, [blogId]);

    if (!blogData) {
        return <div>Loading...</div>;
    }
    
    
    return (
        <div className={styles.container}>
            <main className={styles.blogPost}>
                <BlogArticle blogData={blogData} />
            </main>

            <aside className={styles.sidebar}>
                
                <OtherArticles blogPosts={recentBlogPosts}/>

                <SubscribeNewsletterC2A />
            </aside>

        </div>
    );
}
