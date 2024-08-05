import * as React from 'react';
import { Appbar } from 'react-native-paper';

export function MyComponent() {
  return (
    <Appbar.Header>
      <Appbar.Content title="App Clima" />
      <Appbar.Action icon="dots-vertical" onPress={() => {}} />
    </Appbar.Header>

  );
}