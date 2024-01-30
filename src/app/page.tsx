'use client';

import { Navbar, Hero, Footer } from '@/components';
import '@/styles/styles.scss';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="about">
        <div className="container">
          <div className="row justify-space-between">
            <div className="col col-4">
              <p>(001)</p>
            </div>
            <div className="col col-8">
              <h2>
                Bringing your ideas to
                <br /> digital reality since 2019.
              </h2>
              <h4 className="secondary-text">
                I specialize in crafting seamless and visually stunning<br/>
                front-end experiences. Every project is a blend of innovation,<br/>
                clean code and cutting-edge design, ensuring your vision is<br/>
                not just created, but truly brought to life
              </h4>
              <a className="highlight-link" href="#"><h5>More about me and services</h5></a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
