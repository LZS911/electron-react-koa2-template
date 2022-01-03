export interface IIpcRenderer {
  myPing(): void;
  on(channel: any, func: any): void;
  once(channel: any, func: any): void;
  goBack(): void;
  goForward(): void;
  canGoBackOrForward(setData: React.Dispatch<React.SetStateAction<any>>): void;
  generateApi(): void;
}
export interface IElectronAPI {
  ipcRenderer: IIpcRenderer;
}

declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}

declare module '*.svg?component' {
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  export default ReactComponent;
}
