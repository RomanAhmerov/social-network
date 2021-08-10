import React, {useState} from "react";
import styles from "./Paginator.module.css";

// Type (TS)
type PropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber :number) => void
    portionSize?: number
}

// FC
const Paginator: React.FC<PropsType> = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    // Кол-во страниц
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages: Array<number> = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    // Кол-во порций
    let portionCount = Math.ceil(pagesCount / portionSize);

    // Local state
    let [portionNumber, setPortionNumber] = useState<number>(1);

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={styles.paginator}>
            {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>PREV</button>}

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <span key={p} className={currentPage === p ? styles.selectedPage : ""}
                                 onClick={(e) => {
                                     onPageChanged(p)
                                 }}>{p}</span>
                })}

            {portionNumber < portionCount &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>NEXT</button>}
        </div>
    )
};

export default Paginator;