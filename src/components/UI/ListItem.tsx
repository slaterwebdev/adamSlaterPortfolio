import React from "react";
import { FaChevronCircleRight } from "react-icons/fa";

type ListItemProps = {
  title: string;
  description: string;
  metadata?: {
    name: string;
    value: string;
  }[];
  icon?: React.ReactNode;
}

export const ListItem = ({
  title,
  description,
  metadata = [],
  icon = <FaChevronCircleRight />,
}: ListItemProps) => {
  return (
    <li className={`flex justify-between gap-5 sm:gap-6 border-b py-8`}>
      {metadata.length !== 0 ? (
        <div className="min-w-24 sm:min-w-36 sm:text-right">
          {metadata.map(({ name, value }) => (
            <div
              key={value}
              className="text-slate-500 flex items-center justify-between sm:gap-2"
            >
              <div>
                <p>{value}</p>
                <p>{name}</p>
              </div>
              <span className="min-w-4">{icon}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="min-w-4 flex items-center">{icon}</div>
      )}
      <div className="flex flex-col gap-5">
        <h2 className="text-primary">{title}</h2>
        <p>{description}</p>
      </div>
    </li>
  );
};