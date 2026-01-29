// Input.jsx
import React from "react";

const Input = ({ type, placeholder, icon: Icon, options }) => {
  return (
    <div className="relative group">
      {Icon && (
        <Icon
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#ff6600] transition-colors z-10"
          size={18}
        />
      )}
      
      {type === "select" ? (
        <select className="w-full pl-12 pr-10 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-[#ff6600] focus:bg-white outline-none transition-all font-bold text-gray-700 text-sm shadow-inner appearance-none cursor-pointer">
          <option value="">{placeholder}</option>
          {options?.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-[#ff6600] focus:bg-white outline-none transition-all font-bold text-gray-700 text-sm shadow-inner"
        />
      )}
      
      {/* Dropdown arrow icon (Optional but looks professional) */}
      {type === "select" && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 group-focus-within:text-[#ff6600]">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 4l4 4 4-4"/></svg>
        </div>
      )}
    </div>
  );
};

export default Input;