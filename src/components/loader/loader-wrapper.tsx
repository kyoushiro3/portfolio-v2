"use client";

import { useEffect, useState } from "react";
import ScreenRevealComponent from "./loader";

export default function LoaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Disable cursor while loading
    document.body.classList.add("loading");

    const timer = setTimeout(() => {
      setLoading(false);

      // Enable cursor after loader
      document.body.classList.remove("loading");
    }, 4200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <ScreenRevealComponent />}
      {!loading && children}
    </>
  );
}