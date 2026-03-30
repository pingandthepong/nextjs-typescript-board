"use client";

type BaseProps = {
  label?: string;
  name?: string;
  placeholder?: string;
  className?: string;
  value?: string;
};

type InputProps = BaseProps & {
  as?: "input";
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type TextareaProps = BaseProps & {
  as: "textarea";
  rows?: number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

type Props = InputProps | TextareaProps;

export default function CommentFormItem(props: Props) {
  const { label, name, placeholder, className, value } = props;

  const baseStyle =
    "w-full pl-4 text-sm bg-gray-100 rounded-md outline-none focus:border border-neutral-400 focus:ring-3 ring-neutral-300 font-black font-medium placeholder:text-gray-500";

  return (
    <span className={`flex flex-col space-y-2 ${className ?? ""}`}>
      {label && (
        <label className="capitalize text-sm font-semibold tracking-tight text-gray-900">
          {label}
        </label>
      )}

      {props.as === "textarea" && (
        <textarea
          name={name}
          rows={props.rows}
          placeholder={placeholder}
          className={`${baseStyle} py-4 resize-none`}
          onChange={props.onChange}
          value={value ?? ""}
        />
      )}

      {props.as !== "textarea" && (
        <input
          id={name}
          name={name}
          type={props.type ?? "text"}
          placeholder={placeholder}
          className={`${baseStyle} h-10`}
          onChange={props.onChange}
          value={value ?? ""}
        />
      )}
    </span>
  );
}
