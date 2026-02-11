import { Route, Routes } from 'react-router'

import App from './pages/App'
import PageFeature from './pages/features'
import UserPage from './pages/user'

const MainRoutes = () => {
  return (
    <Routes>
      <Route index element={<App />}></Route>
      <Route path="/feature/:id" element={<PageFeature />}></Route>
      <Route path="/user" element={<UserPage />}></Route>
    </Routes>
  )
}

export default MainRoutes
