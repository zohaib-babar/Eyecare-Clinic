import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import gsap from "gsap";
import Page from "../components/layout/Page.jsx";
import PageHeader from "../components/sections/PageHeader.jsx";
import Button from "../components/ui/Button.jsx";
import { clinic, services } from "../data/content.js";

const emptyForm = { name: "", email: "", phone: "", service: "", date: "", message: "" };

// Returns an object of error messages. An empty object means the form is valid.
function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Enter your full name.";
  if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = "Enter a valid email address, such as name@example.com.";
  if (values.message.trim().length < 10) errors.message = "Tell us a little more, at least 10 characters.";
  return errors;
}

function Field({ label, error, optional, children }) {
  return (
    <label className="block">
      <span className="mb-2 flex justify-between text-sm font-semibold text-navy-900">
        {label}
        {optional && <span className="font-normal text-slate-500">Optional</span>}
      </span>
      {children}
      {error && <span className="mt-2 block text-sm text-red-600" role="alert">{error}</span>}
    </label>
  );
}

export default function Contact() {
  // The Services page links here with ?service=cataract-surgery to preselect a service.
  const [params] = useSearchParams();
  const [values, setValues] = useState({ ...emptyForm, service: params.get("service") || "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  const successRef = useRef(null);

  const today = new Date().toISOString().split("T")[0];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("sending");
    // TODO: connect a real service here, for example:
    //   fetch("https://formspree.io/f/your-id", { method: "POST", body: JSON.stringify(values) })
    // For now the request is simulated so you can see the full flow.
    setTimeout(() => setStatus("sent"), 1200);
  };

  const reset = () => {
    setValues(emptyForm);
    setErrors({});
    setStatus("idle");
  };

  // Animate the confirmation message when it appears
  useEffect(() => {
    if (status === "sent" && successRef.current) {
      gsap.from(successRef.current.children, {
        opacity: 0,
        y: 24,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });
    }
  }, [status]);

  return (
    <Page>
      <PageHeader
        current="Contact"
        title="Let us look after you."
        text="Book an appointment or ask a question. We reply to every message within one working day."
      />

      <div className="page-body bg-mist">
        <section className="section-y">
          <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-16">
            {/* Contact details */}
            <div className="lg:col-span-5" data-stagger>
              <div className="group border-t border-navy-900/15 py-8">
                <h2 className="text-2xl">Visit the clinic</h2>
                <address className="mt-3 not-italic leading-relaxed">
                  {clinic.address.map((line) => (
                    <span key={line} className="block">{line}</span>
                  ))}
                </address>
              </div>

              <div className="border-t border-navy-900/15 py-8">
                <h2 className="text-2xl">Call or write</h2>
                <p className="mt-3">
                  <a href={clinic.phoneLink} className="text-xl font-semibold text-navy-900 underline decoration-aqua-500 decoration-2 underline-offset-4 transition-colors hover:text-aqua-700">
                    {clinic.phone}
                  </a>
                </p>
                <p className="mt-1">
                  <a href={`mailto:${clinic.email}`} className="transition-colors hover:text-aqua-700">{clinic.email}</a>
                </p>
              </div>

              <div className="border-t border-navy-900/15 py-8">
                <h2 className="text-2xl">Opening hours</h2>
                <dl className="mt-4 space-y-2">
                  {clinic.hours.map((h) => (
                    <div key={h.days} className="flex justify-between gap-6 border-b border-dashed border-navy-900/15 pb-2">
                      <dt>{h.days}</dt>
                      <dd className="font-semibold text-navy-900">{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="rounded-2xl bg-navy-900 p-6 text-white/80">
                <p className="font-display text-2xl text-white">Sudden change in vision?</p>
                <p className="mt-2 text-sm leading-relaxed">
                  Loss of sight, flashes of light or a new shower of floaters need attention the same day. Call us right away, or go to your nearest emergency department.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <div data-reveal="up" className="rounded-[2rem] bg-white p-7 shadow-lift sm:p-12">
                {status === "sent" ? (
                  <div ref={successRef} className="py-10">
                    <h2 className="text-4xl sm:text-5xl">Thank you, {values.name.split(" ")[0]}.</h2>
                    <p className="mt-5 max-w-md text-lg leading-relaxed">
                      We have your request. A member of our team will reply to {values.email} within one working day.
                    </p>
                    <div className="mt-8">
                      <Button type="button" variant="outlineDark" onClick={reset}>Send another message</Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    <div>
                      <h2 className="text-4xl sm:text-5xl">Request an appointment</h2>
                      <p className="mt-3">Fields marked with an asterisk are required.</p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <Field label="Full name *" error={errors.name}>
                        <input
                          className="field"
                          name="name"
                          type="text"
                          autoComplete="name"
                          value={values.name}
                          onChange={handleChange}
                          aria-invalid={Boolean(errors.name)}
                          placeholder="Your name"
                        />
                      </Field>
                      <Field label="Email *" error={errors.email}>
                        <input
                          className="field"
                          name="email"
                          type="email"
                          autoComplete="email"
                          value={values.email}
                          onChange={handleChange}
                          aria-invalid={Boolean(errors.email)}
                          placeholder="name@example.com"
                        />
                      </Field>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <Field label="Phone" optional>
                        <input
                          className="field"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          value={values.phone}
                          onChange={handleChange}
                          placeholder="Best number to reach you"
                        />
                      </Field>
                      <Field label="Preferred date" optional>
                        <input
                          className="field"
                          name="date"
                          type="date"
                          min={today}
                          value={values.date}
                          onChange={handleChange}
                        />
                      </Field>
                    </div>

                    <Field label="Service" optional>
                      <select className="field" name="service" value={values.service} onChange={handleChange}>
                        <option value="">General enquiry</option>
                        {services.map((s) => (
                          <option key={s.id} value={s.id}>{s.title}</option>
                        ))}
                      </select>
                    </Field>

                    <Field label="How can we help? *" error={errors.message}>
                      <textarea
                        className="field resize-y"
                        name="message"
                        rows="5"
                        value={values.message}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.message)}
                        placeholder="Tell us about your symptoms, questions or the visit you would like."
                      />
                    </Field>

                    <Button type="submit" variant="dark" size="lg" disabled={status === "sending"} className="w-full sm:w-auto">
                      {status === "sending" ? "Sending your request" : "Send Request"}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Page>
  );
}
