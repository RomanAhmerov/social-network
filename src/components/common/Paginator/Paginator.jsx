import React, {useState} from "react";
import styles from "./Paginator.module.css";

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    // Кол-во страниц
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    // Кол-во порций
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={styles.paginator}>
            {portionNumber > 1 &&
            <button onClick={() => {setPortionNumber(portionNumber - 1)}}>PREV</button>}

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <span key={p} className={currentPage === p ? styles.selectedPage : null}
                                 onClick={(e) => {
                                     onPageChanged(p)
                                 }}>{p}</span>
                })}

            {portionNumber < portionCount &&
            <button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>}
        </div>
    )
};

export default Paginator;