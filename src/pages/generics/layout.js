import Navbar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  )
}
