import { BlogPost } from "@/models/blog";
import styles from "@/styles/blog.module.css";

const FeaturedPost = ({blogPost}:{blogPost:BlogPost}) => {
    return (
      <section className={styles.featuredPost}>
        <div className={styles.featuredText}>
          <h1>{blogPost.title}</h1>
          <p>{blogPost.summary}</p>
          <a href={`blog/${blogPost.id}`} className={styles.readMore}>
            Read More →
          </a>
        </div>
        <div className={styles.featuredImage}>
          <img src={blogPost.img} alt={blogPost.title} />
        </div>
      </section>
    );
};

export default FeaturedPost;