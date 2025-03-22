'use client';

import { useState } from "react";

type CustomSelectProps = {
  select_value_names: string[];
  select_value_values: string[];
  name: string;
  placeholder: string;
};

const CustomSelect: React.FC<CustomSelectProps> = ({ select_value_names, select_value_values, name, placeholder }) => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full mb-5">
      <input
        type="text"
        name={name}
        id={name}
        className="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer hover:cursor-pointer"
        placeholder={placeholder}
        value={selectedValue}
        readOnly
        onClick={() => setIsOpen(!isOpen)}
      />

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 max-h-72 p-1 bg-white border border-gray-200 rounded-lg shadow-md overflow-y-auto">
          {select_value_names.map((name, index) => (
            <div
              key={select_value_values[index]}
              className="py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSelect(select_value_values[index])}
            >
              {name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
