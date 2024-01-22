import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'
import {
  currentPageSelector,
  pageSizeSelector,
  portionSizeSelector,
  totalItemsCountSelector,
} from 'components/Users/users-selectors'
import { setCurrentPageTC } from 'store/users-reducer'
import { useState } from 'react'
import s from 'common/components/Pagination/Pagination.module.css'

export const usePagination = () => {
  const dispatch = useAppDispatch()
  const totalItemsCount = useAppSelector(totalItemsCountSelector)
  const portionSize = useAppSelector(portionSizeSelector)
  const pageSize = useAppSelector(pageSizeSelector)
  const currentPage = useAppSelector(currentPageSelector)
  
  const pagesCount = Math.ceil(totalItemsCount / pageSize)
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1)
  const pageHandler = (pageNumber: number) => dispatch(setCurrentPageTC(pageNumber, pageSize))
  
  const portionCount = Math.ceil(pagesCount / portionSize)
  const [portionNumber, setPortionNumber] = useState<number>(1)
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  const rightPortionNumber = portionNumber * portionSize
  
  const prevButton = portionNumber > 1 ?
    <button className={s.btn} onClick={() => setPortionNumber(prevState => prevState - 1)}>PREV</button> :
    <div className={s.prevEmptySpace}></div>
  
  const nextButton = portionCount > portionNumber &&
    <button className={s.btn} onClick={() => setPortionNumber(prevState => prevState + 1)}>NEXT</button>
  
  const pagesList = pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionNumber)
  .map((p) => <span
      key={p}
      className={currentPage === p ? s.selectedPage : s.pages}
      onClick={() => pageHandler(p)}
    >{p}
          </span>,
  )
  
  return { prevButton, nextButton, pagesList }
}