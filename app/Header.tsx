"use client";
import React from "react";
import Image from "next/image";


export const Arrow = ({ pointUp }: { pointUp: boolean }) => {
    return !pointUp ? (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
    ) : (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 15 12 9 18 15"></polyline>
        </svg>
    )
}



export const LocationMarker = () => {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://w3.org" className="md:mr-2">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" 
                fill="currentColor"/>
        </svg>
    );
}

export const MenuButton = ({ onClick }: { onClick?: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center gap-[5px] w-13 h-13 rounded-lg bg-white hover:bg-gray-200 active:scale-95 transition-all duration-150"
    >
      <span className="block w-5 h-[2px] bg-slate-700 rounded-full" />
      <span className="block w-5 h-[2px] bg-slate-700 rounded-full" />
      <span className="block w-5 h-[2px] bg-slate-700 rounded-full" />
    </button>
  );
};



export const Header = () => {

    const [ dropdown, setDropdown ] = React.useState(false);
    const [ showMobileDropdown, setMobileDropdown ] = React.useState(false);

    return (
        <div className="flex flex-col relative">
            {/** Main Header */}
            <div className="h-17 text-sm font-[550] bg-white w-full text-slate-700 flex flex-row items-center px-8 md:px-10 md:mb-5 relative">
                <div className="hidden md:block">
                    <a href="tel:+19516951500"><Image  src="/speedy_logo.png" alt="Google Review" width={150} height={75} /></a>
                </div>
                <div className="block md:hidden">
                    <MenuButton onClick={() => setMobileDropdown(prev => !prev)} />
                </div>
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2  flex-row">
                <div className="relative" onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
    
                    {/* Trigger */}
                    <button className="flex flex-row items-center">
                        <span className="mr-[2px]">Insurance</span>
                        <Arrow pointUp={dropdown} />
                    </button>

                    {/* Dropdown */}
                    {dropdown && (
                        <div className="text-nowrap absolute top-full left-0 pt-1 bg-white border border-gray-200 rounded shadow-lg z-50">
                        <a href="/auto" className="block px-4 py-2 hover:bg-gray-100">Auto Insurance</a>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Motorcycle Insurance</a>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Home Insurance</a>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Renters Insurance</a>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Commercial Insurance</a>
                        </div>
                    )}

                </div>
                <a href="#" className="flex flex-row items-center ml-5"><span className="mr-[2px]">DMV Services</span></a>
                <a href="#" className="flex flex-row items-center ml-5"><span className="mr-[2px]">About Us</span></a>
                <a href="#" className="flex flex-row items-center ml-5"><span className="mr-[2px]">Contract Us</span></a>
                
                </div>
                <div className="block md:hidden absolute left-1/2 -translate-x-1/2">
                    <span><Image  src="/speedy_logo.png" alt="Google Review" width={125} height={75} /></span>
                </div>
                <a href="/locations" className="flex flex-row text-white ml-auto py-3 pr-4 md:pr-6 pl-4 bg-slate-800 rounded-md">
                    <LocationMarker /><span className="hidden md:block">Locations</span>
                </a>
            </div>
            { /** Mobile Dropdown Menu */ }
            {showMobileDropdown && (
            <>
                    {/* Dark overlay — covers everything to the right of the menu */}
                    <div
                        className="md:hidden fixed inset-0 top-17 bg-black/40 z-40"
                        onClick={() => setMobileDropdown(false)}
                    />

                    {/* Menu — absolutely positioned so it floats over content */}
                    <div className="md:hidden rounded-b-md absolute top-full left-0 flex flex-col bg-white shadow-lg z-50 text-lg font-[550] text-slate-700 w-72">
                        <span className="px-4 pt-3 pb-1 text-sm text-slate-400 uppercase tracking-wide">Insurance</span>
                        <a href="/auto" className="block px-4 py-2 hover:bg-gray-100">Auto Insurance</a>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Motorcycle Insurance</a>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Home Insurance</a>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Renters Insurance</a>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Commercial Insurance</a>
                        <div className="border-t border-gray-100 my-1" />
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">DMV Services</a>
                        <div className="border-t border-gray-100 my-1" />
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">About Us</a>
                        <div className="border-t border-gray-100 my-1" />
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 pb-3">Contact Us</a>
                    </div>
                </>
            )}
        </div>
        
    );
}