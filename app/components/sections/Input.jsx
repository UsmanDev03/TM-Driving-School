import { User, Smartphone, MapPin, Clock } from "lucide-react";
import React from "react";

const Input = ({ type, placeholder, icon: Icon, options, name, value, onChange }) => {
  return (
    <div className="relative group">
      {Icon && typeof Icon === 'function' && (
        <Icon
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#ff6600] transition-colors z-10"
          size={18}
        />
      )}
      
      {type === "select" ? (
        <select 
          name={name}
          value={value || ""} 
          onChange={onChange}
          className="w-full pl-12 pr-10 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-[#ff6600] focus:bg-white outline-none transition-all font-bold text-gray-700 text-sm shadow-inner appearance-none cursor-pointer"
        >
          <option value="" disabled>{placeholder}</option>
          {options?.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          name={name}
          value={value || ""} 
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-[#ff6600] focus:bg-white outline-none transition-all font-bold text-gray-700 text-sm shadow-inner"
        />
      )}
    </div>
  );
};

export default Input;