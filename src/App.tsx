import { MainPage } from './pages/MainPage/MainPage'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage'
import { OurBlogPage } from './pages/OurBlogPage/OurBlogPage'

function App() {
  return (
    <Routes>
      <Route path="home" element={<HomePage />} />
      <Route path="/" element={<MainPage />} />
      <Route path="blog" element={<OurBlogPage />} />
      <Route path="blog/:id" />
    </Routes>
  )
}

export default App
