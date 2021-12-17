import styles from './layout.module.scss'
import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => {
    return <>
        <Header />
        {children}
        <Footer />
    </>
}
export default Layout

/*export default function Layout({ children }) {
    return <div className={styles.container}>{children}</div>
}*/