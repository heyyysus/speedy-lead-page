'use client'
import { useState } from "react";
import CarModels from "../../data/car-models.json";


export interface QuoteBoxProps {
    handleSubmit?: (year: string, make: string, model: string) => void;
};



export interface FormDropdownMenuProps {
  label: string;
  onChange?: (val: string) => void;
  values: string[];
  value: string;
}; 

const arrayRange = (start: number, stop: number, step = 1) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, index) => start + index * step);

export const FormDropdownMenu = ({ label, values, onChange }: FormDropdownMenuProps) => {
    return(
    <div className="flex w-full items-center text-black flex-col mb-[15px] ">
        <div className="w-1/2 flex flex-col">
          <label htmlFor="fname" className="mb-[5px] font-medium text-lg">{label}: </label>
            <select name="year" id="year" className="text-lg p-[15px] outline-1 focus:outline-3 outline-black rounded-md focus:outline-indigo-950" 
                onChange={(e) => {onChange && onChange(e.target.value)}}>
                {values.map((y) => <option key={y} value={`${y}`}>{y}</option>)}
            </select>
        </div>
    </div>
    );
}



export default function AutoSlide2({ handleSubmit }: QuoteBoxProps) {
  const [ fname, setfname ] = useState<string>("");
  const [ lname, setlname ] = useState<string>("");
  const [ zip, setzip ] = useState<string>("");
  const [ dob, setdob ] = useState<string>("");

  const [ year, setYear ] = useState<string>("");
  const [ make, setMake ] = useState<string>("");
  const [ model, setModel ] = useState<string>("");
  

  const year_values = [...arrayRange(1981, 2027).reverse().map((y) => y.toString()), "Pre-1981"];
  const make_values = CarModels.map(m => m.brand);
  const model_values = CarModels.find((e) => e.brand == make)?.models;

  const [status, setStatus] = useState<string>("");

  const Validate = () => {
    if (year === "") {setStatus("Please select vehicle year"); return false;}; 
    if (make === "") {setStatus("Please select vehicle make"); return false;}; 
    if (model === "") {setStatus("Please select vehicle model"); return false;}; 
    return true;
  };
  
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-slate-800">
          SAVE up to <span className="text-red-500">35%</span>
        </h1>
        <p className="mt-3 text-lg text-slate-700">
          Get Your Quote Online
        </p>
        <p className="text-sm text-slate-500 mt-1">
          or by calling <a href="tel:+18665773339" className="font-semibold">866-577-3339</a>
        </p>
      </div>

      <form onSubmit={(e) => {
          e.preventDefault(); // prevents page reload
          if(Validate()) { handleSubmit && handleSubmit(year, make, model)}
        }}>

        <FormDropdownMenu label="Year" value={year} values={["", ...year_values]} onChange={(v) => {setYear(v); console.log(v)}} />
        <FormDropdownMenu label="Make" value={make} values={["", ...make_values]} onChange={(v) => {setMake(v); console.log(v)}} />
        <FormDropdownMenu label="Model" value={model} values={["", ...model_values || []]} onChange={(v) => {setModel(v); console.log(v)}} />
      
      <button
        className="w-full bg-red-600 hover:bg-red-700 text-white text-lg font-bold py-4 rounded-lg transition cursor-pointer mt-[40px]"
        onClick={() => {if(Validate()) { handleSubmit && handleSubmit(year, make, model)}}}
      >
        Next
      </button>
      </form>
    </div>
  );
}
