import styles from "@/styles/blog.module.css";
import { getBlogCategories, getBlogPostsSortedByDate, getFeaturedBlogPost } from "@/services/dataService";
import FeaturedPost from "@/components/BlogFeaturedPost";
import RecentPosts from "@/components/BlogRecentPosts";
import BlogsList from "@/components/BlogsList";
import SubscribeNewsletterC2A from "@/components/SubscribeNewsletterC2A";

export default function Home() {

  const allBlogPosts = getBlogPostsSortedByDate();
  const featuredBlogPost = getFeaturedBlogPost();
  const recentBlogPosts = allBlogPosts.slice(0, 3);
  const blogCategories = getBlogCategories();

  return (
    <main className={styles.main}>
      {featuredBlogPost && <FeaturedPost blogPost={featuredBlogPost}/>}
      
      <RecentPosts blogPosts={recentBlogPosts}/>

      <BlogsList categories={blogCategories} blogPosts={allBlogPosts} />
      
      <SubscribeNewsletterC2A />

    </main>
  );
}
