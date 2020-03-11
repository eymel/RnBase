import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './navigations';
import {Root} from 'native-base';

function App() {
  return (
    <Root>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Root>
  );
}

export default App;
