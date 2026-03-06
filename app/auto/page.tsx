'use client'
import { useState } from "react";
import AutoSlide1 from "./AutoSlide1";
import AutoSlide2 from "./AutoSlide2";
import Image from "next/image";
import Reviews from "../../data/reviews.json"

export const Star = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
    );
}

export interface ReviewBoxProps {
    title: string,
    content: string,
    name: string
};

export const ReviewBox = ({ title, content, name }: ReviewBoxProps) => {
    return(
        <div className="mx-10 min-w-[400px] rounded-md border-black border-solid border-2 p-4 flex flex-col align-center">
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row text-yellow-500">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
            </div>
            <Image  src="/google_icon.png" alt="Google Review" width={50} height={50} />
            </div>
            
            <h1 className="text-xl font-bold my-2">{title}</h1>
            <p className="text-slate-500 w-[400px]">{content}</p>
            <div className="flex flex-row items-center text-md font-semibold mt-2">
                - {name}
            </div>
        </div>
    );
}

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
            <div className="min-h-screen w-screen pb-5">{slides[step]}</div>
            <div className="h-[600px] w-screen bg-white flex items-center justify-center">
                {Reviews.reviews.map((r, i) => <ReviewBox key={i} title={r.title} content={r.content} name={r.name} />)}
            </div>
        </div>
    );
}


<div className="h-screen w-screen bg-white">
    <div></div>
</div>