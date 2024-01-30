import styles from './hero.module.scss';
import { GoArrowUpRight } from 'react-icons/go';
export const Hero = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className="row">
            <div className="col col-12">
              <div className={styles.header_wrapper}>
                <h1 className={styles.header_hero}>
                  Your friendly neighborhood
                </h1>
                <h1 className={styles.header_hero}>
                  Front-end Developer, Moita!
                </h1>
              </div>
            </div>
          </div>
          <div className="row justify-space-between">
            <div className="col col-12">
              <hr className="divider" />
            </div>
            <div className="col col-2">
              <a href="#">
                GET IN TOUCH <GoArrowUpRight />
              </a>
            </div>
            <div className="col col-1">(SCROLL)</div>
          </div>
        </div>
      </section>
    </>
  );
};
