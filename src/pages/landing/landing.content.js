import React from 'react';

const Content = () => {
  return (
    <>
      <NowPlaying />
      <Upcoming />
    </>
  );
};

const NowPlaying = () => {
  return (
    <nav className="level">
      <div className="level-item has-text-centered">
        <p className="title">Now Playing</p>
      </div>
    </nav>
  );
};

const Upcoming = () => {
  return (
    <nav className="level">
      <div className="level-item has-text-centered">
        <p className="title">Upcoming</p>
      </div>
    </nav>
  );
};

export default Content;
