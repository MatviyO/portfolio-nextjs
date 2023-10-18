import ArrowSvg from '../ArrowSvg/ArrowSvg';
import MainTitle from '../MainTitle/MainTitle';
import SocialList from './SocialList';
import styles from '../../styles/about.module.scss';
import { useMediaQuery } from '../../hooks/common';

const About = () => {
    const isMobile1080 = useMediaQuery(1080);

    return (
        <section className={styles.about } id='about'>
            <div className="container">
                <MainTitle text='About me' />
            </div>
            <div className={`sub-container ${styles.about__sub_container}`}>
                <img className={styles.about__img} src="/img/about.png" alt="avatar" />
                <div className={styles.about__inner}>
                    <h3 className={styles.about__title}>
                        Matvii Oleh
                        <span className={styles.about__title__border}>
                            <span className={styles.about__title__border__arrow}>
                                <ArrowSvg />
                            </span>
                            <span className={styles.about__title__border__line} />
                        </span>
                    </h3>
                    <div className={styles.about__text}>
                        <p>
                            Located in Hartford, Connecticut.
                            I am currently working part-time as a Remote Junior Web Developer for Coolor, located in Las Vegas.
                        </p>
                        <p>
                            I am looking to take on more work and increase my skills as a web developer.
                        </p>
                    </div>
                    {!isMobile1080 && <SocialList />}
                </div>
            </div>
            <div className="sub-container">
                {isMobile1080 && <SocialList />}
            </div>
        </section>
    );
}

export default About;
