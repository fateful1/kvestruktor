export type ObjectOnScreen = {
  name: string;
  width: number;
  height: number;
  left: number;
  top: number;
  angle: number;
  visible: boolean;
  interactive: boolean;
  buttonMode: boolean;
  fullwidth: boolean;
  img: string;
  inBack: boolean;
  simpleInfo: boolean;
  info: { ru: string; uk: string; en: string };
};

type Draggable = PIXI.DisplayObject & {
  data: PIXI.InteractionData | null;
  dragging: boolean;
};
