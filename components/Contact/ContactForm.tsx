import Link from "next/link";
import { PropagateLoader } from "react-spinners";

import ContactInput from "./ContactInput";
import styles from '../../styles/contact.module.scss';
import useContactForm from "../../hooks/app/useContactForm";

const ContactForm = () => {
    const {
        acceptWithRules,
        spinner,
        formRef,
        toggleAcceptWithRules,
        sendEmail,
    } = useContactForm();

    return (
        <form onSubmit={sendEmail} className={styles.contact__form} ref={formRef}>
            <ContactInput
                text="FULL NAME*"
                placeholder="Please provide your full name."
                type="text"
                name='fullName'
            />
            <ContactInput
                text="Position/company"
                placeholder="Please specify your position/company"
                type="text"
                name='company'
            />
            <ContactInput
                text="E-mail*"
                placeholder="Enter your e-mail address"
                type="email"
                name='email'
            />
            <ContactInput
                text="Phone*"
                placeholder="Enter your phone number"
                type="tel"
                name='phone'
            />
            <button
                className={styles.contact__form__btn}
                disabled={!acceptWithRules}
            >
                {spinner ? <PropagateLoader color="#fff" /> : 'Отправить заявку'}
            </button>
            <label className={styles.contact__checkbox}>
                <input
                    className={styles.contact__checkbox__input}
                    type="checkbox"
                    onChange={toggleAcceptWithRules}
                />
                <span className={styles.contact__checkbox__span} />
                <span className={styles.contact__checkbox__text}>Нажимая на кнопку «Отправить заявку», я соглашаюсь с
                    <Link href='/privacy-policy' passHref legacyBehavior><a className={styles.contact__checkbox__link}>
                        Политикой конфиденциальности</a>
                    </Link>и даю
                    <Link legacyBehavior href='/personal-data-of-clients' passHref>
                        <a className={styles.contact__checkbox__link}>Согласие на обработку персональных данных.</a>
                    </Link>
                </span>
            </label>
        </form>
    );
}

export default ContactForm;
