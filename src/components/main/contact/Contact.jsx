/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { validate, validateForm } from "./validate";
import Swal from "sweetalert2";

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

const Contact = ({ leng_contact }) => {
  const [form, setForm] = useState({
    user_name: "",
    user_email: "",
    user_subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const form2 = useRef();

  const sendMail = (e) => {
    e.preventDefault();
    let aux = validateForm(form);

    if (Object.keys(aux).length !== 0) {
      setErrors(aux);
    } else if (Object.keys(aux).length === 0) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form2.current, PUBLIC_KEY).then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      setForm({
        user_name: "",
        user_email: "",
        user_subject: "",
        message: "",
      });
      Swal.fire({
        icon: "success",
        text: `${leng_contact.alert.text}`,
        background: "#000718",
        color: "white",
      });
    }
    console.log(errors);
  };

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm({ ...form, [name]: value });

    setErrors(validate({ ...form, [name]: value }));
  };

  return (
    <section id="container_contact">
      <h2>{leng_contact.title}</h2>
      <div className="contact">
        <div>
          <div className="location">
            <div className="location-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
              </svg>
            </div>
            <div className="location-text">
              <h4>Email:</h4>
              <p>raulereno1997@gmail.com</p>
            </div>
          </div>
          <div className="email">
            <div className="email-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
              </svg>
            </div>
            <div className="email-text">
              <h4>{leng_contact.location}</h4>
              <p>Argentina</p>
            </div>
          </div>
        </div>
        <div className="container_form">
          <form ref={form2} onSubmit={sendMail}>
            <div>
              <div className="inputs">
                <div>
                  <input
                    className={`input-name ${
                      errors.user_name && "errorsInputs"
                    }`}
                    type="text"
                    name="user_name"
                    id=""
                    placeholder={leng_contact.form.name}
                    value={form.user_name}
                    onChange={handleInputs}
                  />
                  <span className="errors">{errors.user_name}</span>
                </div>
                <div>
                  <input
                    className={`input-email ${
                      errors.user_email && "errorsInputs"
                    }`}
                    type="text"
                    name="user_email"
                    id=""
                    placeholder={leng_contact.form.email}
                    value={form.user_email}
                    onChange={handleInputs}
                  />
                  <span className="errors">{errors.user_email}</span>
                </div>
              </div>
            </div>
            <div>
              <input
                className="input-subject"
                type="text"
                name="user_subject"
                id=""
                placeholder={leng_contact.form.subject}
                value={form.user_subject}
                onChange={handleInputs}
              />
            </div>
            <div className="container_textarea">
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder={leng_contact.form.message}
                className={`textarea-message ${
                  errors.message && "errorsInputs"
                }`}
                value={form.message}
                onChange={handleInputs}
              ></textarea>
              <span className="errors">{errors.message}</span>
            </div>
            <button
              disabled={Object.keys(errors).length !== 0}
              className={`buttonSubmit ${
                Object.keys(errors).length !== 0 && "disableButton"
              }`}
              type="submit"
            >
              {leng_contact.form.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
