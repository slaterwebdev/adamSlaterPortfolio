import { FaChevronLeft } from "react-icons/fa";
import { iconMapper } from "@assets/iconMapping";

type SkillsProps = {
  skills: Array<{
    title: string;
    icons: Array<string>;
  }>;
};

export const Accordion = ({ skills }: SkillsProps) => (
  <div className="accordion-group accordion-group-hover mb-12 rounded-xl w-100 sm:w-3/4">
    {skills.map((skill, i) => {
      return (
        <div className="accordion shadow" key={i}>
          <input
            type="checkbox"
            id={`accordion-${i}`}
            className="accordion-toggle"
          />
          <label htmlFor={`accordion-${i}`} className="accordion-title">
            {skill.title}
          </label>
          <i className="accordion-icon">
            <FaChevronLeft />
          </i>
          <div className="accordion-content">
            <div className="min-h-0 flex items-center justify-center gap-5">
              {skill.icons.map((iconKey, i) => (
                <span key={i} className="text-3xl">
                  {iconMapper[iconKey]}
                </span>
              ))}
            </div>
          </div>
        </div>
      );
    })}
  </div>
);
