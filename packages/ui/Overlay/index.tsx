import React, { useEffect, useState } from "react";
import { OverlayContainer, OverlayProvider, SSRProvider } from "react-aria";
import { ToastProvider } from "../Toast";

export const SuperUIOverlay = ({ children }: { children: React.ReactNode }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(typeof window !== "undefined");
  }, []);

  return isBrowser ? <OverlayContainer>{children}</OverlayContainer> : null;
};

export const SuperUIProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <OverlayProvider>
      <ToastProvider>
        <SSRProvider>{children}</SSRProvider>
      </ToastProvider>
    </OverlayProvider>
  );
};
