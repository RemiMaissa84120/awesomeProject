import React, { createContext, useState } from 'react';

export const ListingContext = createContext();

export const ListingProvider = ({ children }) => {
  const [listing, setListing] = useState([]);

  return (
    <ListingContext.Provider value={{ listing, setListing }}>
      {children}
    </ListingContext.Provider>
  );
};
