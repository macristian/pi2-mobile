import './styles.css';
import { ReactComponent as YouTubeicon } from './youtube.svg';
import { ReactComponent as LinkeDinIcon } from './linkedin.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido por Cristian Bernardo
            <div className="footer-icons">
                <a href="https://www.youtube.com/channel/UC2-PWqgYlialoeuZoO3A1nw"  target="_new"><YouTubeicon /></a>
                <a href="https://www.linkedin.com/in/cristian-phd/"  target="_new"><LinkeDinIcon /></a>
                <a href="https://www.instagram.com/cristian.phd/"  target="_new"><InstagramIcon /></a>
            </div>
        </footer>
    )
}

export default Footer;