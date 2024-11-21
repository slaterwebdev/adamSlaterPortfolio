import { WorkExperience } from "@/application/utils/types";
import { FaChevronCircleRight } from "react-icons/fa";

export const ExperienceItem = ({
  experience,
}: {
  experience: WorkExperience;
}) => {
  const { id, yearsServed, jobTitle, content } = experience;

  return (
    <li className="flex justify-between gap-5 sm:gap-6 border-b py-8">
      <div className="min-w-24 sm:min-w-36 sm:text-right">
        <h3>{yearsServed}</h3>
        <h6 className="text-slate-500 flex justify-center sm:justify-end items-center gap-2">
          {id}
          <FaChevronCircleRight
            className="min-w-4"
            aria-label={`Details for ${jobTitle}`}
          />
        </h6>
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-primary">{jobTitle}</h2>
        <p>{content}</p>
      </div>
    </li>
  );
};
