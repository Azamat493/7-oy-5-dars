import React from "react";
import { Bookmark, Lock } from "lucide-react";

const ProductCard = ({ item, variant = "default" }) => {
  const isMinimal = variant === "minimal";

  return (
    <div className="bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-3 flex flex-col h-full relative group">
      {!isMinimal && (
        <div className="h-40 w-full mb-3 overflow-hidden rounded bg-gray-50 flex items-center justify-center">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover"
          />
        </div>
      )}

      <div className="flex flex-col flex-grow">
        <div className="flex justify-between items-start gap-5">
          <div className="inline-block bg-blue-50 text-blue-800 text-[10px] font-bold px-2 py-1 rounded w-fit mb-2">
            {item.id}
          </div>
          <button className=" text-gray-400 hover:text-blue-600 z-10">
            <Bookmark className="w-5 h-5" />
          </button>
        </div>
        <h3 className="text-xs font-medium text-gray-700 line-clamp-3 mb-4 leading-relaxed">
          {item.title}
        </h3>

        <div className="mt-auto flex gap-2">
          <button className="flex-1 cursor-pointer bg-white border border-gray-200 text-gray-700 text-sm py-2 rounded transition-colors hover:bg-[#1890ff] hover:text-white">
            Ko'rish
          </button>

          <button className="w-10 flex cursor-pointer items-center justify-center border border-gray-200 rounded text-gray-400 hover:text-gray-600">
            <Lock className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
