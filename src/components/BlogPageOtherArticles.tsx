import styles from "@/styles/blogPage.module.css";
import { BlogPost } from "@/models/blog";

const OtherArticles = ({blogPosts}:{blogPosts:BlogPost[]}) => {
    return (
        <>
            <h2>Other Posts</h2>

            <div className={styles.otherPosts}>

                {blogPosts.map((post, index) => {
                    return (
                        <div key={index} className={styles.post}>
                            <h3>{post.title}</h3>
                            <p>{post.date} by {post.author.name}</p>
                            <a href={`/blog/${post.id}`}>Read More</a>
                        </div>
                    );
                }
                )}
            </div>
        </>
    );
};

export default OtherArticles;