import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import WhatWeDo from './components/sections/WhatWeDo'
import Portfolio from './components/sections/Portfolio'
import Stats from './components/sections/Stats'
import Services from './components/sections/Services'
import Process from './components/sections/Process'
import CTA from './components/sections/CTA'

export default function App() {
  return (
    <div className="min-h-screen bg-page">
      <Navbar />
      <main>
        <WhatWeDo />
        <Services />
        <Portfolio />
        <Stats />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
