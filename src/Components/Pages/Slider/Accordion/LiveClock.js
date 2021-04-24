import React from 'react';
import Clock from 'react-live-clock';

const LiveClock = () => {
  return (
    <div>
      <Clock format={'h:mm:ssa'} ticking={true} />
    </div>
  );
};

export default LiveClock;