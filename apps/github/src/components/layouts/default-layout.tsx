import Footer from './footer'
import Header from './header'
import { DefaultLayoutProp } from './interface'

function DefaultLayout({ children }: DefaultLayoutProp) {
  return (
    <div className="container">
      <Header />
      <main className="pt-4 body-content">{children}</main>
      <Footer />
    </div>
  )
}

export default DefaultLayout
