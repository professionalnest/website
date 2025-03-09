import Link from "next/link";
import styles from "@/styles/blog.module.css";
import { BlogPost } from "@/models/blog";

const RecentPostCard = ({blogPost}:{blogPost:BlogPost}) => {
    return (
        <Link href={`/blog/${blogPost.id}`}>
            <div className={styles.postCard}>
                <div className={styles.postContent}>
                    <img src={blogPost.img} alt={blogPost.title} />
                    <h3>{blogPost.title}</h3>
                    <p>{blogPost.summary}</p>
                </div>
                <div className={styles.authorInfo}>
                    <img src={blogPost.author.img} alt={blogPost.author.name} />
                    <div>
                        <p className={styles.authorName}>{blogPost.author.name}</p>
                        <p className={styles.authorDate}>{blogPost.date}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default RecentPostCard;