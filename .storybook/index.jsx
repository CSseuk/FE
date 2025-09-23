import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';
import * as AsyncStorage from '@react-native-async-storage/async-storage';

import '@storybook/addon-ondevice-actions/register';
import '@storybook/addon-ondevice-controls/register';

configure(() => {
  require('../src/storybook/stories');
}, module);

const StorybookUIRoot = getStorybookUI({
  asyncStorage: AsyncStorage,
  shouldPersistSelection: true,
  onDeviceUI: true,
});

AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);

export default StorybookUIRoot;
