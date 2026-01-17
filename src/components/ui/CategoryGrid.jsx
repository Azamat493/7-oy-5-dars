import React from "react";

const CategoryGrid = ({ categories }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-10">
      {categories.map((cat, idx) => (
        <div
          key={idx}
          className="bg-white p-3 md:p-4 rounded-lg shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center gap-2 sm:gap-3 cursor-pointer hover:shadow-md transition-all text-center sm:text-left"
        >
          <div className="bg-gray-50 p-2 rounded flex items-center justify-center">
            {typeof cat.icon === "string" && cat.icon.includes(".") ? (
              <img
                src={cat.icon}
                alt={cat.name}
                className="w-8 h-8 md:w-10 md:h-10 object-contain"
              />
            ) : (
              <span className="text-2xl md:text-3xl">{cat.icon}</span>
            )}
          </div>

          <span className="text-xs md:text-sm font-medium text-gray-700 leading-tight">
            {cat.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CategoryGrid;
