import React from "react";
import { COLORS } from "../constants"; // Import color variables

const RegistrationForm = () => {
  return (
    <form className="">

        <div className="grid md:grid-cols-2 md:gap-6">
        {[
          { name: "first_name", label: "First name" },
          { name: "last_name", label: "Last name" },
        ].map(({ name, label }) => (
          <div className="relative z-0 w-full mb-5 group" key={name}>
            <input
              type="text"
              name={name}
              id={name}
              className={`block py-2.5 px-0 w-full text-sm ${COLORS.textPrimary} ${COLORS.bgPrimary} border-0 border-b-2 ${COLORS.borderPrimary} appearance-none ${COLORS.borderFocus} focus:outline-none focus:ring-0 peer`}
              placeholder=" "
              required
            />
            <label
              htmlFor={name}
              className={`peer-focus:font-medium absolute text-sm ${COLORS.textSecondary} duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-gray-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
            >
              {label}
            </label>
          </div>
        ))}
      </div>
      {[
        { name: "aiesec_email", type: "email", label: "AIESEC Email" },
        { name: "personal_email", type: "email", label: "Personal Email" },
        { name: "contact_number", type: "number", label: "Contact Number" },
        { name: "ppt_link", type: "text", label: "PPT Link" },
        { name: "phptp_link", type: "text", label: "Photo Link" },
      ].map(({ name, type, label }) => (
        <div className="relative z-0 w-full mb-5 group" key={name}>
          <input
            type={type}
            name={name}
            id={name}
            className={`block py-2.5 px-0 w-full text-sm ${COLORS.textPrimary} ${COLORS.bgPrimary} border-0 border-b-2 ${COLORS.borderPrimary} appearance-none ${COLORS.borderFocus} focus:outline-none focus:ring-0 peer`}
            placeholder=" "
            required
          />
          <label
            htmlFor={name}
            className={`peer-focus:font-medium absolute text-sm ${COLORS.textSecondary} duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:${COLORS.textPrimary} peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
          >
            {label}
          </label>
        </div>
      ))}

      
      
      <button
        type="reset"
        className={`font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mr-5 bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white`}
      >
        Reset
      </button>
      <button
        type="submit"
        className={`font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ${COLORS.buttonPrimary} ${COLORS.buttonFocus}`}
      >
        Submit
      </button>
    </form>
  );
};

export default RegistrationForm;
