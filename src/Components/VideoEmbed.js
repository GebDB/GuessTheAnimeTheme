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
      <div> 

        {/* Fetched video displayed in this div. */}
        <div className="flex items-center justify-center">
          <iframe className="border-solid border-black border-8 rounded-xl bg-black bg-opacity-50"
            width="560"
            height="315"
            src={videoLink}
            title="Embedded Video"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Correct answer displayed in this div. */}
        <div className="inline-block text-white text-2xl font-extrabold font-mono drop-shadow-[0_2px_2px_rgba(0,0,0,1.0)]">
          {isGuessCorrect && (
            <>
              <p className= "text-green-600">Correct Answer:</p>
              <p>Song: {song} {songNumber}</p>
              <p>Anime: {animeName}</p>
            </>
          )}
        </div>

        {/* Input handled in this div. */}
        {!isGuessCorrect && (
          <div className="m-2 inline-block font-mono drop-shadow-[0_2px_2px_rgba(0,0,0,1.0)]">
            <input type="text" value={userGuess} onChange={(e) => setUserGuess(e.target.value)} placeholder="Enter your guess" 
             className="text-2xl align-middle  font-extrabold text-black mr-2 w-96 rounded-lg"/>
            <button onClick={handleGuessSubmit} className=" pl-2 pr-2 align-middle text-xl font-extrabold border-gray-900  bg-green-800 border-2 rounded-lg	text-white">
              Submit Guess</button>
          </div>
        )}

        {/* Show answer button in this div. */}
        {!isGuessCorrect && (
          <div className="m-2 flex justify-end text-xl font-bold font-mono drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)]">
            <button onClick={showAnswer} className="pl-1 mt-[-8px] border-gray-900  bg-gray-800 border-2 rounded-lg px-1	text-white">Show Answer</button>
          </div>
        )}
      </div>
    );
  }
  return null;
};

export default VideoEmbed;
