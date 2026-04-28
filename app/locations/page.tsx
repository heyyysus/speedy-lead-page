import Image from "next/image";

export interface LocationComponentProps { 
    name: string, 
    addr1: string, 
    addr2: string, 
    maps_href?: string,
    tel: string,
    tel_href?: string,
    hoursWeekdays: string, 
    hoursSat: string,
    img?: string,
};

export const LocationComponent = ({
    name, addr1, addr2, tel, hoursWeekdays, hoursSat, maps_href, tel_href
}: LocationComponentProps) => {
    return (
        <div className="leading-6 items-center justify-items-center text-gray-600">
            <h2 className="text-xl font-semibold mb-2">{name}</h2>
            <a className="flex flex-col items-center justify-items-center" href={maps_href} target="_blank">
                <p>{addr1}</p>
                <p>{addr2}</p>
            </a>
            <p className="mt-2 mb-2">Call us at <a href={`tel:${tel_href}`}><b>{tel}</b></a></p>
            <p><b>Monday - Friday: </b>{hoursWeekdays}</p>
            <p><b>Saturday: </b>{hoursSat}</p>
            <p><b>Sunday: </b>CLOSED</p>
            
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
            tel_href: "+19514720927",
            hoursWeekdays: "9 AM - 7 PM",
            hoursSat: "10 AM - 5 PM",
            img: "/locations/moreno_valley.jpg",
            maps_href: "https://maps.app.goo.gl/b29g2G2kzMcULGC78"
        },
        {
            name: "Riverside - 1",
            addr1: "2995 Van Buren Blvd, STE A7",
            addr2: "Riverside, CA 92503",
            tel: "(951) 695-1500",
            tel_href: "+19516951500",
            hoursWeekdays: "9 AM - 7 PM",
            hoursSat: "10 AM - 5 PM",
            img: "/locations/riverside_1.jpg",
            maps_href: "https://maps.app.goo.gl/th4Adxyk2aagBgMb8"
        },
        {
            name: "Riverside - 2",
            addr1: "7010 Magnolia Ave",
            addr2: "Riverside, CA 92506",
            tel: "(951) 977-9400", 
            tel_href: "+19519779400", 
            hoursWeekdays: "9 AM - 7 PM",
            hoursSat: "10 AM - 5 PM",
            img: "/locations/riverside_2.jpg",
            maps_href: "https://maps.app.goo.gl/PxmN7H8YBMMqMYLC7"
        },
        {
            name: "Lake Elsinore",
            addr1: "32285 Mission Trail P5",
            addr2: "Lake Elsinore, CA 92530",
            tel: "(951) 579-4095",
            tel_href: "+19515794095",
            hoursWeekdays: "9:30 AM - 6:30 PM",
            hoursSat: "CLOSED",
            img: "/locations/lake_elsinore.jpg",
            maps_href: "https://maps.app.goo.gl/Cw4fqfAcoTyPL9eF8"
        },
    ];

    return (
    <div className="flex flex-col items-center justify-items-center min-h-120 mx-auto py-8 px-12 w-full md:max-w-5/6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl text-slate-700 font-semibold mb-10">Locations</h1>
        <div className="w-full flex flex-col gap-8">
            {LOCATIONS_LIST.map((loc, idx) => (
            <span key={idx}><div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {/* Left — Location component */}
                <LocationComponent {...loc} />

                {/* Right — Image placeholder */}
                <div className="flex items-center justify-items-center place-content-center w-full h-48">
                    { loc.img && <Image className="rounded-lg" src={loc.img} width={256} height={256} alt={loc.name} /> }
                    { !loc.img && <div className="w-max-128 w-128 h-48 bg-gray-200 rounded-lg" />}
                </div>
                
            </div>{idx < LOCATIONS_LIST.length - 1 && <div className="border-t border-gray-100 mt-5" />}</span>
        ))}
        </div>
    </div>
    );
};