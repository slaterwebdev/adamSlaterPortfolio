import { FaChevronCircleRight } from "react-icons/fa";

type ListItem = {
  title: string;
  description?: string;
  data?: {
    name: string;
    value: string;
  }[];
  icon?: React.ReactNode;
};

export const ListItem = ({
  title,
  description,
  data = [],
  icon = <FaChevronCircleRight />,
}: ListItem) => {
  return (
    <li className="flex justify-between gap-5 sm:gap-6 border-b py-8">
      {data.length > 0 && (
        <div className="min-w-24 sm:min-w-36 sm:text-right">
          {data.map(({ name, value }) => (
            <div
              key={value}
              className="text-slate-500 flex items-center justify-between sm:gap-2"
            >
              <div className="text-center sm:text-left">
                <p>{value}</p>
                <p>{name}</p>
              </div>
              <span className="min-w-4 text-black">{icon}</span>
            </div>
          ))}
        </div>
      )}
      
      <div className="flex flex-col gap-5">
        <h2 className="text-primary">{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </li>
  );
};