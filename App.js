"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var RootNavigator_1 = require("@src/navigation/RootNavigator");
var react_2 = require("@emotion/react");
var react_native_toast_message_1 = require("react-native-toast-message");
var theme_1 = require("@styles/theme");
var SHOW_SB = process.env.EXPO_PUBLIC_STORYBOOK === '1';
var StorybookUIRoot = SHOW_SB ? require('./.storybook').default : null;
function App() {
    if (SHOW_SB && StorybookUIRoot) {
        return <StorybookUIRoot />;
    }
    return (<react_2.ThemeProvider theme={theme_1.default}>
      <native_1.NavigationContainer>
        <RootNavigator_1.default />
        <react_native_toast_message_1.default />
      </native_1.NavigationContainer>
    </react_2.ThemeProvider>);
}
