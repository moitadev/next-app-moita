import Image from 'next/image';
import icon from '@/assets/icon.svg';
import text from '@/assets/text.svg';
import textDark from '@/assets/textDark.svg';
import { Link } from 'react-scroll';
import styles from './navbar.module.scss';
import { useTheme } from '@/context/ThemeContext';
import { ToggleSwitch } from '@/components';

export const Navbar = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className="container">
      <div className="row align-center">
        <div className="col col-6 align-center">
          <div className={styles.logo}>
            <Image src={icon} width={50} alt="Moita icon" />
            {isDarkMode ? (
              <Image src={textDark} width={100} alt="Moita" />
            ) : (
              <Image src={text} width={100} alt="Moita" />
            )}
          </div>
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
