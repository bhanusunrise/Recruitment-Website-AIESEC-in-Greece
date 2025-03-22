import Image from "next/image";
import Button from "./components/button";
import NavBar from "./components/navbar";
import { AcademicCapIcon, CurrencyDollarIcon, FaceSmileIcon, MusicalNoteIcon, StarIcon } from "@heroicons/react/24/outline";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
    <NavBar/>
    <div className="text-center min-h-screen flex flex-col justify-center items-center" id="home">
        <p className="text-7xl font-semibold text-white">AIESEC in Greece<br/> EST Portfolio</p>
        <p className="text-lg mt-6 text-white">We are the driving force of the AIESEC in Greece.</p>
        <div className="mt-10">
          <Button text="Learn More" bgColor="bg-blue-500" hoverColor="hover:bg-blue-600" focusColor="focus:ring-blue-300" />
        </div>
    </div>

    <div className="columns-3 pl-40 pr-40 text-center pb-40">
          <div className="column bg-white/10 p-10 rounded-3xl hover:bg-gray-800/50">
            <p className="text-2xl font-semibold text-white">Learning Opportunities</p>
            <p className="text-lg text-white">Depending on your preference, there are multiple roles available.</p>
          </div>
          <div className="column bg-white/10 p-10 rounded-3xl hover:bg-gray-800/50">
            <p className="text-2xl font-semibold text-white">Leadership Space</p>
            <p className="text-lg text-white">Once you go through the AIESEC experience, you will be able to develop your leadership skills.</p>
          </div>
          <div className="column bg-white/10 p-10 rounded-3xl hover:bg-gray-800/50">
            <p className="text-2xl font-semibold text-white">Networking Opportunities</p>
            <p className="text-lg text-white">You will be able to connect with people from different cultures and backgrounds.</p>
          </div>
      </div>

      <div className="columns-2 text-center pb-40 pt-40 pl-10 pr-10 bg-white flex z-10" id="about">
        <div className="flex flex-col justify-center">
          <p className="text-5xl font-semibold text-gray-800">About ESTs</p>
          <p className="text-lg text-gray-400 mt-10">
            Entity Support Teams are the driving force of AIESEC in Greece, providing support and guidance to Local Committees and facilitating the growth of the organization. There are wide range of opportunities in ESTs at aIESEC in Greece such as Marketing, Project Management and Web Development.
          </p>
          <center>
            <Button
              text="Explore"
              bgColor="bg-blue-500"
              hoverColor="hover:bg-blue-600"
              focusColor="focus:ring-blue-300"
              className="mt-10 w-40"
            />
          </center>
        </div>
        <div className="column p-4">
          <Image src="/greece_2.jpg" alt="Greece_2" width={1200} height={1200} className="rounded-3xl hover:opacity-80"/>
        </div>
      </div>


      <div className="text-center pb-40 pt-40 pl-10 pr-10 bg-blue-100 z-10" id="explore">
        <p className="text-5xl font-semibold text-gray-800">Available Positions</p>
          <p className="text-lg text-gray-400 mt-10">
            AIESEC in Greece has a wide range of opportunities in Entity Support Teams such as Marketing, Project Management and Web Development. Explore the available positions and find the right fit for you.         
          </p>
      <div className="columns-2 flex mt-20">
        <div className="column p-4">
          <Image src="/bridge.jpg" alt="Bridge" width={500} height={500} className="rounded-3xl hover:opacity-80"/>
        </div>
        <div className="flex flex-col justify-center text-left p-20">
          
          <p className="text-xl font-bold text-gray-800">
            <AcademicCapIcon className="h-6 w-6 inline mr-2"/>
            Marketing         
          </p>
          <p className="text-lg text-gray-400 mt-5">
            Develop and implement marketing strategies to promote AIESEC in Greece and engage with stakeholders.       
          </p>
          <p className="text-xl font-bold text-gray-800 mt-10">
            <MusicalNoteIcon className="h-6 w-6 inline mr-2"/>
            Finance     
          </p>
          <p className="text-lg text-gray-400 mt-5">
            If you are passionate about numbers and finance, this is the right place for you.      
          </p>
          <p className="text-xl font-bold text-gray-800 mt-10">
            <CurrencyDollarIcon className="h-6 w-6 inline mr-2"/>
            Business Development      
          </p>
          <p className="text-lg text-gray-400 mt-5">
            Stakeholder engagement and business development are key aspects of this area.     
          </p>
        </div>    
      </div>
      <div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-10 mr-10">Download Booklet</button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-10"><a href="/application">Apply Now</a></button>
      </div>
      </div>

      <div className="text-center pb-40 pt-40 pl-10 pr-10 bg-white z-10" id="gallery">
        <p className="text-5xl font-semibold text-gray-800 text-center">Discover Australia</p>
        <p className="text-lg text-gray-400 mt-10">
          Discover Australia&apos;s beauty, opportunities, and rich multicultural heritage for travelers, investors, and international students.
        </p>

        <div className="columns-3 flex gap-4 mt-20">
          <div className="column p-4">
            <Image src="/bridge.jpg" alt="Bridge" width={500} height={500} className="rounded-3xl hover:opacity-80"/>
          </div>
          <div className="column p-4">
            <Image src="/bg.jpg" alt="Bridge" width={500} height={500} className="rounded-3xl hover:opacity-80"/>
            <Image src="/beach.jpg" alt="Bridge" width={500} height={500} className="rounded-3xl hover:opacity-80 mt-8"/>
          </div>
          <div className="column p-4">
            <Image src="/kola.jpg" alt="Bridge" width={500} height={500} className="rounded-3xl hover:opacity-80"/>
            <Image src="/bg.jpg" alt="Bridge" width={500} height={500} className="rounded-3xl hover:opacity-80 mt-8"/>
          </div>
      </div>

      </div>

      <div className="text-center pb-40 pl-10 pr-10 pt-40 z-10" id="reviews">
        <p className="text-5xl font-semibold text-white text-center">What People Say</p>
        <p className="text-lg text-white mt-10">Enhance your experience with AIESEC in Greece.</p>
<div className="grid grid-cols-3 gap-2 mt-20">
  <div className="p-4 bg-white/50 rounded-3xl hover:bg-white/80">
    <div className="flex">
      <StarIcon className="h-6 w-6 fill-yellow-500 mr-2" />
      <StarIcon className="h-6 w-6 fill-yellow-500 mr-2" />
      <StarIcon className="h-6 w-6 fill-yellow-500 mr-2" />
      <StarIcon className="h-6 w-6 fill-yellow-500 mr-2" />
      <StarIcon className="h-6 w-6 fill-yellow-500 mr-2" />
    </div>
    <p className="text-lg text-gray-800 mt-5 font-semibold text-left">High Quality Education</p>
    <p className="text-md text-gray-600 mt-3 text-left">
      As an international student, I found endless opportunities and a welcoming environment in Australia that fostered my growth and learning.
    </p>
    <div className="flex mt-5">
      <FaceSmileIcon className="h-6 w-6 fill-orange-500 mr-2" />
      <p className="text-lg text-gray-800 font-semibold text-left">Michael Lee</p>
    </div>
  </div>

  <div className="p-4 bg-white/50 rounded-3xl hover:bg-white/80">
    <div className="flex">
      <StarIcon className="h-6 w-6 fill-yellow-500 mr-2" />
      <StarIcon className="h-6 w-6 fill-yellow-500 mr-2" />
      <StarIcon className="h-6 w-6 fill-yellow-500 mr-2" />
      <StarIcon className="h-6 w-6 fill-yellow-500 mr-2" />
      <StarIcon className="h-6 w-6 fill-yellow-500 mr-2" />
    </div>
    <p className="text-lg text-gray-800 mt-5 font-semibold text-left">High Quality Education</p>
    <p className="text-md text-gray-600 mt-3 text-left">
      Australia&apos;s rich culture and stunning landscapes truly captivated my heart and mind.
    </p>
    <div className="flex mt-5">
      <FaceSmileIcon className="h-6 w-6 fill-orange-500 mr-2" />
      <p className="text-lg text-gray-800 font-semibold text-left">Emily Johnson</p>
    </div>
  </div>

  <div className="p-4 bg-white/50 rounded-3xl hover:bg-white/80">
    <div className="flex">
      <StarIcon className="h-6 w-6 fill-yellow-500 mr-2" />
      <StarIcon className="h-6 w-6 fill-yellow-500 mr-2" />
      <StarIcon className="h-6 w-6 fill-yellow-500 mr-2" />
      <StarIcon className="h-6 w-6 fill-yellow-500 mr-2" />
      <StarIcon className="h-6 w-6 fill-yellow-500 mr-2" />
    </div>
    <p className="text-lg text-gray-800 mt-5 font-semibold text-left">High Quality Education</p>
    <p className="text-md text-gray-600 mt-3 text-left">
      As an international student, I found endless opportunities and a welcoming environment in Australia that fostered my growth and learning.
    </p>
    <div className="flex mt-5">
      <FaceSmileIcon className="h-6 w-6 fill-orange-500 mr-2" />
      <p className="text-lg text-gray-800 font-semibold text-left">Michael Lee</p>
    </div>
  </div>
</div>

      </div>

      <Footer/>



      
    </>
  );
}
