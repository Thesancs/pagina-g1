declare namespace JSX {
  interface IntrinsicElements {
    'vturb-smartplayer': {
      id: string;
      style?: React.CSSProperties;
      className?: string;
    };
  }
}

declare global {
  interface Window {
    SmartPlayer: any;
  }
  
  interface HTMLElement {
    isReady?: boolean;
    displayHiddenElements?: (delay: number, selectors: string[], options?: any) => void;
  }
} 