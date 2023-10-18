import ArrowSvg from "../ArrowSvg/ArrowSvg";
import MainTitle from "../MainTitle/MainTitle";
import SocialList from "./SocialList";
import styles from '../../styles/contact.module.scss';
import ContactForm from "./ContactForm";
import { useMediaQuery } from "../../hooks/common";

const Contact = () => {
    const isMobile485 = useMediaQuery(485);

    return (
        <section className={styles.contact} id='contact'>
            <div className="container">
                <MainTitle text='Write me' />
            </div>
            <div className="sub-container">
                <div className={styles.contact__inner}>
                    <div className={styles.contact__left}>
                        <p className={styles.contact__text}>
                            Are you working on something great? I'd love to help you make it happen! Write me an email and we'll start the project right away!
                        </p>
                        <p className={styles.contact__text}>
                            Just do it.
                        </p>
                        {!isMobile485 && <>
                            <h3 className={styles.contact__title}>
                                <span className={styles.contact__title__text}>Networks:</span>
                                <span className={styles.contact__title__arrow}><ArrowSvg /></span>
                                <span className={styles.contact__title__border} />
                            </h3>
                            <SocialList />
                        </>}
                    </div>
                    <div className={styles.contact__right}>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
