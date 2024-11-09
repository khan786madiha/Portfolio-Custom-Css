"use client";

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './Contact.module.css'; // Importing the custom CSS module

export default function Contact() {
  const notify = () => toast("Submitting...");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "c90d5da8-11f4-4b81-9dbd-42303eb033c4");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    });

    const result = await response.json();
    if (result.success) {
      notify();
      console.log(result);
      // Optionally reset the form after successful submission
      event.currentTarget.reset();
    } else {
      toast.error("Submission failed. Please try again.");
    }
  }

  return (
    <section className={styles.contactSection}>
      <div className="container px-6 md:px-12">
        <div className={styles.contactCard}>
          {/* Contact Info Section */}
          <div className={styles.contactIcons}>
            {/* WhatsApp */}
            <div className={styles.iconContainer}>
              <FaWhatsapp size={40} style={{ color: '#25D366' }} />
              <p>WhatsApp: +92 331 2208475</p>
            </div>

            {/* Email */}
            <div className={styles.iconContainer}>
              <FaEnvelope size={40} style={{ color: 'blue' }} />
              <p>Email: mahaalikhanalizafarkhan@gmail.com</p>
            </div>

            {/* Address */}
            <div className={styles.iconContainer}>
              <FaMapMarkerAlt size={40} style={{ color: '#FF5733' }} />
              <p>Address: 123 Main St, Karachi, Pakistan</p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit}>
            <div className="relative mb-6">
              <input
                type="text"
                className={styles.inputField} // Applying custom CSS class
                name="name"
                required
                placeholder="Your Name"
              />
            </div>
            <div className="relative mb-6">
              <input
                type="email"
                className={styles.inputField} // Applying custom CSS class
                name="email"
                required
                placeholder="Your Email"
              />
            </div>
            <div className="relative mb-6">
              <textarea
                className={`${styles.inputField} peer block`} // Applying custom CSS class
                rows={3}
                name="message"
                required
                placeholder="Your Message"
              />
            </div>
            <button
              type="submit"
              onClick={notify}
              className={styles.submitButton} // Applying custom CSS class
            >
              Submit
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </section>
  );
}
