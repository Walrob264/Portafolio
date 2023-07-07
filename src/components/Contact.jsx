import { useForm } from "react-hook-form";
import "./style/Contact.css";
import enviarCorreo from "../hooks/sendGmail";
import { useState } from "react";
const Contact = () => {
  const [emailsent, SetEmailsent] = useState();
  const [errorEmailSent, setErrorEmailSent] = useState();
  const { handleSubmit, register, reset } = useForm();
  const submit = (data) => {
    const formulario = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    if (enviarCorreo(formulario)) {
      SetEmailsent(true);
      setErrorEmailSent(false);
    } else {
      SetEmailsent(false);
      setErrorEmailSent(true);
    }
    reset();
  };
  const handleButtoClose = () => {
    SetEmailsent(false);
    setErrorEmailSent(false);
  };
  const handleInvalid = (data) => {
    setErrorEmailSent(true);
  };
  return (
    <section id="Contact" className="contact">
      {emailsent && (
        <div className="alert_sent-email">
          <h1>Tu correo fue enviado exitosamente</h1>
          <i className="bx bx-check-circle"></i>
          <button className="button_close" onClick={handleButtoClose}>
            cerrar
          </button>
        </div>
      )}
      {errorEmailSent && (
        <div className="alert_sentError-email">
          <h1>
            Hay un problema con enviar tu correo. Por favor, vuelve a intentarlo
            (Todos los campos son requeridos)
          </h1>

          <button className="button_close" onClick={handleButtoClose}>
            cerrar
          </button>
        </div>
      )}
      <div className="contact_container">
        <div className="text_container">
          <div className="text__for__contact">
            <h1> Hablemos de negocios</h1>
            <p className="p_for_contact">
              Ahora que sabes mucho de mí, avísame si eres interesado en
              trabajar conmigo.
            </p>
          </div>
        </div>
        <form
          className="form_contact"
          onSubmit={handleSubmit(submit, handleInvalid)}
        >
          <div className="name_for_contact">
            <label htmlFor="name">Nombre</label>
            <input
              {...register("name", { required: true })}
              id="name"
              type="text"
              className="input_Name-contact"
            />
          </div>
          <div className="email_for_contact">
            <label htmlFor="email">Email</label>
            <input
              className="input_Email-contact"
              {...register("email", { required: true })}
              id="email"
              type="email"
            />
          </div>
          <div className="message_for_contact">
            <label htmlFor="message">Mensaje</label>
            <textarea
              className="input_Message-contact"
              {...register("message", { required: true })}
              id="color"
              type="text"
            />
          </div>
          <button className="button_Form">Empecemos</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
