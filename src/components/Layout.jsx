import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import GlowBackground from './GlowBackground'
import Header from './Header'
import ScrollToTop from './ScrollToTop'

function Layout() {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <GlowBackground />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
