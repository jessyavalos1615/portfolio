export enum LabelSize {
  xsmalllabel = 'xsmalllabel',
  smalllabel = 'smalllabel',
  mediumlabel = 'mediumlabel',
  largelabel = 'largelabel',
  xlargelabel = 'xlargelabel',
}

export interface BaseLabelProps {
  size: LabelSize;
}

export interface LabelProps extends BaseLabelProps {
  text: any;
  cursor?: boolean;
  repeat?: number;
  style?: any;
}

export interface TypingLabelProps extends BaseLabelProps {
  sequence: Array<string | number>;
  cursor?: boolean;
  repeat?: number;
  style?: any;
}
