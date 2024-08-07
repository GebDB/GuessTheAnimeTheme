import VideoEmbed from "./VideoEmbed";
import React, { useState } from 'react';

const MainContent = () => {
  const [refreshTrigger, setRefreshTrigger] = useState(false);
  const [isOpenings, setOpenings] = useState(true);
  const [isEndings, setEndings] = useState(true);

  const toggleOpenings = () => {
    if (isEndings) {
      setOpenings(!isOpenings);
    }
  };
  const toggleEndings = () => {
    if (isOpenings) {
      setEndings(!isEndings);
    }
  };

  const handleRefreshClick = () => {
    // Set the refreshTrigger state to true to trigger a re-render of VideoEmbed
    setRefreshTrigger(true);
    setTimeout(() => {
      setRefreshTrigger(false);
    }, 0);
  };

  return (
    <div>
      <button onClick={handleRefreshClick} className=" text-white font-extrabold font-mono drop-shadow-[0_2px_2px_rgba(0,0,0,1.0)]
            transition-all duration-300 ease-in
            2xl:text-lg
            xl:text-lg  
            lg:text-lg  
            md:text-lg  
            sm:text-md   
            xs:text-sm">
        <img className="inline-block py-1 px-1"
        src={`${process.env.PUBLIC_URL}/Assets/refresh.png`}
        alt="Refresh"
        width="25"
        height="25"
                />Next</button>
      <VideoEmbed refreshTrigger={refreshTrigger} 
                  isOpenings = {isOpenings} 
                  isEndings = {isEndings} />

      {/* filter menu below */}
      <div className="flex flex-col justify-center items-center">
            <h1 className="inline-block px-1 bg-black text-center text-white font-extrabold font-mono
            transition-all duration-300 ease-in 
            2xl:text-2xl 2xl:w-96
            xl:text-2xl  xl:w-96
            lg:text-2xl  lg:w-96
            md:text-2xl  md:w-96
            sm:text-xl   sm:w-80
            xs:text-lg   xs:w-60">
                Filters
            </h1>
            <div onClick={toggleOpenings} style={{ cursor: 'pointer' }} className="inline-block px-3 bg-black bg-opacity-60 text-white text-lg font-extrabold font-mono
            transition-all duration-300 ease-in 
            2xl:text-2xl 2xl:w-96
            xl:text-2xl  xl:w-96
            lg:text-2xl  lg:w-96
            md:text-2xl  md:w-96
            sm:text-xl   sm:w-80
            xs:text-lg   xs:w-60">
                Openings
                {isOpenings && (
                    <img className="inline-block rounded-md px-1"
                    src={`${process.env.PUBLIC_URL}/Assets/checkmark1.png`}
                    alt="Checkmark"
                    width="25"
                    height="25"
                />
                )}
            </div>

            <div onClick={toggleEndings} style={{ cursor: 'pointer' }} className="inline-block px-3 pb-1 bg-black bg-opacity-60 text-white text-lg font-extrabold font-mono
            transition-all duration-300 ease-in 
            2xl:text-2xl 2xl:w-96
            xl:text-2xl  xl:w-96
            lg:text-2xl  lg:w-96
            md:text-2xl  md:w-96
            sm:text-xl   sm:w-80
            xs:text-lg   xs:w-60">
                Endings
                {isEndings && (
                <img className="inline-block rounded-md px-1"
                    src={`${process.env.PUBLIC_URL}/Assets/checkmark1.png`}
                    alt="Checkmark"
                    width="25"
                    height="25"
                />
            )}
            </div>
        </div>
    </div>
  );
};

export default MainContent;
