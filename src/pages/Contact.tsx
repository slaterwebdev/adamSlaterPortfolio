import { Section, PageTemplate } from "@/components";
import contactHero from "@/assets/heros/contact.jpg";

const Form = () => {
  const BASE_INPUT_STYLES = "w-full bg-white mb-4 border-b p-2";
  return (
    <div className="form mx-auto mb-12 sm:mb-24 w-full sm:w-[800px] text-black">
      <input
        type="text"
        className={BASE_INPUT_STYLES}
        placeholder="Enter name"
        required
      />
      <input
        type="email"
        className={BASE_INPUT_STYLES}
        placeholder="Enter email"
        required
      />
      <input
        type="number"
        className={BASE_INPUT_STYLES}
        placeholder="Enter number"
        required
      />
      <textarea
        className={BASE_INPUT_STYLES}
        placeholder="Message"
        id="message"
        rows={8}
        required
      ></textarea>

      <div className="text-right">
        <button type="button" className="text-primary border-b">
          Send Enquiry
        </button>
      </div>
    </div>
  );
}

export const Contact = () => (
  <PageTemplate content={{ title: "Get In Touch" }} image={contactHero}>
    <Section title="Send me a message" sideContent={<Form/>}>
      <p className="text-3xl">
        Whether you wish to discuss new ideas or have a project for me, simply
        fill this form and I'll get back to you soon.
      </p>
    </Section>
  </PageTemplate>
);
