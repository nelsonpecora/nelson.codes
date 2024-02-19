import { Link } from '@remix-run/react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faLongArrowDown } from '@fortawesome/free-solid-svg-icons';

import LogoLarge from './LogoLarge';
import * as css from './Splash.css';

export default function Splash() {
  return (
    <section className={css.root}>
      <nav className={css.nav}>
        <Link to="/resume" className={css.link} prefetch="intent">
          RÉSUMÉ
        </Link>
        <Link to="/" className={css.logo}>
          <LogoLarge />
        </Link>
        <Link to={{ hash: 'contact' }} className={css.link}>
          CONTACT
        </Link>
      </nav>
      <Link to={{ hash: 'second' }} className={css.cta}>
        Previous Launches
        <span className={css.ctaArrow}>
          <Icon icon={faLongArrowDown} />
        </span>
      </Link>
    </section>
  );
}
