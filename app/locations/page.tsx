
export interface LocationComponentProps { 
    name: string, 
    addr1: string, 
    addr2: string, 
    tel: string, 
    hoursWeekdays: string, 
    hoursSat: string 
};

export const LocationComponent = ({
    name, addr1, addr2, tel, hoursWeekdays, hoursSat
}: LocationComponentProps) => {
    return (
        <div className="leading-6 items-center justify-items-center text-gray-600">
            <h2 className="text-xl font-semibold mb-2">{name}</h2>
            <p>{addr1}</p>
            <p>{addr2}</p>
            <p className="mt-2 mb-2">Call us at <b>{tel}</b></p>
            <p><b>Monday - Friday: </b>{hoursWeekdays}</p>
            <p><b>Saturday: </b>{hoursSat}</p>
            
        </div>
    );
}

export default function LocationsPage(){

    const LOCATIONS_LIST: LocationComponentProps[]  = [
        {
            name: "Moreno Valley",
            addr1: "12625 Frederick St i-1",
            addr2: "Moreno Valley, CA 92553",
            tel: "(951) 472-0927",
            hoursWeekdays: "9 AM - 7 PM",
            hoursSat: "10 AM - 5 PM",
        },
        {
            name: "Riverside - 1",
            addr1: "2995 Van Buren Blvd, STE A7",
            addr2: "Riverside, CA 92503",
            tel: "(951) 695-1500",
            hoursWeekdays: "9 AM - 7 PM",
            hoursSat: "10 AM - 5 PM",
        },
        {
            name: "Riverside - 2",
            addr1: "7010 Magnolia Ave",
            addr2: "Riverside, CA 92506",
            tel: "(951) 977-9400",
            hoursWeekdays: "9 AM - 7 PM",
            hoursSat: "10 AM - 5 PM",
        },
        {
            name: "Lake Elsinore",
            addr1: "32285 Mission Trail P5",
            addr2: "Lake Elsinore, CA 92530",
            tel: "(951) 579-4095",
            hoursWeekdays: "9:30 AM - 6:30 PM",
            hoursSat: "CLOSED",
        },
    ];

    return (
    <div className="flex flex-col items-center justify-items-center min-h-120 mx-auto py-8 px-12 w-full md:max-w-5/6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl text-slate-700 font-semibold mb-10">Locations</h1>
        <div className="w-full flex flex-col gap-8">
            {LOCATIONS_LIST.map((loc, idx) => (
            <><div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {/* Left — Location component */}
                <LocationComponent {...loc} />

                {/* Right — Image placeholder */}
                <div className="w-full h-48 bg-gray-200 rounded-lg" />
                
            </div>{idx < LOCATIONS_LIST.length - 1 && <div className="border-t border-gray-100 my-1" />}</>
        ))}
        </div>
    </div>
    );
};