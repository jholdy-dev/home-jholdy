export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...other }: ButtonProps): JSX.Element {
  return (
    <button
      type="button"
      {...other}
      className="p-4 text-white rounded bg-red-900"
    >
      {children}
    </button>
  );
}

Button.displayName = "Button";
