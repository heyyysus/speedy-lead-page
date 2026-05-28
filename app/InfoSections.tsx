import { Star } from "./layout";


export const InfoSection1 = () => {
    return(
        <div className="mt-10 py-20 w-screen bg-white flex flex-col items-center justify-items-center place-content-center">
            <h1 className="text-nowrap mb-10 text-xl md:text-3xl font-bold">Why Drivers Choose Speedy Insurance</h1>
            <div className="flex flex-col items-center justify-center max-w-96 md:max-w-128 text-center">
                    <h2 className="flex flex-row items-center text-lg">
                        <span className="text-yellow-500 mr-2"><Star /></span> 5-Star Rated Local Agency
                    </h2>
                    <p className="text-slate-700 mb-5">
                        Our reviews do not lie. Thousands of customers count on our agents to deliver 
                        industry-leading customer service.
                    </p>

                    <h2 className="flex flex-row items-center text-lg">
                        Specialists in Insuring High-Risk Drivers
                    </h2>
                    <p className="text-slate-700 mb-5">
                        Do not let an accident or a speeding ticket prevent you from
                        saving on your insurance premium. Our agents know how to properly place your risk so that you
                        can get the best rate. 
                    </p>

                    <h2 className="flex flex-row items-center text-lg">
                        Instant Insurance Options
                    </h2>
                    <p className="text-slate-700 mb-5">
                        Say goodbye to waiting periods. All of our auto/renters/motorcycle policies have the option for same-day coverage.
                    </p>

                    <h2 className="flex flex-row items-center text-lg">
                        10+ Years Serving Riverside County
                    </h2>
                    <p className="text-slate-700 mb-5">
                        Speedy Insurance has been serving Riverside residents since 2016. We understand our clients and we continue to offer 
                        the best rates and the best service to the local community. 
                    </p>
            </div>
        </div>
    );
}

export const InfoSection2 = () => {
    return(
        <div className="mt-10 py-20 w-screen bg-white flex flex-col items-center justify-items-center place-content-center">
            <h1 className="text-nowrap mb-2 text-xl md:text-3xl font-bold">Protect Everything That Matters</h1>
            <h2 className="mb-10 max-w-96 md:max-w-128 text-center">
                We don't just insure cars. We protect you in all areas of life and business
            </h2>
            <div className="flex flex-col items-center justify-center max-w-96 md:max-w-128 text-center">
                    <h2 className="flex flex-row items-center text-lg mb-5">
                        Auto Insurance
                    </h2>
                    <h2 className="flex flex-row items-center text-lg mb-5">
                        Homeowners Insurance
                    </h2>
                    <h2 className="flex flex-row items-center text-lg mb-5">
                        Renters Insurance
                    </h2>
                    <h2 className="flex flex-row items-center text-lg">
                        Business &amp; Commercial Insurance
                    </h2>
            </div>
        </div>
    );
}