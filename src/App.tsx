import { MainPage } from './pages/MainPage/MainPage'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage'

function App() {
  return (
    <Routes>
      <Route path="home" element={<HomePage />} />
      <Route path="/" element={<MainPage />} />
      <Route path="blog" />
      <Route path="blog/:id" />
    </Routes>
  )
}

export default App
