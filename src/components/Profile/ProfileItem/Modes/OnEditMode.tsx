import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { setUserStatusTC } from 'store/profile-reducer'
import { ChangeEvent } from 'react'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { userStatusSelector } from 'components/Profile/ProfileItem/profileInfo-selectors'

export const OnEditMode = ({ status, setStatus, setEditMode }: OnEditMode) => {
  const dispatch = useAppDispatch()
  const userStatus = useAppSelector<string>(userStatusSelector)
  const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => setStatus(e.currentTarget.value)

  return (
    <div>
      <input type={'text'}
             value={status}
             onChange={onChangeStatusHandler}
             onBlur={() => {
               dispatch(setUserStatusTC(status || userStatus))
               setEditMode(false)
             }}
             placeholder={'Change status'}
             autoFocus
      >
      </input>
    </div>
  )
}

// Types
type OnEditMode = {
  status: string
  setStatus: (status: string) => void
  setEditMode: (editMode: boolean) => void
}