import { iconMapper } from "@/utils/iconMapper";
import { FaChevronLeft } from "react-icons/fa";

type AccordionProps = {
  items: {
    title: string;
    text?: string;
    icons?: string[];
  }[];
};

export const Accordion: React.FC<AccordionProps> = ({ items }) => (
  <div className="accordion-group accordion-group-hover mb-12 rounded-xl w-full sm:w-3/4">
    {items.map(({ title, text, icons }, index) => (
      <div className="accordion shadow" key={index}>
        <input
          type="checkbox"
          id={`accordion-${index}`}
          className="accordion-toggle"
        />
        <label
          htmlFor={`accordion-${index}`}
          className="accordion-title bg-gray-800"
        >
          <div className="flex items-center justify-between">
            <span>{title}</span>
            <FaChevronLeft className="accordion-icon" />
          </div>
        </label>
        <div className="accordion-content">
          <div className="min-h-0 flex items-center justify-center gap-5">
            {text ? (
              <p>{text}</p>
            ) : (
              icons?.map((iconKey, i) => (
                <span key={i} className="text-3xl float">
                  {iconMapper[iconKey]}
                </span>
              ))
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
);
