import { useForm } from "react-hook-form";
import "./style/Contact.css";
const Contact = () => {
  const { handleSubmit, register } = useForm();
  const submit = (data) => {
    console.log(data);
  };
  return (
    <section id="Contact" className="contact">
      <div className="contact_container">
        <div className="text_container">
          <div className="text__for__contact">
            <h1> Let’s talk business</h1>
            <p className="p_for_contact">
              Now that you know a lot about me, let me know if you are
              interested to work with me.
            </p>
          </div>
        </div>
        <form className="form_contact" onSubmit={handleSubmit(submit)}>
          <div className="name_for_contact">
            <label htmlFor="name">Name</label>
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
              id="model"
              type="text"
            />
          </div>
          <div className="message_for_contact">
            <label htmlFor="message">Message</label>
            <textarea
              className="input_Message-contact"
              {...register("message", { required: true })}
              id="color"
              type="text"
            />
          </div>
          <button className="button_Form">LET’S GET STARTED</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
