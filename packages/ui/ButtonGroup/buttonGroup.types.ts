export interface ButtonGroupProps {
  children: React.ReactNode;
  variant?: "solid" | "outline" | "transparent";
  size?: "small" | "medium" | "large";
  className?: string;
}

export interface GroupItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  name: string;
  variant?: "solid" | "outline" | "transparent";
  size?: "small" | "medium" | "large";
  active?: string;
  setActive?: (index: string) => void;
}
