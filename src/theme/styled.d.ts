import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    bgColor: string;
    componentBgColor: string;
    textColor: string;
    borderColor: string;
    toggleColor: string;
  }
}
