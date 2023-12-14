import VideoEmbed from "./VideoEmbed"
import React from 'react';
import FilterMenu from './FilterMenu';

const MainContent = () => {
  return (
    <div>
      <div>
        <VideoEmbed/>
      </div>
      <div>
        <FilterMenu/>
      </div>

    </div>
  );
};

export default MainContent;
