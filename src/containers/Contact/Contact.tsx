import React, { useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [error, setError] = useState("");

  const handleForm = (e: React.FormEvent) => {
    e.preventDefault();

    if (name.length <= 0 || email.length <= 0 || message.length <= 0) {
      setError("Preencha todos os campos.");
      return;
    }

    const templateParams = {
      from_name: name,
      to_name: "Elany Ferreira",
      message: message,
      to_email: email,
    };

    emailjs
      .send(
        "service_9fltak1",
        "template_j80hccr",
        templateParams,
        "ZoU2r6M6imovp3rdw"
      )
      .then((response) => {
        console.log("Email enviado com sucesso", response.status);
        // Limpa os campos
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  return (
    <div
      id="contact"
      className="text-zinc-200 min-h-screen flex flex-col items-center justify-around gap-4 py-2"
    >
      <h1 className="font-rubik text-xl uppercase">Contact me</h1>

      <form
        action=""
        className="w-5/6 lg:w-3/6 flex flex-col items-center justify-around gap-3"
        onSubmit={handleForm}
      >
        <div className="group-input">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your full name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="group-input">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="group-input">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            placeholder="Enter your message..."
            cols={26}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <button
          className="font-poppins text-sm text-zinc-200 bg-secundaria py-2 px-4 uppercase rounded-lg hover:bg-secundaria/60 hover:scale-110 duration-200 ease-in-out"
          type="submit"
        >
          Enviar
        </button>

        {error && (
          <p className="text-red-600">{error}</p>
        )}
      </form>

      <div className="w-5/6 flex justify-between items-center gap-2">
        <h1 className="w-3/6 md:w-4/6 font-rubik text-2xl uppercase">Follow me</h1>
        <ul className="flex-1 flex justify-between flex-wrap gap-1">
          <li className="bg-secundaria py-2 px-2.5 rounded-full cursor-pointer">
            <a href="https://www.instagram.com/e.bsouzaa/" target="_blank">
              <i className="fa-brands fa-instagram fa-xl"></i>
            </a>
          </li>
          <li className="bg-secundaria py-2 px-2.5 rounded-full cursor-pointer">
            <a href="https://www.linkedin.com/in/ebsouzaa/" target="_blank">
              <i className="fa-brands fa-linkedin fa-xl"></i>
            </a>
          </li>
          <li className="bg-secundaria p-2 rounded-full cursor-pointer">
            <a href="https://github.com/ElanyFS/" target="_blank">
              <i className="fa-brands fa-github fa-xl"></i>
            </a>
          </li>
          <li className="bg-secundaria py-2 px-1.5 rounded-full cursor-pointer">
            <a href="#" target="_blank">
              <i className="fa-brands fa-discord fa-xl"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="h-[0.5px] bg-secundaria w-5/6 mx-auto"></div>
    </div>
  );
};
