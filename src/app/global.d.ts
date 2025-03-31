import type { IStaticMethods } from 'flyonui/dist/index.js';

declare global {
  interface Window {
    // FlyonUI UI
    HSStaticMethods: IStaticMethods;
  }
}

export {};
