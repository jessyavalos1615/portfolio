export interface BaseButtonProps {
  variant: ButtonVariant;
}

export interface ButtonProps extends BaseButtonProps {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export enum ButtonVariant {
  default = 'default',
  secondary = 'secondary',
  inactive = 'inactive',
}
