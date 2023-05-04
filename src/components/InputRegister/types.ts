import { InputHTMLAttributes } from "react";

export interface IInputFormRegisterProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: string;
  id: string;
  error?: string;
  date: number;
}

export interface ISInputProps {
  width?: string;
}
