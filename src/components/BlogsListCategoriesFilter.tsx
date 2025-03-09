import styles from "@/styles/blog.module.css";

const CategoriesFilter = ({categories}:{categories:string[]}) => {

  return (
    <div className={styles.categories}>
      <h2>Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index} className={styles.categoryItem}>{category}</li>
        ))}
      </ul>
    </div>
  );
}

export default CategoriesFilter;