import styles from "@/styles/blog.module.css";
import RecentPostCard from "./BlogRecentPostCard";
import { BlogPost } from "@/models/blog";

const RecentPosts = ({blogPosts}:{blogPosts:BlogPost[]}) => {

    return (
        <section className={styles.recentPosts}>
            <h2>Recent Posts</h2>
            <div className={styles.postCards}>
            
                {blogPosts.map((blogPost) => (
                    <RecentPostCard key={`recent_blog_${blogPost.id}`} blogPost={blogPost}/>
                ))}
            </div>
        </section>
    );
};

export default RecentPosts;