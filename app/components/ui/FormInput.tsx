// 재사용 UI

"use client";

import { Search } from "lucide-react";

type BaseProps = {
  name?: string;
  id?: string;
  placeholder?: string;
  autoFocus?: boolean;
  size?: string;
  className?: string;
  showIcon?: boolean;
  defaultValue?: string;
};

type InputProps = BaseProps & {
  as?: "input";
  type?: string;
};

type TextareaProps = BaseProps & {
  as: "textarea";
};

type FormInputProps = InputProps | TextareaProps;

export default function FormInput(props: FormInputProps) {
  const {
    name,
    id,
    placeholder,
    autoFocus,
    size = "full",
    className = "",
    showIcon = false,
    defaultValue,
  } = props;

  const baseStyle =
    "w-full text-base bg-neutral-100 shadow-sm rounded-md outline-none focus:border border-neutral-400 focus:ring-3 ring-neutral-300";

  return (
    <div className={`relative ${size === "short" ? "max-w-md" : ""}`}>
      {showIcon && (
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
      )}

      {props.as === "textarea" ? (
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
          className={`${baseStyle} p-4 resize-none  ${className} min-h-40`}
        />
      ) : (
        <input
          id={id}
          type={props.type ?? "text"}
          name={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
          className={`${baseStyle} h-11 ${showIcon ? "pl-11" : "pl-4"} ${className}`}
          autoFocus={autoFocus}
        />
      )}
    </div>
  );
}
