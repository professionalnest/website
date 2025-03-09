import styles from "@/styles/blog.module.css";
import { getBlogCategories, getBlogPostsSortedByDate } from "@/services/dataService";
import RecentPosts from "@/components/BlogRecentPosts";
import BlogsList from "@/components/BlogsList";

export default function Home() {

  const allBlogPosts = getBlogPostsSortedByDate();
  const recentBlogPosts = allBlogPosts.slice(0, 3);
  const blogCategories = getBlogCategories();

  return (
    <main className={styles.main}>
      {/* {featuredBlogPost && <FeaturedPost blogPost={featuredBlogPost}/>} */}
      
      <RecentPosts blogPosts={recentBlogPosts}/>

      <BlogsList categories={blogCategories} blogPosts={allBlogPosts} />
      
      {/* <SubscribeNewsletterC2A /> */}

    </main>
  );
}
