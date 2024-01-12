import { Route, Routes } from 'react-router-dom'
import { SuspenseComponent } from 'common/components/Suspense/SuspenseComponent'
import { Profile } from 'components/Profile/Profile'
import { Auth } from 'components/Auth/Auth'
import { Dialogs } from 'components/Dialogs/Dialogs'
import { Users } from 'components/Users/Users'
import { News } from 'components/News/News'
import { Music } from 'components/Music/Music'
import { Settings } from 'components/Settings/Settings'

export const useRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SuspenseComponent component={Profile} />} />
      <Route path="/login" element={<SuspenseComponent component={Auth} />} />
      <Route path="/profile/:userID?" element={<SuspenseComponent component={Profile} />} />
      <Route path="/dialogs" element={<SuspenseComponent component={Dialogs} />} />
      <Route path="/users" element={<SuspenseComponent component={Users} />} />
      <Route path="/news" element={<SuspenseComponent component={News} />} />
      <Route path="/music" element={<SuspenseComponent component={Music} />} />
      <Route path="/settings" element={<SuspenseComponent component={Settings} />} />
      <Route path="*" element={<div>404 NOT FOUND</div>} />
    </Routes>
  )
}