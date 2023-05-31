import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './src/context/AuthContext';
import {FavoriteProvider} from './src/context/FavoriteContext';
import {ListingProvider} from './src/context/ListingContext';

import Routes from './Routes';

function App(): JSX.Element {
  return (
    <AuthProvider>
      <ListingProvider>
        <FavoriteProvider>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </FavoriteProvider>
      </ListingProvider>
    </AuthProvider>
  );
}

export default App;
