import React, { useEffect, useState } from "react";
import { OverlayContainer } from "react-aria";

export const SuperUIOverlay = ({ children }: { children: React.ReactNode }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(typeof window !== "undefined");
  }, []);

  return isBrowser ? <OverlayContainer>{children}</OverlayContainer> : null;
};

export { OverlayProvider as SuperUIProvider } from "react-aria";
