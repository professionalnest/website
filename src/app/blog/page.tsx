"use client"; // Ensure it's a client component

import React, { useState } from "react";
import styles from "./page.module.css";
import Link from 'next/link';

export default function Home() {
  const allPosts = [
    {
      title: "Female Founders Conference applications are open now",
      author: "Surbhi Sarna, Diana Hu",
      date: "6/18/2024",
      summary:
        "We’re bringing the Female Founders Conference back in-person on August 2 at our office in San Francisco.",
    },
    {
      title: "Dissecting the past to predict the future: Tracy Young on building TigerEye",
      author: "Greg Kumparak",
      date: "6/12/2024",
      summary:
        "Tracy Young and her co-founders sold PlanGrid for $875 million. By 2021, she was ready to start again with TigerEye.",
    },
    {
      title: "Last chance to apply for YC’s S24 batch",
      author: "Y Combinator",
      date: "6/5/2024",
      summary:
        "If you were interested in applying for S24 but thought it was too late, apply by June 13!",
    },
    {
      title: "Humanloop CEO Raza Habib shares 5 common mistakes teams make when building with LLMs",
      author: "Greg Kumparak",
      date: "6/5/2024",
      summary:
        "Humanloop CEO Raza Habib shares common mistakes he's seen while working with teams on LLM projects.",
    },
    {
      title: "Optimizing AI Workflows: Lessons from Industry Leaders",
      author: "Sarah Johnson",
      date: "6/3/2024",
      summary:
        "AI experts share insights on common pitfalls and best practices for integrating AI into business operations.",
    },
    {
      title: "The Future of LLMs: Trends and Challenges Ahead",
      author: "Mark Lee",
      date: "6/1/2024",
      summary:
        "As LLMs continue to evolve, here’s what researchers and businesses need to prepare for.",
    },
    {
      title: "AI in Finance: How Machine Learning is Reshaping Investment Strategies",
      author: "Emily Carter",
      date: "5/28/2024",
      summary:
        "Financial institutions are leveraging AI to improve decision-making and optimize risk assessment.",
    },
    {
      title: "Beyond Hype: Real-World Applications of Generative AI in Business",
      author: "David Thompson",
      date: "5/25/2024",
      summary:
        "Companies are finding innovative ways to implement generative AI for tangible business outcomes.",
    },
    {
      title: "The Rise of Decentralized AI: Combining Blockchain and Machine Learning",
      author: "Alex Williams",
      date: "5/22/2024",
      summary:
        "Exploring how decentralized AI can enhance security, privacy, and trust in machine learning applications.",
    },
    {
      title: "Optimizing AI Workflows: Lessons from Industry Leaders",
      author: "Sarah Johnson",
      date: "6/3/2024",
      summary:
        "AI experts share insights on common pitfalls and best practices for integrating AI into business operations.",
    },
    {
      title: "The Future of LLMs: Trends and Challenges Ahead",
      author: "Mark Lee",
      date: "6/1/2024",
      summary:
        "As LLMs continue to evolve, here’s what researchers and businesses need to prepare for.",
    },
    {
      title: "AI in Finance: How Machine Learning is Reshaping Investment Strategies",
      author: "Emily Carter",
      date: "5/28/2024",
      summary:
        "Financial institutions are leveraging AI to improve decision-making and optimize risk assessment.",
    },
    {
      title: "Beyond Hype: Real-World Applications of Generative AI in Business",
      author: "David Thompson",
      date: "5/25/2024",
      summary:
        "Companies are finding innovative ways to implement generative AI for tangible business outcomes.",
    },
    {
      title: "Optimizing AI Workflows: Lessons from Industry Leaders",
      author: "Sarah Johnson",
      date: "6/3/2024",
      summary:
        "AI experts share insights on common pitfalls and best practices for integrating AI into business operations.",
    },
    {
      title: "The Future of LLMs: Trends and Challenges Ahead",
      author: "Mark Lee",
      date: "6/1/2024",
      summary:
        "As LLMs continue to evolve, here’s what researchers and businesses need to prepare for.",
    },
    {
      title: "AI in Finance: How Machine Learning is Reshaping Investment Strategies",
      author: "Emily Carter",
      date: "5/28/2024",
      summary:
        "Financial institutions are leveraging AI to improve decision-making and optimize risk assessment.",
    },
    {
      title: "Beyond Hype: Real-World Applications of Generative AI in Business",
      author: "David Thompson",
      date: "5/25/2024",
      summary:
        "Companies are finding innovative ways to implement generative AI for tangible business outcomes.",
    },
    {
      title: "Optimizing AI Workflows: Lessons from Industry Leaders",
      author: "Sarah Johnson",
      date: "6/3/2024",
      summary:
        "AI experts share insights on common pitfalls and best practices for integrating AI into business operations.",
    },
    {
      title: "The Future of LLMs: Trends and Challenges Ahead",
      author: "Mark Lee",
      date: "6/1/2024",
      summary:
        "As LLMs continue to evolve, here’s what researchers and businesses need to prepare for.",
    },
    {
      title: "AI in Finance: How Machine Learning is Reshaping Investment Strategies",
      author: "Emily Carter",
      date: "5/28/2024",
      summary:
        "Financial institutions are leveraging AI to improve decision-making and optimize risk assessment.",
    },
    {
      title: "Beyond Hype: Real-World Applications of Generative AI in Business",
      author: "David Thompson",
      date: "5/25/2024",
      summary:
        "Companies are finding innovative ways to implement generative AI for tangible business outcomes.",
    },
    {
      title: "Optimizing AI Workflows: Lessons from Industry Leaders",
      author: "Sarah Johnson",
      date: "6/3/2024",
      summary:
        "AI experts share insights on common pitfalls and best practices for integrating AI into business operations.",
    },
    {
      title: "The Future of LLMs: Trends and Challenges Ahead",
      author: "Mark Lee",
      date: "6/1/2024",
      summary:
        "As LLMs continue to evolve, here’s what researchers and businesses need to prepare for.",
    },
    {
      title: "AI in Finance: How Machine Learning is Reshaping Investment Strategies",
      author: "Emily Carter",
      date: "5/28/2024",
      summary:
        "Financial institutions are leveraging AI to improve decision-making and optimize risk assessment.",
    },
    {
      title: "Beyond Hype: Real-World Applications of Generative AI in Business",
      author: "David Thompson",
      date: "5/25/2024",
      summary:
        "Companies are finding innovative ways to implement generative AI for tangible business outcomes.",
    },
  ];

  const totalPosts = allPosts.length;
  const postsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const displayedPosts = allPosts.slice(startIndex, endIndex);

  const handleNext = () => {
    if (endIndex < totalPosts) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <main className={styles.main}>
      {/* Featured Post */}
      <section className={styles.featuredPost}>
        <div className={styles.featuredText}>
          <h1>Announcing YC X25, the Spring 2025 Batch</h1>
          <p>
           Y Combinator is now running four batches per year: Winter, Spring, Summer, and Fall. We completed the first ever fall batch last year, F24, and are proud to announce the first ever spring batch. Applications are now open.
          </p>
          <a href="/blog/blog-post" className={styles.readMore}>
            Read More →
          </a>
        </div>
        <div className={styles.featuredImage}>
          <img src="/blog-logos/test_image_blog.jpg" alt="YC Spring 2025 Announcement" />
        </div>
      </section>

      {/* Recent Posts */}
      <section className={styles.recentPosts}>
          <h2>Recent Posts</h2>
          <div className={styles.postCards}>
          <Link href="/blog/blog-post">
              <div className={styles.postCard}>
                  <div className={styles.postContent}>
                      <img src="/blog-logos/Recent_image_blog.jpg" alt="YC Winter 2025 Announcement" />
                      <h3>YC Winter 2025 batch applications due by Tuesday, November 12, 2024</h3>
                      <p>To better serve founders given the rapid rate of technological change, YC recently moved from two to four batches per year...</p>
                  </div>
                  <div className={styles.authorInfo}>
                      <img src="/blog-logos/Recent_image_blog.jpg" alt="Author" />
                      <div>
                          <p className={styles.authorName}>Garry Tan</p>
                          <p className={styles.authorDate}>10/4/2024</p>
                      </div>
                  </div>
              </div>
              </Link>

              <Link href="/blog/blog-post">
              <div className={styles.postCard}>
                
                  <div className={styles.postContent}>
                      <img src="/blog-logos/Recent_image_blog_1.jpg" alt="Continue and PearAI" />
                      <h3>Correcting the record for Continue and PearAI</h3>
                      <p>Our best when backing founders with an ethos of building for others, especially when some developers...</p>
                  </div>
                  <div className={styles.authorInfo}>
                      <img src="/blog-logos/Recent_image_blog_1.jpg" alt="Author" />
                      <div>
                          <p className={styles.authorName}>Garry Tan</p>
                          <p className={styles.authorDate}>10/4/2024</p>
                      </div>
                  </div>
              </div>
              </Link>
              
              <Link href="/blog/blog-post">
              <div className={styles.postCard}>
                  <div className={styles.postContent}>
                      <img src="/blog-logos/Recent_image_blog.jpg" alt="Startup School Europe"/>
                      <h3>Join us at Startup School Europe in London - November 23</h3>
                      <p>Applications for Startup School Europe are now open!</p>
                  </div>
                  <div className={styles.authorInfo}>
                      <img src="/blog-logos/Recent_image_blog.jpg" alt="Author"/>
                      <div>
                          <p className={styles.authorName}>Garry Tan</p>
                          <p className={styles.authorDate}>10/4/2024</p>
                      </div>
                  </div>
              </div>
              </Link>
          </div>
      </section>


      {/* All Posts & Categories Side-by-Side */}
      <section className={styles.contentContainer}>
        {/* All Posts */}
        <div className={styles.allPosts}>
          <h2>All Posts</h2>
          {displayedPosts.map((post, index) => (
            <Link href="/blog/blog-post" key={index}>
            <div className={styles.post}>
              <h3>{post.title}</h3>
              <p><strong>by {post.author}</strong> - {post.date}</p>
              <p>{post.summary}</p>
            </div>
            </Link>
          ))}

          {/* Pagination Buttons */}
          <div className={styles.pagination}>
            {currentPage > 1 && (
            <button onClick={handlePrev} disabled={currentPage === 1} className={styles.prevButton}>
              ← 
            </button>
             )}         
            <span> Page {currentPage} </span>
            <button onClick={handleNext} disabled={endIndex >= totalPosts} className={styles.nextButton}>
              →
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className={styles.categories}>
          <h2>Categories</h2>
          <ul>
            {["Admissions", "Advice", "Biotech", "Blockchain", "Essay", "Female Founders", "Founder Stories", "Interviews", "Startup School", "Work at a Startup", "YC Events"].map((category, index) => (
              <li key={index} className={styles.categoryItem}>{category}</li>
            ))}
          </ul>
        </div>
      </section>
      {/* Newsletter Section */}
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

    </main>
  );
}
