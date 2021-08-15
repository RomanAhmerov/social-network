import React, {useState} from "react";
import styles from "./Paginator.module.css";
import Button from "../../StyledComponents/Button";
import Flex from "../../StyledComponents/Flex";
import styled, {css} from "styled-components";

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
        <Flex width='68px' direction='column' align='center' margin='0 0 0 20px'>

            <Button margin='0 0 5px 0' disabled={portionNumber > 1 ? false : true} padding='5px 15px' onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>PREV</Button>

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <div key={p} className={currentPage === p ? styles.selectedPage : "" + styles.pageNumber}
                                 onClick={(e) => {
                                     onPageChanged(p)
                                 }}>{p}</div>
                })}

            <Button margin='5px 0 0 0' disabled={portionNumber < portionCount ? false : true } padding='5px 15px' onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>NEXT</Button>
        </Flex>
    )
};

export default Paginator;

// Style
const StyledButton = styled.button`

  border-radius: 30px;
  border-width: 0;

  background-color: rgba(54, 114, 244, 0.6);
  outline: none;
  
  &:hover {
    box-shadow: 0 0 10px 1px #3672f4;
    background-color: rgba(54, 114, 244, 1);
  }
  
  ${props => props.disabled && css`
    &:hover {
      background-color: rgba(54, 114, 244, 0.3);
      box-shadow: none;
    }

    background-color: rgba(54, 114, 244, 0.3);
  `}
`