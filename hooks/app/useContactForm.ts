import {FormEvent, useRef, useState} from "react";
import emailjs from "@emailjs/browser";
import {toast} from "react-toastify";

export const useContactForm = () => {
    const [acceptWithRules, setAcceptWithRules] = useState<boolean>(false);
    const [spinner, setSpinner] = useState<boolean>(false);
    const formRef = useRef<HTMLFormElement>(null);

    const toggleAcceptWithRules = () => setAcceptWithRules(!acceptWithRules);

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setSpinner(true);
        if (formRef?.current) {
            emailjs.sendForm('service_4406d2p', 'template_2y49n2e', formRef.current, 'ARtfb1bp4SELm6yXa')
                .then(result => {
                    setSpinner(false);
                    toast(`Data has been sent ${result.text}`);
                }, error => {
                    setSpinner(false);
                    toast.error(`Data has been sent ${error.text}`);
                })

            formRef.current.reset();
        }
        setAcceptWithRules(false);
    }

    return {
        acceptWithRules,
        spinner,
        formRef,
        toggleAcceptWithRules,
        sendEmail,
    };
}

export default useContactForm;
