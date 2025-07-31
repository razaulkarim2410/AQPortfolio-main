import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_1hthni4", "template_ahbmmqd", form.current, {
        publicKey: "I6HAT5mUZH7WHabGE",
      })
      .then(
        () => {
          setEmail("");
          setName("");
          setMessage("");

          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Your message was sent successfully.",
            confirmButtonColor: "#3085d6",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          Swal.fire({
            icon: "error",
            title: "Failed to Send",
            text: "Please try again later.",
            confirmButtonColor: "#d33",
          });
        }
      );
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          name="message"
          rows="9"
          placeholder="Message"
          required
          className="rounded-lg bg-lightBrown p-2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
