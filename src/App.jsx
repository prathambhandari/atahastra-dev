import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import PageFallback from './components/ui/PageFallback'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Careers = lazy(() => import('./pages/Careers'))

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
