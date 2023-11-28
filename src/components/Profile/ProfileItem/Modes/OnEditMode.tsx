import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { setUserStatusTC } from 'store/profile-reducer'
import { ChangeEvent } from 'react'

export const OnEditMode = ({ status, setStatus, setEditMode }: OnEditMode) => {
  const dispatch = useAppDispatch()
  const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => setStatus(e.currentTarget.value)

  return (
    <div>
      <input type={'text'}
             value={status}
             onChange={onChangeStatusHandler}
             onBlur={() => {
               dispatch(setUserStatusTC(status || 'No Status'))
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