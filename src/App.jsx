import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Hero from './components/Hero'
import LiveWall from './components/LiveWall'
import Gallery from './components/Gallery'
import Timeline from './components/Timeline'
import Biography from './components/Biography'
// import Admin from './pages/Admin'

// Placeholder for Home Page
const Home = () => (
  <>
    <Hero />
    <Biography />
    <Timeline />
    <Gallery />
    <LiveWall />
    {/* Other sections will go here */}
    <div className='h-screen flex items-center justify-center'>
      <h2 className='text-4xl font-rebel text-brand-ash opacity-20'>More Content Loading...</h2>
    </div>
  </>
)

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="gallery" element={<Gallery />} /> */}
        {/* <Route path="timeline" element={<Timeline />} /> */}
        {/* <Route path="admin" element={<Admin />} /> */}
      </Route>
    </Routes>
  )
}

export default App
