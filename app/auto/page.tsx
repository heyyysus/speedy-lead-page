'use client'
import { useState } from "react";
import AutoSlide1 from "./AutoSlide1";
import AutoSlide2 from "./AutoSlide2";
import Image from "next/image";








export const FinalSlide = () => {
    return(
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-slate-800">
                    Thank you for submitting your quote
                </h1>
                <p className="mt-3 text-lg text-slate-700">
                    An agent will be in contact with you shortly.
                </p>
                <p className="text-sm text-slate-500 mt-1">
                    You may also call <a href="tel:+18665773339" className="font-semibold">866-577-3339</a>
                </p>
            </div>
        </div>
    );
}

export interface Submission {
    fname?: string,
    lname?: string,
    zip?: string,
    dob?: string,
    phone?: string,
    year?: string,
    make?: string,
    model?: string,
    optedIn?: boolean,

};

export const PostSubmission = async (submission: Submission) => {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      submission,
    }),
  });

  if (!res.ok) {
    throw new Error('Failed to submit form');
  }

  return res.json();
};

export default function AutoQuotePage(){
    const [step, changeStep] = useState<number>(0);
    const [submission, setSubmission] = useState<Submission>({});

    const slides = [<AutoSlide1 handleSubmit={(fname, lname, zip, dob, phone, optedIn) => {
        setSubmission({
            fname, lname, zip, dob, phone, optedIn
        });
        PostSubmission({fname, lname, zip, dob, phone, optedIn});
        changeStep(2);
    }}/>, <AutoSlide2 handleSubmit={(year: string, make: string, model: string) => {
        setSubmission({...submission, year, make, model});
        // console.log(submission);
        PostSubmission({...submission, year, make, model});
        changeStep(2);
    }}/>, <FinalSlide />]
    return (
        <div className="flex flex-col justify-center">
            <div className="w-screen">{slides[step]}</div>
        </div>
    );
}


<div className="h-screen w-screen bg-white">
    <div></div>
</div>