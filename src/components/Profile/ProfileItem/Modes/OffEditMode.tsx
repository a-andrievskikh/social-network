import { useAppSelector } from 'common/hooks/useAppSelector'
import { statusTextSelector } from 'components/Profile/ProfileItem/profileInfo-selectors'

export const OffEditMode = ({ setEditMode }: OffEditModeT) => {
  const statusText = useAppSelector<string>(statusTextSelector)
  const onClickSetEditModeHandler = () => setEditMode(true)

  return (
    <div>
      <span onDoubleClick={onClickSetEditModeHandler}>{statusText}</span>
    </div>
  )
}

// Types
type OffEditModeT = {
  setEditMode: (editMode: boolean) => void
}