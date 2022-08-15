export interface AvatarProps {
  src: string;
  alt: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  type?: "circle" | "square";
  className?: string;
  style?: React.CSSProperties;
  bordered?: boolean;
  key?: string;
}
