import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'
import {
  currentPageSelector,
  pageSizeSelector,
  portionSizeSelector,
  totalItemsCountSelector,
} from 'components/Users/users-selectors'
import { setCurrentPageTC } from 'store/users-reducer'
import s from 'common/components/Pagination/Pagination.module.css'
import { useState } from 'react'

export const Pagination = () => {
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

  return (
    <div className={s.pagination}>
      {
        portionNumber > 1 ?
          <button className={s.btn} onClick={() => setPortionNumber(prevState => prevState - 1)}>PREV</button> :
          <div className={s.prevEmptySpace}></div>
      }
      {
        pages
          .filter(p => p >= leftPortionPageNumber && p <= rightPortionNumber)
          .map((p) => {
            return <span
              key={p}
              className={currentPage === p ? s.selectedPage : s.pages}
              onClick={() => pageHandler(p)}
            >{p}
          </span>
          })
      }
      {
        portionCount > portionNumber &&
        <button className={s.btn} onClick={() => setPortionNumber(prevState => prevState + 1)}>NEXT</button>
      }
    </div>
  )
}