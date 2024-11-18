export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: "primary" | "secondary";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export const Button = ({
  children,
  variant = "primary",
  disabled = false,
  type = "button",
  ...props
}: ButtonProps) => {
  const classNames = `${
    variant === "primary"
      ? 'bg-orange-900 hover:shadow-lg hover:shadow-orange-900/50 hover:bg-orange-900/[.9]'
      : 'bg-purple-900 hover:shadow-lg hover:shadow-purple-900/50 hover:bg-purple-900/[.9]'
  }`;

  return (
    <button
      type={type}
      className={`px-4 gap-2 h-10 rounded-full text-sm text-white transition-transform transform hover:scale-105 flex items-center ${classNames}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};