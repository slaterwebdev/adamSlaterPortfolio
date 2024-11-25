import { iconMapper } from "@/utils/iconMapper";
import { FaChevronLeft } from "react-icons/fa";
import { ListItem } from "./ListItem";
import { useState } from "react";

type AccordionProps = {
  items: {
    title: string;
    list?: string[];
    icons?: string[];
  }[];
};

export const Accordion = ({ items }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="mb-12 w-full sm:w-3/4">
      {items.map(({ title, list, icons }, index) => (
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
            className={`transition-[max-height] duration-500 ease-in-out overflow-hidden bg-white border-b ${
              openIndex === index ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            <div className="p-4 flex flex-wrap items-center justify-center gap-5">
              {list ? (
                <ul className="w-full">
                  {list.map((item) => (
                    <ListItem key={item} title={item} />
                  ))}
                </ul>
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
};
