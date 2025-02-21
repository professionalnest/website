"use client";
import React from "react";
import styles from "./BlogPost.module.css";

export default function BlogPost() {
    return (
        <div className={styles.container}>
            {/* Left side: Blog post */}
            <main className={styles.blogPost}>
                <article>
                    <h1>Correcting the record for Continue and PearAI</h1>
                    <div className={styles.postMeta}>
                        <span>by Garry Tan</span>
                        <span>10/4/2024</span>
                    </div>

                    <div className={styles.content}>
                        <p>
                            YC is at our best when backing founders with an ethos of building for
                            others, including strong open source developers like the founders of
                            Continue and many others.
                        </p>

                        <p>
                            Earlier this week, a startup in the current batch, PearAI, was
                            criticized online for an inappropriate approach to open source,
                            particularly in how it approached forking Continue. Out of instinct to
                            defend YC companies, I supported PearAI without knowing all the facts.
                            In this case, the criticism did have merit, and I worked with PearAI's
                            group partner and the founders to fix this situation.
                        </p>

                        <p>
                            Ty Dunn and Nate Sesti, co-founders of Continue, have had the grace to
                            light a path forward for PearAI and all developers through their clear
                            communication and commitment to open source. PearAI has apologized,
                            removed the offending repositories, and is working to correct all their
                            mistakes.
                        </p>

                        <p>
                            Still, I want to personally apologize to the founders of Continue, the
                            YC community and the open source community for not responding more
                            thoughtfully.
                        </p>

                        <p>I also want to clear up some important facts:</p>

                        <ul>
                            <li>
                                Continue is not a fork of VS Code, which was misinformation reported
                                in TechCrunch. Continue is a standalone project, built from scratch
                                as an extension to VS Code and JetBrains, which can be easily
                                installed by anyone in their respective marketplaces.
                            </li>
                            <li>
                                Continue itself is the center of a vibrant open source community
                                that is rallying around amplified.dev, which believes that the tools
                                used to code with LLMs will be critical infrastructure, that an
                                ecosystem is key to supporting all developer workflows, and that
                                this will only work if developers work together.
                            </li>
                        </ul>

                        <p>Open source is the lifeblood of tech startups, and everyone in our industry owes a debt to open source builders.</p>

                        <p>Thank you for making what we do possible.</p>

                        <div className={styles.signature}>
                            <p>Garry Tan</p>
                            <p>President & CEO, Y Combinator</p>
                        </div>
                    </div>
                </article>
            </main>

            {/* Right side: Placeholder for additional components */}
            <aside className={styles.sidebar}>
    <h2>Other Posts</h2>
    <div className={styles.otherPosts}>
        <div className={styles.post}>
            <h3>Announcing YC X25, the spring 2025 batch</h3>
            <p>January 20, 2025 by Dalton Caldwell</p>
            <a href="#">Read More</a>
        </div>
        
        <div className={styles.post}>
            <h3>YC Fall 2024 batch applications due by 8/27</h3>
            <p>August 7, 2024 by Dalton Caldwell</p>
            <a href="#">Read More</a>
        </div>
        
        <div className={styles.post}>
            <h3>YC Winter 2025 batch applications due by Tuesday, November 12, 2024</h3>
            <p>November 5, 2024 by Jared Friedman, Aaron Epstein</p>
            <a href="#">Read More</a>
        </div>
    </div>

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
</aside>

        </div>
    );
}
