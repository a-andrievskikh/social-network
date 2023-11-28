import { useState } from 'react'
import { OffEditMode } from 'components/Profile/ProfileItem/Modes/OffEditMode'
import { OnEditMode } from 'components/Profile/ProfileItem/Modes/OnEditMode'

export const ProfileStatus = () => {
  const [editMode, setEditMode] = useState<boolean>(false)
  const [status, setStatus] = useState<string>('')

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

