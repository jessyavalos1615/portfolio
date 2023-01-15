import { ButtonHTMLAttributes } from "react";

export interface ButtonProps {
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}