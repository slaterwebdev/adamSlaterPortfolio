import { FaChevronLeft } from "react-icons/fa";
import { iconMapper } from "@/application/utils/iconMapper";

type SkillsProps = {
  skills: Array<{
    title: string;
    icons?: Array<string>;
    text?: string;
  }>;
};

export const Accordion = ({ skills }: SkillsProps) => (
  <div className="accordion-group accordion-group-hover mb-12 rounded-xl w-full sm:w-3/4">
    {skills.map(({ title, text, icons }, i) => (
      <div className="accordion shadow" key={i}>
        <input
          type="checkbox"
          id={`accordion-${i}`}
          className="accordion-toggle"
        />
        <label
          htmlFor={`accordion-${i}`}
          className="accordion-title bg-gray-800"
        >
          {title}
        </label>
        <i className="accordion-icon">
          <FaChevronLeft />
        </i>
        <div className="accordion-content">
          <div className="min-h-0 flex items-center justify-center gap-5">
            {text ||
              icons?.map((iconKey, i) => (
                <span key={i} className="text-3xl float">
                  {iconMapper[iconKey]}
                </span>
              ))}
          </div>
        </div>
      </div>
    ))}
  </div>
);
