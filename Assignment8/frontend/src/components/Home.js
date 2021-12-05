import React from 'react';
import HomeBar from './home/Homebar';
import Ad from './home/Ad';
import Listings from './home/Listings';

// export const WorkspaceContext = createContext();
/**
 * Represents the home page of our app.
 * @return {object} the the home page
 */
export default function Home() {
  return (
    <div>
      <HomeBar/>
      <Ad/>
      <Listings/>
    </div>
  );
}

