"use client";

import React, { useState } from "react";
import styles from "@/styles/blog.module.css";
import Link from 'next/link';
import { BlogPost } from "@/models/blog";
import BlogsListCategoriesFilter from "./BlogsListCategoriesFilter";

const BlogsList = ({categories, blogPosts}:{categories:string[], blogPosts:BlogPost[]}) => {

  const totalPosts = blogPosts.length;
  const postsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const displayedPosts = blogPosts.slice(startIndex, endIndex);

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
    <section className={styles.contentContainer}>
      {/* All Posts */}
      <div className={styles.blogPosts}>
        <h2>All Posts</h2>
        {displayedPosts.map((post, index) => (
          <Link href={`/blog/${post.id}`} key={index}>
          <div className={styles.post}>
            <h3>{post.title}</h3>
            <p><strong>by {post.author.name}</strong> - {post.date}</p>
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
      <BlogsListCategoriesFilter categories={categories} />
    </section>
  );
}

export default BlogsList;