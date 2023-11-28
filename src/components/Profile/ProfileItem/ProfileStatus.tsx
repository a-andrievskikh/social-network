import { useState } from 'react'
import { OffEditMode } from 'components/Profile/ProfileItem/Modes/OffEditMode'
import { OnEditMode } from 'components/Profile/ProfileItem/Modes/OnEditMode'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { statusTextSelector } from 'components/Profile/ProfileItem/profileInfo-selectors'

export const ProfileStatus = () => {
  const [editMode, setEditMode] = useState<boolean>(false)
  const statusText = useAppSelector<string>(statusTextSelector)
  const [status, setStatus] = useState<string>(statusText)

  return (
    <>
      {
        !editMode ?
          <OffEditMode setEditMode={setEditMode} /> :
          <OnEditMode status={status} setStatus={setStatus} setEditMode={setEditMode} />
      }
    </>
  )
}

