import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    bgPrimary: '#fff',
    bgSecondary: '#f0f2f5',
    bgThird: '#e4e6eb',
    bgForth: '#f0f2f5',
    colorPrimary: '#050505',
    colorSecondary: '#65676b',
    divider: '#ced0d4',
    darkBgPrimary: '#18191a',
    darkBgSecondary: '#242526',
    darkBgThird: '#3a3b3c',
    darkColorPrimary: '#242526',
    darkColorSecondary: '#b0b3b8',
    blue: '#1876f2',
    green: '#42b72a',
    lightBlue: '#e7f3ff',
    borderColor: '#ccced2',
    shadow1: 'rgba(0, 0, 0, 0.2)',
    shadow2: 'rgba(0, 0, 0, 0.1)',
    shadow3: 'rgba(0, 0, 0, 0.3)',
    shadowInset: 'rgba(255, 255, 255, 0.5)'
  }
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      bgPrimary: '#fff',
      bgSecondary: '#f0f2f5',
      bgThird: '#e4e6eb',
      bgForth: '#f0f2f5',
      colorPrimary: '#050505',
      colorSecondary: '#65676b',
      divider: '#ced0d4',
      darkBgPrimary: '#18191a',
      darkBgSecondary: '#242526',
      darkBgThird: '#3a3b3c',
      darkColorPrimary: '#242526',
      darkColorSecondary: '#b0b3b8',
      blue: '#1876f2',
      green: '#42b72a',
      lightBlue: '#e7f3ff',
      borderColor: '#ccced2',
      shadow1: 'rgba(0, 0, 0, 0.2)',
      shadow2: 'rgba(0, 0, 0, 0.1)',
      shadow3: 'rgba(0, 0, 0, 0.3)',
      shadowInset: 'rgba(255, 255, 255, 0.5)'
    }
  }
}
