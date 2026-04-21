import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import GlowBackground from './GlowBackground'
import Header from './Header'

function Layout() {
  return (
    <div className="app-shell">
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
