import styles from "@/styles/blogPage.module.css";
import { BlogPost } from "@/models/blog";

const BlogArticle = ({blogData}:{blogData:BlogPost}) => {
    return (
        <article>
            <h1>{blogData.title}</h1>
            <div className={styles.postMeta}>
                <span>by {blogData.author.name}</span>
                <span>{blogData.date}</span>
            </div>

            <div className={styles.content}>
                {blogData.content}
            </div>
        </article>
    );
};

export default BlogArticle;