export type MainAreaObject = {
  name: string;
  width: number;
  height: number;
  left: number;
  top: number;
  visible: boolean;
  interactive: boolean;
  buttonMode: boolean;
  fullwidth: boolean;
  angle: number;
  image: string;
  id: number;
  inBackpack: boolean;
  simpleInfo: boolean;
  info: { ru: string; uk: string; en: string };
};

// @ts-ignore
type Draggable = PIXI.DisplayObject & {
  // @ts-ignore
  data: PIXI.InteractionData | null;
  dragging: boolean;
};
