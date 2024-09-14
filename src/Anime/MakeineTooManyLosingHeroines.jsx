import React, { useState } from 'react';

const episodes = [
    { id: 1, title: "Episode 1", embedCode: `<iframe src="https://drive.google.com/file/d/14QgbuGNIEij5WGj0Ung7fJf9E2LZK4_M/preview" width="80%" height="80%" allow="autoplay; fullscreen"></iframe>` },
    { id: 2, title: "Episode 2", embedCode: `<iframe src="https://drive.google.com/file/d/18WfajRLui0uQfrIobn5PgmiaygfzdkjV/preview" width="80%" height="80%" allow="autoplay; fullscreen"></iframe>` },
    { id: 3, title: "Episode 3", embedCode: `<iframe src="https://drive.google.com/file/d/15xDgJZcJv4OMPevoUTaUeLtjzg4hMu9a/preview" width="80%" height="80%" allow="autoplay; fullscreen"></iframe>` },
    { id: 4, title: "Episode 4", embedCode: `<iframe src="https://drive.google.com/file/d/1-WITgzZccqGNzO0kDhlfVi0LB19y2Cvz/preview" width="80%" height="80%" allow="autoplay; fullscreen"></iframe>` },

];

const MakeineTooManyLosingHeroines = () => {
    const [currentEpisode, setCurrentEpisode] = useState(episodes[0]);
  
    return (
      <div className="relative w-full h-screen">
        
        {/* Header Section */}
  
        {/* Content Section with 10% Top Margin */}
        <div className="flex flex-grow absolute w-full" style={{ top: "10%" }}>
          
          {/* Left Side: Episode List */}
          <div className="w-1/5 bg-gray-900 p-4 overflow-y-auto">
            <h2 className="text-white text-lg mb-4">Episodes</h2>
            <div className="space-y-2">
              {episodes.map((episode, index) => (
                
                <button
                  key={episode.id}
                  className="w-20 text-left p-3 bg-black hover:bg-blue-500 text-white rounded"
                  onClick={() => setCurrentEpisode(episode)}
                  style={{ marginBottom: '8px' }} // Adds space between buttons
                >
                  <center>{index + 1} {/* Displays just the episode number */}</center>
                </button>
              ))}
            </div>
          </div>
  
          {/* Middle Section: Video Player */}
          <div className="w-4/5 bg-black flex justify-center items-center p-4">
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
              <div className="absolute top-0 left-0 w-full h-full" dangerouslySetInnerHTML={{ __html: currentEpisode.embedCode }} />
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default MakeineTooManyLosingHeroines;
