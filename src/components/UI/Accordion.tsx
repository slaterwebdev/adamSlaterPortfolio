import { iconMapper } from "@/utils/iconMapper";
import { FaChevronLeft } from "react-icons/fa";
import { ListItem } from "./ListItem";
import { useState } from "react";

type AccordionProps = {
  items: {
    title: string;
    type: "list" | "icons";
    content?: Array<string>;
  }[];
};

export const Accordion = ({ items }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="mb-12 w-full">
      {items.map(({ title, content, type }, index) => (
        <div key={index} className="shadow">
          <button
            onClick={() => toggleAccordion(index)}
            className="flex items-center justify-between font-bold w-full p-6 bg-gray-800 text-white cursor-pointer"
          >
            <span>{title}</span>
            <FaChevronLeft
              className={`transform transition-transform duration-500 ${
                openIndex === index && "-rotate-90"
              }`}
            />
          </button>
          <div
            className={`overflow-hidden bg-white border-b ${
              openIndex === index ? "max-h-fit" : "max-h-0"
            }`}
          >
            <div className="p-4 flex flex-wrap items-center justify-center gap-5">
              {type === "list" ? (
                <ul className="w-full">
                  {content?.map((item) => (
                    <ListItem key={item} title={item} />
                  ))}
                </ul>
              ) : (
                content?.map((iconKey, i) => (
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
};
