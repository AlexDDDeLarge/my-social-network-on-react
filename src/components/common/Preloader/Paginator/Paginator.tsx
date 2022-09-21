import React, { useState } from "react";
import styles from "./Paginator.module.css";

type PropsType = {
  totalCount: number
  count: number
  page: number
  onPageChanged: (pageNumber: number) => void
  portionSize: number
}

const Paginator: React.FC<PropsType> = ({totalCount, count, 
  page, onPageChanged,
  portionSize}) => {
  let pagesCount: number = Math.ceil(totalCount / count);
  let pages: Array<number> = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  let portionCount: number = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState<number>(1);
  let leftPortionPageNumber: number = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber: number = portionNumber * portionSize;

  return (
    <div className={styles.wrapper}>
      {portionNumber > 1 && 
      <button className={styles.btn} 
        onClick={() => setPortionNumber(portionNumber - 1)}
      >Prev</button>}
      {pages
        .filter(number => number >= leftPortionPageNumber && number <= rightPortionPageNumber)
        .map(number => {
          return (
            <span
              className={page == number ? styles.currentPage : styles.page}
              onClick={(e) => { onPageChanged(number) }}
            >
            {` ${number} `} 
            </span>
          )
        })}
      {portionCount > portionNumber && 
      <button className={styles.btn} 
        onClick={() => setPortionNumber(portionNumber + 1)}
      >Next</button>}  
    </div>
  )
};

export default Paginator;

/* import React, { useState } from "react";
import styles from "./Paginator.module.css";

const Paginator = ({totalCount, 
  count, 
  page, 
  onPageChanged,
  portionSize}) => {
  let [firstVisiblePage, setFirstVisiblePage] = useState(1);

  let pagesCount = Math.ceil(totalCount / count);
  let pages = [];
  for (let i = firstVisiblePage; i <= firstVisiblePage + (portionSize - 1); i++) {
    if (i <= pagesCount) pages.push(i)
    else break
  }

  let prevPages = e => {
    setFirstVisiblePage(firstVisiblePage - portionSize);
  }

  let nextPages = e => {
    setFirstVisiblePage(firstVisiblePage + portionSize);
  }

  return (
    <div className={styles.wrapper}>
      {firstVisiblePage !== 1 && 
        <button className={styles.btn} onClick={prevPages}>Prev</button>}
      {pages.map(number => {
        return (
          <span
            className={page == number ? styles.currentPage : styles.page}
            onClick={(e) => { onPageChanged(number) }}
          >
          {` ${number} `} 
          </span>
        )
      })}
      {firstVisiblePage < pagesCount && 
        <button className={styles.btn} onClick={nextPages}>Next</button>}
    </div>
  )
};

export default Paginator; */