import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactForm = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      Swal.fire({
        icon: "warning",
        title: "All fields are required!",
        confirmButtonColor: "#f39c12",
      });
      return;
    }

    setLoading(true);

    emailjs
      .sendForm("service_1hthni4", "template_zmixqld", form.current, {
        publicKey: "fHUr5zLpvPeTDx2eN",
      })
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
          setLoading(false);

          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Your message was sent successfully.",
            confirmButtonColor: "#3085d6",
          });
        },
        (error) => {
          console.error("FAILED...", error.text);
          setLoading(false);

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
    <div className="">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col space-y-6"
      >
        <div>
          <label className="block mb-2 text-lg font-medium">Your Name</label>
          <input
            type="text"
            name="from_name"
            placeholder="Enter your name"
            required
            className="w-full h-12 py-3 text-lg rounded-lg bg-lightBrown px-4"
            
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-2 text-lg font-medium">Your Email</label>
          <input
            type="email"
            name="from_email"
            placeholder="Enter your email"
            required
            className="w-full h-12 py-3 text-lg rounded-lg bg-lightBrown px-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-2 text-lg font-medium">Message</label>
          <textarea
            name="message"
            rows="9"
            placeholder="Type your message"
            required
            className="w-full text-lg rounded-lg bg-lightBrown p-4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        {/* <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
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
      </form> */}

        <button
          type="submit"
          disabled={loading}
          className={`h-12 w-full rounded-lg border text-white font-semibold text-lg transition-all duration-300 ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-cyan hover:bg-darkCyan border-cyan"
          }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
