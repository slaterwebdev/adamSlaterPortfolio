import { Section, PageTemplate } from "@/components";
import contactHero from "@/assets/heros/contact.jpg";

export const Contact = () => (
  <PageTemplate content={{ title: "Get In Touch" }} image={contactHero}>
    <Section title="Send me a message">
      <p className="text-3xl sm:text-5xl">
        Whether you wish to discuss new ideas or have a project for me, simply
        fill this form and I'll get back to you soon.
      </p>
    </Section>
    <div className="p-8 rounded-xl shadow-lg max-w-screen-lg mx-auto mb-12 sm:mb-24">
      <form className="space-y-4">
        <div className="w-full">
          <label className="sr-only" htmlFor="name">
            Name
          </label>
          <input
            className="input input-solid max-w-full"
            placeholder="Name"
            type="text"
            id="name"
            required
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <input
              className="input input-solid"
              placeholder="Email address"
              type="email"
              id="email"
              required
            />
          </div>

          <div>
            <label className="sr-only" htmlFor="phone">
              Phone
            </label>
            <input
              className="input input-solid"
              placeholder="Phone Number"
              type="tel"
              id="phone"
              required
            />
          </div>
        </div>

        <div className="w-full">
          <label className="sr-only" htmlFor="message">
            Message
          </label>

          <textarea
            className="textarea textarea-solid max-w-full"
            placeholder="Message"
            rows={8}
            id="message"
            required
          ></textarea>
        </div>

        <div className="mt-4">
          <button
            type="button"
            className="rounded-lg btn btn-primary btn-block"
          >
            Send Enquiry
          </button>
        </div>
      </form>
    </div>
  </PageTemplate>
);
