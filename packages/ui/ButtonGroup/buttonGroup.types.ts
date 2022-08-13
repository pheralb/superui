export interface ButtonGroupProps {
  children: React.ReactNode;
  variant?: "solid" | "outline" | "transparent";
  size?: "small" | "medium" | "large";
  className?: string;
}

export interface GroupItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "solid" | "outline" | "transparent";
  size?: "small" | "medium" | "large";
  name?: string;
  active?: string;
  setActive?: (index: string) => void;
}
