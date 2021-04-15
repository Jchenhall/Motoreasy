import React from 'react';
import styles from './Pagination.module.scss';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    
      <ul className={styles.pagination}>
        {pageNumbers.map(number => (
          <li key={number} className={styles.pagination__pageList}>
            <a onClick={() => paginate(number)} href='!#' className={styles.pagination__pageList__num}>
              {number}
            </a>
          </li>
        ))}
      </ul>
  
  );
};

export default Pagination;