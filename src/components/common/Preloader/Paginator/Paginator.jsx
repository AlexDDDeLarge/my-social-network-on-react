import React from "react";
import styles from "./Paginator.module.css";

const Paginator = ({totalCount, count, page, onPageChanged}) => {

  let pagesCount = Math.ceil(totalCount / count);
  let pages = [];
  for (let i = 1; i <= 15; i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map(number => {
        return (
          <span
            className={(page === number) ? styles.currentPage: ""}
            onClick={(e) => { onPageChanged(number) }}
          >
          {`${number} `} 
          </span>
        )
      })}
    </div>
  )
};

export default Paginator;