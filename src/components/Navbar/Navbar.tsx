import { Link } from 'react-scroll';
import styles from './navbar.module.scss';
import { ToggleSwitch } from '@/components';

export const Navbar = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-6">
          <div className={`${styles.logo}`}>MOITA&copy;</div>
        </div>
        <div className="col col-6">
          <nav className={styles.nav_links}>
            <Link to="about" spy={true} smooth={true}>
              about
            </Link>
            <Link to="projects" spy={true} smooth={true}>
              projects
            </Link>
            <Link to="contact" spy={true} smooth={true}>
              contact
            </Link>
            <Link to="contact" spy={true} smooth={true}>
              blog
            </Link>
            <ToggleSwitch />
          </nav>
        </div>
      </div>
    </div>
  );
};
