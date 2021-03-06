declare module "chunk-name:*" {
  const value: string;
  export default value;
}

declare module "resource-list:" {
  const value: string[];
  export default value;
}

declare module "consts:" {
  export const version: string;
  export const nebulaSafeDark: import("src/rendering/constants").Color;
}

declare module "*.glsl" {
  const content: string;
  export default content;
}

interface GA {
  (...args: any[]): void;
  q: any[];
}
declare var ga: GA;
interface Window {
  ga: GA;
}

interface HTMLElement {
  webkitRequestFullscreen?: () => void;
}
