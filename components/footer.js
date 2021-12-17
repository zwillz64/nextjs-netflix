import Container from './container'
import Nav from './nav'

import styles from './footer.module.scss'

const Footer = () => {
    return <footer className={styles.footer}>
        <Container>
            <Nav.SocialMedia />
        </Container>
    </footer>
}
export default Footer