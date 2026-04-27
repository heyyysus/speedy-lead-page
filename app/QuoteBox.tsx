'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";

type Option = {
  id: string;
  label: string;
};

const options: Option[] = [
  { id: "auto", label: "Car Insurance" },
  { id: "towing", label: "Towing Company Insurance" },
  { id: "business", label: "Business Insurance" },
  { id: "home", label: "Home Owner's Insurance" },
  { id: "renters", label: "Renter's Insurance" },
  { id: "motorcycle", label: "Motorcycle Insurance" },
];

export interface QuoteBoxProps {

};

export default function QuoteSelector({  }: QuoteBoxProps) {
  const [selected, setSelected] = useState<string>("auto");
  const router = useRouter();

  return (
    <div className="w-full md:max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
          SAVE up to <span className="text-red-500">35%</span>
        </h1>
        <p className="mt-3 text-md md:text-lg text-slate-700">
          Get Your Quote Online
        </p>
        <p className="md:text-sm text-slate-500 mt-1">
          or by calling <a href="tel:+18665773339" className="font-semibold">866-577-3339</a>
        </p>
      </div>

      {/* Options */}
      <div className="text-md grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {options.map((option) => {
          const isActive = selected === option.id;

          return (
            <button
              key={option.id}
              onClick={() => setSelected(option.id)}
              className={`relative flex items-center justify-center text-center p-4 md:p-6 rounded-xl border transition cursor-pointer
                ${
                  isActive
                    ? "bg-slate-800 text-white border-slate-800"
                    : "bg-white text-slate-800 border-slate-200 hover:border-slate-400"
                }
              `}
            >
              <span className="font-semibold">{option.label}</span>

              {/* Selected indicator */}
              {isActive && (
                <span className="absolute bottom-3 right-3 w-4 h-4 rounded-full bg-green-500" />
              )}
            </button>
          );
        })}
      </div>

      {/* CTA Button */}
      <button
        className="w-full bg-red-600 hover:bg-red-700 text-white text-lg font-bold py-4 rounded-lg transition cursor-pointer"
        onClick={() => {
            router.push(`/${selected}`);
        }}
      >
        Get A Quote Now!
      </button>
    </div>
  );
}
