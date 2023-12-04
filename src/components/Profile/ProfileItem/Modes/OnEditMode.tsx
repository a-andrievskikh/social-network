import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { setUserStatusTC } from 'store/profile-reducer'
import { ChangeEvent } from 'react'

export const OnEditMode = ({ status, setStatus, setEditMode }: OnEditMode) => {
  const dispatch = useAppDispatch()
  const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => setStatus(e.currentTarget.value)
  const onBlurStatusHandler = () => {
    dispatch(setUserStatusTC(status || 'No Status'))
    setEditMode(false)
  }

  return (
    <div>
      <input type={'text'}
             value={status}
             onChange={onChangeStatusHandler}
             onBlur={onBlurStatusHandler}
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