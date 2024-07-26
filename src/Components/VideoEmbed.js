import { stringSimilarity } from "../string-similarity.ts";
import React, { useState, useEffect} from 'react';


const VideoEmbed = ({ refreshTrigger, isOpenings, isEndings }) => {
  const [data, setData] = useState(null);
  
  // useState for taking user's guess input and showing the correct answer afterwards.
  const [userGuess, setUserGuess] = useState('');
  const [isGuessCorrect, setIsGuessCorrect] = useState(false);
  const [APILink, setAPILink] = useState('https://api.animethemes.moe/animetheme?sort=random&include=song,anime,animethemeentries.videos&type=op|ed');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(APILink);
        const result = await response.json();
        setData(result);
        setIsGuessCorrect(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [refreshTrigger, APILink]);
useEffect(() => {
  if (isOpenings && isEndings) {
    setAPILink('https://api.animethemes.moe/animetheme?sort=random&include=song,anime,animethemeentries.videos&type=op|ed');
  }
  else if (isOpenings && !isEndings) {
    setAPILink('https://api.animethemes.moe/animetheme?sort=random&include=song,anime,animethemeentries.videos&type=op');
  }
  else if (isEndings && !isOpenings) {
    setAPILink('https://api.animethemes.moe/animetheme?sort=random&include=song,anime,animethemeentries.videos&type=ed');
  }
}, [isOpenings, isEndings])

  if(!data) {
    return (
      <div className="text-white font-bold text-xl font-mono">
        loading
      </div>
    )
  }


  // Check if data exists and if there is a video
  if (data && data.animethemes && data.animethemes.length > 0) {
    const firstTheme = data.animethemes[0];
    const firstEntry = firstTheme.animethemeentries[0];
    const firstVideo = firstEntry.videos[0];

    const videoLink = firstVideo.link;
    const song = firstTheme.song.title
    const animeName = firstTheme.anime.name
    const songNumber = firstTheme.slug
    console.log(song);

    // Answers used to compare to user's input.
    const nameAndNumber = animeName + " " + songNumber;
    const songAndNumber = song + " " + songNumber;

    // Function to reveal the answer
    const showAnswer = () => {
      const show = true;
      setIsGuessCorrect(show);
    };

    // Compares the user guess to three different answers using a string similarity calculation.
    const handleGuessSubmit = () => {
      const score1 = stringSimilarity(userGuess, song);
      const score2 = stringSimilarity(userGuess, nameAndNumber);
      const score3 = stringSimilarity(userGuess, songAndNumber);

      if (score1 > .6 || score2 > .6 || score3 > .6) {

        const isCorrect = true;
        setIsGuessCorrect(isCorrect);
        console.log('Is Correct:', isCorrect);
        console.log(score1);
        console.log(score2);
        console.log(score3);
      }
    };

    return (
      <div className="flex flex-col items-center"> 

        {/* Fetched video displayed in this div. */}
        <div className="flex items-center justify-center">
          <iframe className="border-solid border-black border-8 rounded-xl bg-black bg-opacity-50 max-w-full 
          transition-all duration-300 ease-in 
          2xl:w-[560px] 2xl:h-[315px]
          xl:w-[560px] xl:h-[315px]
          lg:w-[560px] lg:h-[315px]
          md:w-[560px] md:h-[315px]
          sm:w-[400px] sm:h-[225px]
          xs:w-[280px] xs:h-[165px]"
            src={videoLink}
            title="Embedded Video"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Correct answer displayed in this div. */}
        <div className="inline-block text-white text-2xl text-center font-extrabold font-mono drop-shadow-[0_2px_2px_rgba(0,0,0,1.0)]
          transition-all duration-300 ease-in 
          2xl:text-2xl
          xl:text-2xl
          lg:text-2xl
          md:text-2xl
          sm:text-xl
          xs:text-lg">
          {isGuessCorrect && (
            <>
              <p className= "text-green-200 drop-shadow-[4px_4px_0px_rgba(1.0,1.0,1.0,1.0)]">Correct Answer</p>
              <p>Song: {song} {songNumber}</p>
              <p>Anime: {animeName}</p>
            </>
          )}
        </div>

        {/* Input handled in this div. */}
        {!isGuessCorrect && (
          <div className="m-2 inline-block font-mono drop-shadow-[0_2px_2px_rgba(0,0,0,1.0)]">
            <input type="text" value={userGuess} onChange={(e) => setUserGuess(e.target.value)} placeholder="Enter your guess" 
             className=" align-middle  font-extrabold text-black mr-2 rounded-lg
            transition-all duration-300 ease-in 
            2xl:text-2xl 2xl:w-96
            xl:text-2xl  xl:w-96
            lg:text-2xl  lg:w-96
            md:text-2xl  md:w-96
            sm:text-xl   sm:w-60
            xs:text-md   xs:w-25"/>
            <button onClick={handleGuessSubmit} className=" pl-2 pr-2 align-middle font-extrabold border-gray-900  bg-green-800 border-2 rounded-lg	text-white
            transition-all duration-300 ease-in 
            2xl:text-md 2xl:w-15 2xl:h-10
            xl:text-md  xl:w-15 xl:h-10
            lg:text-md  lg:w-15 lg:h-10
            md:text-md  md:w-15 md:h-10
            sm:text-sm  sm:w-15 sm:h-6
            xs:text-sm  xs:w-15 xs:h-6">
              Submit</button>
          </div>
        )}

        {/* Show answer button in this div. */}
        {!isGuessCorrect && (
          <div className="m-2 flex justify-end text-xl font-bold font-mono drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)]">
            <button onClick={showAnswer} className="pl-1 mt-[-8px] border-gray-900  bg-gray-800 border-2 rounded-lg px-1	text-white
            transition-all duration-300 ease-in
            2xl:text-md 2xl:w-15 2xl:h-10
            xl:text-md  xl:w-15 xl:h-10
            lg:text-md  lg:w-15 lg:h-10
            md:text-md  md:w-15 md:h-10
            sm:text-sm  sm:w-15 sm:h-6
            xs:text-sm  xs:w-15 xs:h-6">Show Answer</button>
          </div>
        )}
      </div>
    );
  }
  return null;
};

export default VideoEmbed;
