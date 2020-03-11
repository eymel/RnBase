import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from './navigations';
import {Root} from 'native-base';

function App() {
  return (
    <Root>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Root>
  );
}

export default App;
