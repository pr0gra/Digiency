import { MainPage } from './pages/MainPage/MainPage'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage'
import { OurBlogPage } from './pages/OurBlogPage/OurBlogPage'
import { ArticlePage } from './pages/ArticlePage/ArticlePage'

function App() {
  return (
    <Routes>
      <Route path="home" element={<HomePage />} />
      <Route path="/" element={<MainPage />} />
      <Route path="blog" element={<OurBlogPage />} />
      <Route path="blog/:id" element={<ArticlePage />} />
    </Routes>
  )
}

export default App
