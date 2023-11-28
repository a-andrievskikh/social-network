import { useAppSelector } from 'common/hooks/useAppSelector'
import { userStatusSelector } from 'components/Profile/ProfileItem/profileInfo-selectors'

export const OffEditMode = ({ setEditMode }: OffEditMode) => {
  const userStatus = useAppSelector<string>(userStatusSelector)
  const onClickSetEditModeHandler = () => setEditMode(true)

  return (
    <div>
      <span onDoubleClick={onClickSetEditModeHandler}>{userStatus}</span>
    </div>
  )
}

// Types
type OffEditMode = {
  setEditMode: (editMode: boolean) => void
}