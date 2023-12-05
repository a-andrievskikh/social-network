import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { currentPageSelector, pageSizeSelector, totalUsersCountSelector } from 'components/Users/users-selectors'
import { setCurrentPageTC } from 'store/users-reducer'
import s from 'common/components/Pagination/Pagination.module.css'

export const Pagination = () => {
  const dispatch = useAppDispatch()
  const totalUsersCount = useAppSelector(totalUsersCountSelector)
  const pageSize = useAppSelector(pageSizeSelector)
  const currentPage = useAppSelector(currentPageSelector)
  const pagesCount = Math.ceil(totalUsersCount / pageSize)
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1)
  const pageHandler = (pageNumber: number) => dispatch(setCurrentPageTC(pageNumber, pageSize))

  return (
    <div>
      {
        pages.map((p, i) => <span
          key={i}
          className={currentPage === p ? s.selectedPage : s.pages}
          onClick={() => pageHandler(p)}
        >{p}
          </span>)
      }
    </div>
  )
}