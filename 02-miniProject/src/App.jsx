import React from 'react'
import Section1 from './components/Section 1/Section1'
import { CopyrightIcon } from 'lucide-react'

const slides = [
  {
    img: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    info: 'Discover the timeless beauty of India through majestic forts, ancient temples, and vibrant cultural heritage.',
    tag: 'View'
  },
  {
    img: 'https://images.unsplash.com/photo-1692173248120-59547c3d4653?q=80&w=2001&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    info: 'Explore colorful festivals, local traditions, and breathtaking destinations that celebrate India’s diverse culture.',
    tag: 'Explore'
  },
  {
    img: 'https://images.unsplash.com/photo-1550583074-288b9c016df5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    info: 'Shop authentic handcrafted textiles, traditional jewelry, pottery, and artisan-made souvenirs from across India.',
    tag: 'Shop'
  },
  {
    img: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070&auto=format&fit=crop',
    info: 'Learn the stories behind India’s iconic landmarks, cuisines, folk arts, and centuries-old customs.',
    tag: 'Know More'
  }
]

const App = () => {
  return (
    <div className=''>
    <Section1 users={slides}/>
    <div className="flex text-center justify-centerpsit ">
      <CopyrightIcon/><p>YASH GUPTA, 2026</p></div>
    </div>
  )
}

export default App