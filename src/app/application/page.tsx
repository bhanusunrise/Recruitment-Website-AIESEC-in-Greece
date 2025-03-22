import Image from "next/image";
import RegistrationForm from "../components/registration_form";

export default function application(){

    return(
        <>
            <div className="text-center min-h-screen flex flex-col justify-center items-center" id="home">
                <p className="text-7xl font-semibold text-white">Application</p>
            </div>

            <div className="columns-2 text-center pb-40 pt-40 pl-10 pr-10 bg-white flex z-10" id="about">
                <div className="flex flex-col justify-center">
                    <p className="text-5xl font-semibold text-gray-800">Application Process</p>
                    <p className="text-lg text-gray-400 mt-10">
                        The application process is simple and easy. You can apply for the available positions and we will get back to you with the next steps.
                    </p>
                    <p className="text-lg text-blue-400 mt-10">
                        Fill out the form {">"} Interview {">"} Selection
                    </p>
                </div>
                <div className="column p-4">
                    <Image src="/greece_2.jpg" alt="Greece_2" width={1200} height={1200} className="rounded-3xl hover:opacity-80"/>
                </div>
            </div>    
            <div className="columns-3 pb-40 pt-40 pl-10 pr-10 bg-blue-600 flex z-10" id="about">
                
                <div className="column p-4">
                    <Image src="/greece_2.jpg" alt="Greece_2" width={500} height={500} className="rounded-3xl hover:opacity-90"/>
                </div>
                <div className="flex flex-col justify-center col-span-2 px-10">
                    <p className="text-5xl font-semibold text-gray-100 mb-10">Get Registered</p>
                    <RegistrationForm/>



                </div>
            </div>            
        </>
    )
}