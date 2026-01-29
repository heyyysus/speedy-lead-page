'use client'
import { useState } from "react";
import { isDate } from "util/types";



export interface QuoteBoxProps {
    handleSubmit?: (fname: string, lname: string, zip: string, dob: string, phone: string, optedIn: boolean) => void;
};


export interface FormInputProps {
  label: string;
  type?: "text" | "date" | "email" | "tel";
  onChange?: (val: string) => void;
  onBlur?: () => void;
  value: string;
  pattern?: string;
  placeholder?: string;
  required?: boolean;
}; 



export const FormInput = ({ label, type, pattern, placeholder, onChange, onBlur, value, required }: FormInputProps) => {
  return (
    <div className="flex w-full items-center text-black flex-col mb-[15px]">
        <div className="w-1/2 flex flex-col">
          <label htmlFor="fname" className="mb-[5px] font-medium text-lg">{label} {required && 
            <span className="text-sm text-red-500">*</span>}</label>
          <input
            id="fname"
            type={ type || "text" }
            className="text-lg p-[12px] text-black placeholder:text-grey outline-2 focus:outline-3 outline-black rounded-md focus:outline-indigo-950"
            pattern={pattern}
            placeholder={placeholder}
            onBlur={onBlur}
            onChange={(e) => {onChange && onChange(e.target.value)}}
            value={value}
            required={required}
          />
        </div>
      </div>
  );
      
}

export const FormZipInput = ({ label, onChange, value, required }: FormInputProps) => {
  return (
    <div className="flex w-full items-center text-black flex-col mb-[15px]">
        <div className="w-1/2 flex flex-col">
          <label htmlFor="fname" className="mb-[5px] font-medium text-lg">{label} 
            {required && 
            <span className="text-md text-red-500">*</span>}
          </label>
          <input
            id="fname"
            type={ "text" }
            className="text-lg p-[12px] text-black placeholder:text-black outline-2 focus:outline-3 outline-black rounded-md focus:outline-indigo-950"
            inputMode="numeric"
            pattern="[0-9]*"
            autoComplete="postal-code"
            maxLength={5} 
            value={value}
            required
            onChange={(e) => { onChange && onChange(e.target.value || ""); return false; }}
          />
        </div>
      </div>
  );
      
}

export default function AutoSlide1({ handleSubmit }: QuoteBoxProps) {
  const [ fname, setfname ] = useState<string>("");
  const [ lname, setlname ] = useState<string>("");
  const [ zip, setzip ] = useState<string>("");
  const [ dob, setdob ] = useState<string>("");
  const [ phone, setphone ] = useState<string>("");
  const [ status, setstatus ] = useState<string>("");

  const [optedIn, setOptedIn] = useState<boolean>(false);

  const verifyInputs = () => {
    if (fname.length < 1) {setstatus("Please Enter First Name"); return false;}
    if (lname.length < 1) {setstatus("Please Enter Last Name"); return false;}
    if (zip.length < 5) {setstatus("Please Enter Zip Code"); return false;}
    if (isNaN((new Date(dob)).getTime())) {setstatus("Please Enter a Valid Date of Birth"); return false;}
    if (phone.length < 14) {setstatus("Please Enter a Valid Phone Number"); return false;}
    return true;
  }

  const handleZipChange = (val: string) => {
    if(!isNaN(Number(val)))
      setzip(val);
  }

  const handlePhoneChange = (val: string) => {
    if(!isNaN(Number(val.replaceAll(/[-()\s]/g, "")))){
      const digits = val.replaceAll(/[-()\s]/g, "").substring(0,10);
      
      const len = digits.length;

      if (len === 0) setphone(digits);
      else if (len < 4) setphone(`(${digits}`);
      else if (len < 7) setphone(`(${digits.slice(0, 3)}) ${digits.slice(3)}`);
      else setphone(`(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`);
    }
  }

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

      <form
        onSubmit={(e) => {
          e.preventDefault(); // prevents page reload
          if (verifyInputs()){ handleSubmit && handleSubmit(
            fname, lname, zip, dob, phone, optedIn
          )}
        }}
      >

      <FormInput label="First Name" value={fname} onChange={setfname} required />
      <FormInput label="Last Name" value={lname} onChange={setlname} required />
      <FormZipInput label="Zip Code" value={zip} onChange={handleZipChange} required />
      <FormInput label="Date of Birth" type="date" value={dob} onChange={(v) => {console.log(v);setdob(v)}} required />
      <FormInput 
        label="Phone Number" 
        type="tel" 
        value={phone} 
        onChange={handlePhoneChange} 
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
        placeholder="(999) 999-9999"
        required
      />

      <div className="flex place-content-center w-1/2 mx-auto cursor-pointer mt-[40px]" onClick={() => setOptedIn(!optedIn)}>
        <input type="checkbox" className="size-[50px] mr-[15px] cursor-pointer" checked={optedIn} onChange={() => {}} />
        <label className="cursor-pointer select-none" >
          I agree to receive text messages from an insurance agent at this number. Msg & data rates may apply. Reply STOP to opt out.
        </label>
      </div>

      <span className="flex place-content-center text-red-500">{status}</span>
      
      <button
        className="w-full bg-red-600 hover:bg-red-700 text-white text-lg font-bold py-4 rounded-lg transition cursor-pointer mt-[40px]"
        onClick={() => { if (verifyInputs()){ handleSubmit && handleSubmit(
          fname, lname, zip, dob, phone, optedIn
        )}}}
      >
        Next
      </button>
      </form>
    </div>
  );
}
