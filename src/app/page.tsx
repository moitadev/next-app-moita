'use client';

import { Navbar } from '@/components';
import '@/styles/styles.scss';
import Image from 'next/image';
import { BiLogoLinkedin, BiLogoGithub } from 'react-icons/bi';
import bgImg from '@/assets/bg-img.png';

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col col-12">
              <h1 className="header-hero">
                Your <span className="italic">fr</span>iendly neighborhood
              </h1>
              <h1 className="header-hero">
                <span className="italic">Fr</span>ont-end Developer, Moita!
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col col-3">
              <small>
                Bringing your ideas
                <br />
                to digital reality since 2019.
              </small>
            </div>
          </div>
          <div className="row">
            <div className="col col-10">
              <div className="welcome-box">
                <Image fill={true} src={bgImg} alt="welcome" />
              </div>
            </div>
            <div className="col col-2">
              <div className="smaller-box">
                <div className="inner-box">
                  <a
                    href="https://github.com/moitadev"
                    target="_blank"
                    className="link-absolute"
                  ></a>
                  <BiLogoGithub />
                </div>
                <div className="inner-box">
                  <a
                    href="https://www.linkedin.com/in/msales97/"
                    target="_blank"
                    className="link-absolute"
                  ></a>
                  <BiLogoLinkedin />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="noise"></div>
    </>
  );
};

export default Home;
