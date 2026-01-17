import React from "react";
import { useNavigate } from "react-router-dom";
import { List, Grid3X3, LayoutGrid } from "lucide-react";
import CategoryGrid from "../components/ui/CategoryGrid";
import ProductCard from "../components/ui/ProductCard";
import { categories, materialsData } from "../data/mockData";

const MaterialsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1170px] w-[90%] mx-auto px-4 py-6">
      <CategoryGrid categories={categories} />

      <div className="flex justify-between items-center mb-6">
        <div className="flex flex-col gap-8">
          <h2 className="text-xl font-bold text-[#1F2945] uppercase border-b-2 border-[#1F2945] pb-1">
            Ko'p ko'rilganlar
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => navigate("/list")}
              className="p-2 cursor-pointer rounded text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
            >
              <List />
            </button>
            <button className="p-2 cursor-pointer hover:bg-blue-200 hover:text-blue-700 transition-colors rounded bg-blue-100 text-blue-600">
              <Grid3X3 />
            </button>
            <button
              onClick={() => navigate("/machines")}
              className="p-2 cursor-pointer  rounded text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
            >
              <LayoutGrid />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {materialsData.map((item, idx) => (
          <ProductCard key={idx} item={item} />
        ))}
      </div>
      <h1 className="underline [text-decoration-skip-ink:none] text-center mt-5 font-normal text-base text-[#28366d]">
        Barcha mahsulotlarni ko’rish
      </h1>
    </div>
  );
};

export default MaterialsPage;
