import { useState } from "react";
import Reveal from "./Reveal";
import { DocumentIcon, GithubIcon, LinkedinIcon } from "./Icons";

const CONTACT_EMAIL = "varunjoshi311004@gmail.com";
const FORM_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim();

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function mailtoFallback({ name, email, subject, message }) {
  const body = [`Name: ${name}`, `Email: ${email}`, "", message].join("\n");

  const url = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject || `Portfolio enquiry from ${name}`)}&body=${encodeURIComponent(body)}`;
  window.location.href = url;
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [state, setState] = useState({ status: "idle", message: "" });

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setState({ status: "submitting", message: "" });

    if (!FORM_ENDPOINT) {
      setState({
        status: "fallback",
        message:
          "The form service is not connected in this local build, so your email client can be opened instead.",
      });
      mailtoFallback(form);
      return;
    }

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(event.currentTarget),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        const firstError = data?.errors?.[0]?.message;
        throw new Error(
          firstError || "Something went wrong while sending your message.",
        );
      }

      setForm(initialForm);
      setState({
        status: "success",
        message:
          "Thanks — your message is on its way. I’ll get back to you soon.",
      });
    } catch (error) {
      setState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please email me directly.",
      });
    }
  }

  return (
    <section id="contact" className="section contact contact-section">
      <div className="container contact-grid">
        <div className="contact-copy">
          <h2 className="section-title">Let's talk.</h2>
          <p className="section-lede">
            I'm looking for full-stack, mobile, or applied-AI roles — reach out
            if something fits, or just to talk shop.
          </p>

          <div className="contact-direct">
            <span>Prefer email?</span>
            <a href={`mailto:${CONTACT_EMAIL}`} className="contact-email">
              {CONTACT_EMAIL}
            </a>
          </div>

          <div className="contact-links">
            <a
              href="https://github.com/Varun311004"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span className="contact-link-icon">
                <GithubIcon />
              </span>
              <span>GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/varunjoshi3110"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span className="contact-link-icon">
                <LinkedinIcon />
              </span>
              <span>LinkedIn</span>
            </a>

            <a
              href="https://drive.google.com/file/d/1I18iFF0C6GdbzhhciXVkytH5li2--rZQ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span className="contact-link-icon">
                <DocumentIcon />
              </span>
              <span>Resume</span>
            </a>
          </div>
          <p className="contact-location">
            Based in Mumbai, Maharashtra, India.
          </p>
        </div>

        <Reveal as="div" className="contact-form-wrap">
          <form
            id="contact-form"
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="form-row form-row-two">
              <label>
                <span>Name</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={updateField}
                  required
                  autoComplete="name"
                  placeholder="Your name"
                />
              </label>
              <label>
                <span>Email</span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={updateField}
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <label>
              <span>Subject</span>
              <input
                name="subject"
                value={form.subject}
                onChange={updateField}
                autoComplete="off"
                placeholder="What would you like to talk about?"
              />
            </label>

            <label>
              <span>Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={updateField}
                required
                rows="7"
                placeholder="Tell me a little about it..."
              />
            </label>

            <input
              type="text"
              name="_gotcha"
              tabIndex="-1"
              autoComplete="off"
              aria-hidden="true"
              className="form-honeypot"
            />

            <input
              type="hidden"
              name="_subject"
              value={
                form.subject ||
                `Portfolio enquiry from ${form.name || "a visitor"}`
              }
              readOnly
            />

            <div className="form-footer">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={state.status === "submitting"}
              >
                {state.status === "submitting" ? "Sending…" : "Send message"}
              </button>
              <span className="form-note">
                Your message goes straight to my inbox when the form service is
                connected.
              </span>
            </div>

            <p
              className={`form-status form-status-${state.status}`}
              aria-live="polite"
            >
              {state.message}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
