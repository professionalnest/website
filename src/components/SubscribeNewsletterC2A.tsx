import styles from "@/styles/blog.module.css";

const SubscribeNewsletterC2A = () => {
    return (
        <section className={styles.newsletterSection}>
            <h2>Subscribe to Our Newsletter</h2>
            <p>Stay updated with the latest news, articles, and resources from our community.</p>
            <form className={styles.newsletterForm}>
                <input 
                    type="email" 
                    placeholder="Enter your email address"
                    aria-label="Email address"
                />
                <button type="submit">Subscribe</button>
            </form>
        </section>
    );
};

export default SubscribeNewsletterC2A;