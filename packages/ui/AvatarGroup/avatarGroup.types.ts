export interface AvatarGroupProps {
  data: Avatar[];
  type?: "circle" | "square";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  tooltip?: boolean;
  max?: number;
  bordered?: boolean;
}

export interface Avatar {
  src: string;
  alt?: string;
  name?: string;
}
