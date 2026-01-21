// Input.jsx
import React from 'react';

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
        <select className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-[#ff6600] focus:bg-white outline-none transition-all font-bold text-gray-700 text-sm shadow-inner appearance-none cursor-pointer">
          <option value="">{placeholder}</option>
          {options?.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-[#ff6600] focus:bg-white outline-none transition-all font-bold text-gray-700 text-sm shadow-inner"
        />
      )}
    </div>
  );
};

export default Input; // Ye line lazmi honi chahiye